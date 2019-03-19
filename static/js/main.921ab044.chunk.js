(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(20),l=t.n(s),c=(t(59),t(10)),o=t(11),i=t(14),m=t(12),u=t(13),d=t(21),h=t(22),p=t(24),g=t(130),f=t(131),v=t(132),y=t(133),E=t(134),k=t(135),C=t(136),b=t(137),w=t(140),N=t(138),x=t(139),D=t(128),O=t(8),M=t.n(O),S=(t(79),t(47)),T=t.n(S);M.a.addPlugin(T.a);M.a.defaults({"setting-disclaimerDismissed":!1,"setting-displayText":!1,"setting-displayImages":!0,"setting-devTools":!1});var I=function(e){return M.a.get("setting-".concat(e))},j=function(e,a){return M.a.set("setting-".concat(e),a)},A=function(e){var a=I(e);return j(e,!a)},_=t(48),P=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).componentDidMount=function(){},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement(d.Helmet,{title:"Magic"},r.a.createElement("link",{rel:"manifest",href:"/manifest.json"})),r.a.createElement("div",{className:"mt-4"},r.a.createElement(_.a,{tag:h.b,exact:!0,to:"/planechase",block:!0,color:"info",size:"lg"},r.a.createElement("i",{className:"ms ms-planeswalker ms-4x mx-2 d-block"}),r.a.createElement("span",{className:"d-block"},"Planechase")),r.a.createElement(_.a,{tag:h.b,exact:!0,to:"/archenemy",block:!0,color:"danger",size:"lg"},r.a.createElement("i",{className:"ss ss-arc ss-3x mx-2 d-block"}),r.a.createElement("span",{className:"d-block"},"Archenemy"))))}}]),a}(n.Component),Y=t(19),B=t.n(Y),H=t(28),F=function(e){return M.a.get("".concat(e,"-currentCard"))},W=function(e,a){return M.a.set("".concat(e,"-currentCard"),a)},z=function(e){return M.a.get("".concat(e,"-revealedCards"))},R=function(e,a){return M.a.set("".concat(e,"-revealedCards"),a)},U=function(e,a){return a&&a.customProperties.find(function(a){return a.name===e})},L=function(e){return"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=".concat(e.multiverse_ids[0],"&type=card")},G=function(e){var a=e.planes;return r.a.createElement(d.Helmet,{title:"Planechase"},r.a.createElement("link",{rel:"shortcut icon",href:"mtg/icon/planechase.ico"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"mtg/icon/planechase_256.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"64x64",href:"mtg/icon/planechase_64.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"128x128",href:"mtg/icon/planechase_128.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"256x256",href:"mtg/icon/planechase_256.png"}),r.a.createElement("link",{rel:"manifest",href:"/planechase-manifest.json"}),a&&a.map(function(e){return r.a.createElement("link",{rel:"preload",href:L(e),as:"image",key:e.id})}))},K=function(e,a,t){var n=q(e);n.splice(t,0,n.splice(a,1)[0]),J(e,n)},V=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=q(e);return n&&!t||(console.log("Creating New ".concat(e," Deck")),n=ce(a),M.a.set("".concat(e,"-history"),[]),J(e,n)),n},q=function(e){return M.a.get("".concat(e,"-deck"))},J=function(e,a){return M.a.set("".concat(e,"-deck"),a)},X=function(e){var a=q(e),t=a.shift();return $(e,t),J(e,a),t},$=function(e,a){var t=M.a.get("".concat(e,"-history"));t.push(a),M.a.set("".concat(e,"-history"),t)},Q=function(e,a){return M.a.get("".concat(e,"-history"))},Z=function(e){var a=M.a.get("".concat(e,"-history")),t=a.pop();return t&&ee(e,[t]),M.a.set("".concat(e,"-history"),a),a[a.length-1]},ee=function(e,a){var t=q(e);J(e,a.concat(t))},ae=function(e,a){var t=q(e);J(e,t.concat(a))},te=function(e,a){return q(e).find(function(e){return e.id===a})},ne=function(e,a){var t=te(e,a);t&&(se(e,[t]),ee(e,[t]))},re=function(e,a){var t=te(e,a);t&&(se(e,[t]),ae(e,[t]))},se=function(e,a){var t=q(e).filter(function(e){return!a.find(function(a){return a.id===e.id})});J(e,t)},le=function(e,a){for(var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=[],r=q(e),s=Math.min(r.length,a),l=0,c=s,o=0;o<c;o++)n.push(r[o]),t&&(r[o].type_line.search("Plane")>=0&&l++,o===c-1&&l<s&&c++);return n},ce=function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e},oe=t(52),ie=t.n(oe),me=t(30),ue=t.n(me),de=ie.a.create(),he=function(){var e=Object(H.a)(B.a.mark(function e(){var a,t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=ge("planes")){e.next=12;break}return console.log("Loading from Axios"),e.next=6,de.get("https://api.scryfall.com/cards/search?include_extras=1&q=t%3Aplane+or+t%3Aphenomenon&unique=cards");case 6:t=e.sent,fe("planes",a=(a=t.data.data).map(function(e){return pe(e)})),e.next=13;break;case 12:console.log("Loaded from store");case 13:return e.abrupt("return",a);case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}},e,null,[[0,16]])}));return function(){return e.apply(this,arguments)}}();function pe(e){var a={Aretopolis:[{name:"counter",type:"Scroll"}],"Chaotic Aether":[{name:"all-chaos"}],"Interplanar Tunnel":[{name:"top-5"}],"Kilnspire District":[{name:"counter",type:"Charge"}],"Mount Keralia":[{name:"counter",type:"Pressure"}],"Naar Isle":[{name:"counter",type:"Flame"}],"Spatial Merging":[{name:"two-planes"}],"Stairs to Infinity":[{name:"chaos-trigger"},{name:"scry-1"}],"Pools of Becoming":[{name:"chaos-trigger"},{name:"triple-chaos"}],"Your Inescapable Doom":[{name:"unabandonable"},{name:"counter",type:"Doom"}]};return a[e.name]?e.customProperties=a[e.name]:e.customProperties=[],e.oracle_html={__html:e.oracle_text.replace(/\r\n/g,"<br />").replace(/[\r\n]/g,"<br />").replace(/{CHAOS}/g,'<i class="ms ms-chaos "></i>').replace(/CHAOS/g,'<i class="ms ms-chaos "></i>').replace(/{W}/g,'<i class="ms ms-w ms-cost"></i>').replace(/{U}/g,'<i class="ms ms-u ms-cost"></i>').replace(/{B}/g,'<i class="ms ms-b ms-cost"></i>').replace(/{R}/g,'<i class="ms ms-r ms-cost"></i>').replace(/{G}/g,'<i class="ms ms-g ms-cost"></i>').replace(/\{1\}/g,'<i class="ms ms-1 ms-cost"></i>').replace(/\{2\}/g,'<i class="ms ms-2 ms-cost"></i>').replace(/\{3\}/g,'<i class="ms ms-3 ms-cost"></i>').replace(/\{T\}/g,'<i class="ms ms-tap"></i>').replace(/{X}/g,'<i class="ms ms-x ms-cost"></i>').replace(/X/g,'<i class="ms ms-x"></i>')},e}function ge(e){var a,t=M.a.get(e),n=M.a.get("".concat(e,"-fetched"));return!t||(a=n)&&ue()().diff(ue.a.unix(a),"days")>5?null:t}function fe(e,a){M.a.set(e,a),M.a.set("".concat(e,"-fetched"),ue()().unix())}var ve=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={dotsCount:e.start||0},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.interval,t=void 0===a?500:a;this.dotsInterval=setInterval(function(){e.setState({dotsCount:e.state.dotsCount+1})},t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.dotsInterval)}},{key:"getDotString",value:function(e,a){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",n=e%(a+1),r="",s=0;s<n;s++)r+=t;return r}},{key:"render",value:function(){var e=this.props,a=e.label,t=void 0===a?"Loading":a,n=e.className,s=e.numDots,l=void 0===s?3:s,c=this.state.dotsCount,o=this.getDotString(c,l,"."),i="loading-dots ".concat(n);return r.a.createElement("span",{className:i},t,o)}}]),a}(n.Component),ye=t(117),Ee=t(141),ke=t(118),Ce=t(119),be=t(120),we=t(121),Ne=t(122),xe=t(123),De=t(124),Oe=t(125),Me=t(53),Se=t.n(Me),Te=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={counters:{}},t.incrementCounter=function(){var e=t.props.card,a=t.state.counters;a[e.id]=t.counterCount()+1,t.setState({counters:a})},t.counterCount=function(){var e=t.props.card;return t.state.counters[e.id]||0},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.setState({counters:{}})}},{key:"render",value:function(){var e=function(e){return e.customProperties.find(function(e){return"counter"===e.name}).type}(this.props.card);return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-shadow"},this.counterCount()),r.a.createElement(_.a,{onClick:this.incrementCounter,color:"dark",className:"btn-translucent"},"Add ",e," Counter"))}}]),a}(n.Component),Ie=(t(108),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={modalOpen:!1},t.toggleModal=function(){console.log("Toggle Modal"),t.setState({modalOpen:!t.state.modalOpen})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.listDisplay,n=e.card,s=e.children;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.a,{color:"dark",onClick:this.toggleModal},r.a.createElement("div",null,n.name)),r.a.createElement(Ee.a,{isOpen:this.state.modalOpen,toggle:this.toggleModal,size:"md",backdrop:!0,contentClassName:"bg-secondary"},r.a.createElement(ke.a,{className:"p-0",centered:"true"},r.a.createElement(a,{card:n}),s))):r.a.createElement(Ce.a,{inverse:!0,className:"mtg-plane-card"},this.renderImage(),this.renderBody(),this.renderActions())}},{key:"renderBody",value:function(){var e=this.renderCounter(),a=this.renderChildren(),t=this.renderText();return(e||a||t)&&r.a.createElement(be.a,null,e,a,t)}},{key:"renderCounter",value:function(){var e=this.props,a=e.card,t=e.renderActions,n=I("displayImages"),s=U("counter",a);if(t&&s)return n?r.a.createElement(we.a,{className:"text-center"},r.a.createElement(Ne.a,{className:"text-center pt-5 mt-sm-5"},r.a.createElement(Te,{card:a}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(Te,{card:a}))}},{key:"renderChildren",value:function(){var e=this.props.children,a=I("displayImages");if(e)return a?r.a.createElement(we.a,{className:"text-center"},r.a.createElement(Ne.a,{className:"text-center pt-5 mt-sm-5"},e)):r.a.createElement("div",{className:"text-center"},e)}},{key:"renderActions",value:function(){this.props.card}},{key:"renderText",value:function(){var e=this.props.card;if(I("displayText"))return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne.a,null,e.name),r.a.createElement(xe.a,null,e.type_line),r.a.createElement(De.a,{dangerouslySetInnerHTML:e.oracle_html})):r.a.createElement(Ne.a,null,"None")}},{key:"renderImage",value:function(){if(I("displayImages"))return r.a.createElement(Oe.a,{top:!0,width:"100%",src:this.imageURI(),className:"mtg-card mtg-card-plane"})}},{key:"imageURI",value:function(){var e=this.props.card;return e?L(e):Se.a}}]),a}(n.Component)),je=t(17),Ae=t(126),_e=t(127),Pe=t(129),Ye=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={loading:!1,planes:[],deck:null,currentCard:null,counters:0,revealedCards:[],tripleChaosModalOpen:!1,scryModalOpen:!1,planeswalkDisabled:!1,showHistory:!1,showDeck:!1,showDeckImages:!1},t.componentDidMount=Object(H.a)(B.a.mark(function e(){var a,n,r,s,l,c;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he();case 2:a=e.sent,n=V("planechase",a),r=F("planechase"),s=z("planechase")||[],l=!!U("top-5",r),c=s.length>0&&!!U("scry-1",r),t.setState({planes:a,loading:!1,deck:n,currentCard:r,revealedCards:s,planeswalkDisabled:l,scryModalOpen:c});case 9:case"end":return e.stop()}},e)})),t.refreshDeck=function(){var e=q("planechase");t.setState({deck:e})},t.planeswalk=function(){var e=X("planechase");W("planechase",e);var a=[];U("two-planes",e)&&(a=le("planechase",2,!0),se("planechase",a)),U("top-5",e)&&(a=le("planechase",5,!0),se("planechase",a),t.setState({planeswalkDisabled:!0})),R("planechase",a),t.refreshDeck(),t.setState({currentCard:e,counters:0,revealedCards:a})},t.reset=Object(H.a)(B.a.mark(function e(){var a,n,r;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,he();case 3:a=e.sent,n=V("planechase",a,!0),r=W("planechase",null),t.setState({planes:a,loading:!1,deck:n,currentCard:r});case 7:case"end":return e.stop()}},e)})),t.undo=Object(H.a)(B.a.mark(function e(){var a;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=Z("planechase"),t.refreshDeck(),t.setState({currentCard:a});case 3:case"end":return e.stop()}},e)})),t.triggerChaos=function(){var e=t.state,a=e.currentCard,n=e.revealedCards;if(console.log("Chaos Triggered"),U("triple-chaos",a)){var r=le("planechase",3,!0);se("planechase",r);var s=ce(r.slice());ae("planechase",s),t.refreshDeck(),R("planechase",r),t.setState({revealedCards:r,tripleChaosModalOpen:!0})}if(U("scry-1",a)){if(console.log("revealed cards",n),!n||0===n.length){var l=le("planechase",1,!1);se("planechase",l),R("planechase",l),t.setState({revealedCards:l})}t.setState({scryModalOpen:!0})}},t.renderDevTools=function(){if(I("devTools"))return r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement("h5",null,"Dev Tools"),r.a.createElement(_.a,{onClick:t.undo,color:"warning",block:!0},"Undo"),t.renderDeck())},t.toggleDeck=function(){t.setState({showDeck:!t.state.showDeck})},t.toggleDeckImages=function(){t.setState({showDeckImages:!t.state.showDeckImages})},t.manipulateDeck=function(){t.refreshDeck()},t.renderDeck=function(){var e=t.state,a=e.showDeck,n=e.showDeckImages,s=q("planechase");return r.a.createElement("div",{className:"my-2"},r.a.createElement(_.a,{onClick:t.toggleDeck,block:!0},a?"Hide":"Show"," Deck"),r.a.createElement(je.a,{in:a},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{onClick:t.toggleDeckImages,block:!0},n?"Hide":"Show"," Images"),r.a.createElement(Ae.a,null,s.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(Ie,{card:e,listDisplay:!n}),r.a.createElement(ye.a,null,r.a.createElement(_.a,{disabled:0===a,onClick:function(){return t.manipulateDeck(K("planechase",a,a-1))}},"Up"),r.a.createElement(_.a,{disabled:a===s.length-1,onClick:function(){return t.manipulateDeck(K("planechase",a,a+1))}},"Down"),r.a.createElement(_.a,{disabled:0===a,onClick:function(){return t.manipulateDeck(ne("planechase",e.id))}},"Top"),r.a.createElement(_.a,{disabled:a===s.length-1,onClick:function(){return t.manipulateDeck(re("planechase",e.id))}},"Bottom"),r.a.createElement(_.a,{color:"danger",onClick:function(){return t.manipulateDeck(se("planechase",[e]))}},"Remove")))})))))},t.toggleHistory=function(){t.setState({showHistory:!t.state.showHistory})},t.renderHistory=function(){var e=t.state.showHistory,a=Q("planechase");return r.a.createElement("div",{className:"my-2"},r.a.createElement(_.a,{onClick:t.toggleHistory,block:!0},e?"Hide":"Show"," History"),r.a.createElement(je.a,{in:e},e&&r.a.createElement(Ae.a,null,a.reverse().map(function(e){return r.a.createElement(Ie,{card:e,key:e.id,listDisplay:!0})}))))},t.selectPlane=function(e){var a=t.state.revealedCards;se("planechase",a),ee("planechase",[e]);var n=a.filter(function(a){return a.id!==e.id}),r=ce(n.slice());ae("planechase",r),R("planechase",[]),t.setState({planeswalkDisabled:!1,revealedCards:[]}),t.planeswalk()},t._tripleChaosModalClose=function(){R("planechase",[]),t.setState({tripleChaosModalOpen:!1,revealedCards:[]})},t._tripleChaosModalToggle=function(){t.state.tripleChaosModalOpen&&t._tripleChaosModalClose()},t._scryModalClose=function(){R("planechase",[]),t.setState({scryModalOpen:!1,revealedCards:[]})},t._scryTop=function(){var e=t.state.revealedCards;ee("planechase",e),console.log("Scry Top",e),t.refreshDeck(),R("planechase",[]),t.setState({revealedCards:[],scryModalOpen:!1})},t._scryBottom=function(){var e=t.state.revealedCards;ae("planechase",e),console.log("Scry Bottom",e),t.refreshDeck(),R("planechase",[]),t.setState({revealedCards:[],scryModalOpen:!1})},t.renderScryModal=function(){var e=t.state,a=e.revealedCards,n=e.scryModalOpen;if(a&&n)return r.a.createElement(Ee.a,{isOpen:!!n,size:"md",contentClassName:"bg-secondary"},r.a.createElement(_e.a,{className:"justify-content-center text-white"},r.a.createElement("i",{className:"ms ms-chaos mx-4"}),"Scry Card",r.a.createElement("i",{className:"ms ms-chaos mx-4"})),r.a.createElement(ke.a,null,r.a.createElement(_.a,{color:"info",block:!0,onClick:t._scryTop},"Top"),a.map(function(e){return r.a.createElement(Ie,{card:e,key:e.id})}),r.a.createElement(_.a,{color:"info",block:!0,onClick:t._scryBottom},"Bottom")))},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state,a=e.loading,t=e.planes,n=e.deck,s=e.currentCard,l=e.planeswalkDisabled;return r.a.createElement("div",{className:"planechase"},r.a.createElement(G,{planes:t}),r.a.createElement("div",{className:"fixed-top mt-1 ml-1 w-25 text-left"},r.a.createElement(_.a,{onClick:this.planeswalk,className:"mb-2",color:"success",disabled:l||a,block:!0},r.a.createElement("i",{className:"ms ms-planeswalker ms-2x mx-2"}),r.a.createElement("span",{className:"mx-2 d-none d-md-inline"},"Planeswalk")),this.renderChaos()),a?r.a.createElement(ve,{className:"text-muted"}):r.a.createElement("div",{className:"mb-2"},s?r.a.createElement(Ie,{card:s,renderActions:"true"}):r.a.createElement(Ie,null)),this.renderTwoPlanes(),this.renderFivePlanes(),this.renderTripleChaosModal(),this.renderScryModal(),r.a.createElement(_.a,{onClick:this.reset,color:"danger",block:!0},"Reset"),r.a.createElement("p",{className:"text-center my-3"},"There are ",n?n.length:0," cards remaining."),this.renderHistory(),this.renderDevTools())}},{key:"renderChaos",value:function(){var e=this.state.currentCard;if(U("chaos-trigger",e))return r.a.createElement(_.a,{onClick:this.triggerChaos,color:"info",block:!0},r.a.createElement("i",{className:"ms ms-chaos ms-2x mx-2"}),r.a.createElement("span",{className:"mx-2 d-none d-md-inline"},"Trigger Chaos"))}},{key:"renderTwoPlanes",value:function(){var e=this.state,a=e.currentCard,t=e.revealedCards;if(U("two-planes",a)){var n=t.filter(function(e){return e.type_line.search("Plane")>=0});return r.a.createElement("div",null,r.a.createElement(D.a,{color:"info",className:"text-center mb-0"},r.a.createElement("i",{className:"ms ms-planeswalker mx-2"}),"You Are On Both Planes",r.a.createElement("i",{className:"ms ms-planeswalker mx-2"})),n.map(function(e){return r.a.createElement(Ie,{card:e,key:e.id,renderActions:"true"})}))}}},{key:"renderFivePlanes",value:function(){var e=this,a=this.state,t=a.currentCard,n=a.revealedCards;if(U("top-5",t)){console.log(n);var s=n.filter(function(e){return e.type_line.search("Plane")>=0});return console.log(s),r.a.createElement("div",null,r.a.createElement(D.a,{color:"info",className:"text-center mb-0"},r.a.createElement("i",{className:"ms ms-planeswalker mx-2"}),"Pick a Plane to Planeswalk To",r.a.createElement("i",{className:"ms ms-planeswalker mx-2"})),s.map(function(a){return r.a.createElement("div",{key:a.id},r.a.createElement(Ie,{card:a},r.a.createElement(_.a,{onClick:function(){return e.selectPlane(a)},color:"primary",className:"btn-translucent"},r.a.createElement("i",{className:"ms ms-planeswalker mx-2"}),r.a.createElement("span",{className:"mx-2"},"Planeswalk"))))}))}}},{key:"renderTripleChaosModal",value:function(){var e=this.state,a=e.revealedCards,t=e.tripleChaosModalOpen;if(a&&t){var n=a.filter(function(e){return e.type_line.search("Plane")>=0});return r.a.createElement(Ee.a,{isOpen:!!t,toggle:this._tripleChaosModalToggle,onClosed:this._tripleChaosModalClose,size:"md",backdrop:!0,contentClassName:"bg-secondary"},r.a.createElement(_e.a,{className:"justify-content-center text-center text-white"},r.a.createElement("div",null,r.a.createElement("i",{className:"ms ms-chaos mr-1"}),r.a.createElement("i",{className:"ms ms-chaos mr-1"}),r.a.createElement("i",{className:"ms ms-chaos mr-1"}),r.a.createElement("span",{className:"mx-1"},"Triple Chaos"),r.a.createElement("i",{className:"ms ms-chaos ml-1"}),r.a.createElement("i",{className:"ms ms-chaos ml-1"}),r.a.createElement("i",{className:"ms ms-chaos ml-1"})),r.a.createElement("div",null,r.a.createElement("small",{className:"text-center"},"You Pick Order"))),r.a.createElement(ke.a,{className:"text-center"},n.map(function(e){return r.a.createElement(Ie,{card:e,key:e.id})})),r.a.createElement(Pe.a,null,r.a.createElement(_.a,{color:"info",block:!0,"aria-label":"Close",onClick:this._tripleChaosModalClose},"Done")))}}}]),a}(n.Component),Be=function(e){e.archenemy;return r.a.createElement(d.Helmet,{name:"Archenemy"},r.a.createElement("link",{rel:"shortcut icon",href:"mtg/icon/archenemy.ico"}),r.a.createElement("link",{rel:"apple-touch-icon",href:"mtg/icon/archenemy_256.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"64x64",href:"mtg/icon/archenemy_64.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"128x128",href:"mtg/icon/archenemy_128.png"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"256x256",href:"mtg/icon/archenemy_256.png"}),r.a.createElement("link",{rel:"manifest",href:"/archenemy-manifest.json"}))},He=[{name:"Assemble the Doomsday Machine",cards:[["All in Good Time",1],["Behold the Power of Destruction",1],["Embrace My Diabolical Vision",1],["Feed the Machine",2],["I Delight in Your Convulsions",1],["I Know All, I See All",2],["Ignite the Cloneforge!",2],["Introductions Are in Order",1],["The Iron Guardian Stirs",2],["My Genius Knows No Bounds",1],["Nothing Can Stop Me Now",1],["The Pieces Are Coming Together",2],["Realms Befitting My Majesty",1],["Your Fate Is Thrice Sealed",1],["Your Puny Minds Cannot Fathom",1]]},{name:"Scorch the World with Dragonfire",cards:[["All Shall Smolder in My Wake",2],["Approach My Molten Realm",1],["The Fate of the Flammable",1],["I Bask in Your Silent Awe",2],["I Delight in Your Convulsions",1],["Introductions Are in Order",1],["Know Naught but Fire",1],["Look Skyward and Despair",2],["My Crushing Masterstroke",1],["My Wish Is Your Command",2],["Realms Befitting My Majesty",1],["Tooth, Claw, and Tail",1],["Which of You Burns Brightest?",2],["Your Fate Is Thrice Sealed",1],["Your Puny Minds Cannot Fathom",1]]},{name:"Trample Civilization Underfoot",cards:[["Every Last Vestige Shall Rot",2],["Evil Comes to Fruition",1],["I Call on the Ancient Magics",1],["I Delight in Your Convulsions",1],["Into the Earthen Maw",1],["Introductions Are in Order",1],["May Civilization Collapse",1],["Nature Demands an Offering",2],["Nature Shields Its Own",2],["Realms Befitting My Majesty",1],["Roots of All Evil",2],["The Very Soil Shall Shake",1],["Your Fate Is Thrice Sealed",1],["Your Puny Minds Cannot Fathom",1],["Your Will Is Not Your Own",2]]},{name:"Bring About the Undead Apocalypse",cards:[["Choose Your Champion",2],["Dance, Pathetic Marionette",1],["The Dead Shall Serve",2],["Every Hope Shall Vanish",2],["I Delight in Your Convulsions",2],["Introductions Are in Order",1],["Mortal Flesh Is Weak",1],["My Undead Horde Awakens",1],["Only Blood Ends Your Nightmares",2],["Realms Befitting My Majesty",1],["Rotted Ones, Lay Siege",2],["Surrender Your Thoughts",1],["Your Fate Is Thrice Sealed",1],["Your Puny Minds Cannot Fathom",1]]},{name:"Archenemy Nicol Bolas",cards:[["Because I Have Willed It",1],["Behold My Grandeur",1],["Bow to My Command",1],["Choose Your Demise",1],["Delight in the Hunt",1],["Every Dream a Nightmare",1],["For Each of You, a Gift",1],["Know Evil",1],["Make Yourself Useful",1],["The Mighty Will Fall",1],["My Forces Are Innumerable",1],["My Laughter Echoes",1],["No One Will Hear Your Cries",1],["Pay Tribute to Me",1],["Power Without Equal",1],["A Reckoning Approaches",1],["There Is No Refuge",1],["This World Belongs to Me",1],["What's Yours Is Now Mine",1],["When Will You Learn?",1]]}],Fe=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.componentDidMount=function(){},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"archenemy"},r.a.createElement(Be,null),this.renderPrebuilts())}},{key:"renderPrebuilts",value:function(){var e=He.map(function(e){return e.name}).map(function(e,a){var t,n=(t=e,He.find(function(e){return e.name===t}).cards).map(function(e,a){return r.a.createElement(ye.a,{key:a},e)});return r.a.createElement(Ce.a,{key:a},r.a.createElement(be.a,null,r.a.createElement(Ne.a,null,e),r.a.createElement(Ae.a,{className:"text-dark"},n)))});return r.a.createElement("div",null,e)}}]),a}(n.Component),We=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={isOpen:!1,disclaimerDismissed:!1,displayText:!1,displayImages:!1,devTools:!1},t.toggle=function(){t.setState({isOpen:!t.state.isOpen})},t.componentDidMount=function(){t.setState({disclaimerDismissed:I("disclaimerDismissed"),displayText:I("displayText"),displayImages:I("displayImages"),devTools:I("devTools")})},t.dismissDisclaimer=function(){t.setState({disclaimerDismissed:j("disclaimerDismissed",!0)})},t._toggleSetting=function(e){var a={};a[e]=A(e),t.setState(a)},t._mtgToggler=function(e,a,t){return r.a.createElement(g.a,{toggle:!1,onClick:t},r.a.createElement("span",null,e?r.a.createElement("i",{className:"ms ms-dfc ms-dfc-day"}):r.a.createElement("i",{className:"ms ms-dfc ms-dfc-night"})),r.a.createElement("span",{className:"ml-3"},a))},t.closeNavbar=function(){t.state.isOpen&&t.setState({isOpen:!1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.disclaimerDismissed,n=a.displayText,s=a.displayImages,l=a.devTools;return r.a.createElement(h.a,null,r.a.createElement(d.Helmet,{titleTemplate:"%s - Jibbermaster"}),r.a.createElement(f.a,{color:"dark",dark:!0,expand:"md",className:"text-right p-1"},r.a.createElement(v.a,null),r.a.createElement(y.a,{onClick:this.toggle}),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(k.a,{className:"ml-auto",navbar:!0},r.a.createElement(C.a,null,r.a.createElement(b.a,{tag:h.b,exact:!0,to:"/",activeClassName:"active",onClick:this.closeNavbar},"Home")),r.a.createElement(C.a,null,r.a.createElement(b.a,{tag:h.b,exact:!0,to:"/planechase",activeClassName:"active",onClick:this.closeNavbar},"Planechase")),r.a.createElement(C.a,null,r.a.createElement(b.a,{tag:h.b,exact:!0,to:"/archenemy",activeClassName:"active",onClick:this.closeNavbar},"Archenemy")),r.a.createElement(w.a,{nav:!0,inNavbar:!0},r.a.createElement(N.a,{nav:!0,caret:!0},"Settings"),r.a.createElement(x.a,{right:!0},this._mtgToggler(t,"Disclaimer Dismissed",function(){return e._toggleSetting("disclaimerDismissed")}),this._mtgToggler(n,"Display Text",function(){return e._toggleSetting("displayText")}),this._mtgToggler(s,"Display Images",function(){return e._toggleSetting("displayImages")}),this._mtgToggler(l,"Dev Tools",function(){return e._toggleSetting("devTools")}),r.a.createElement(g.a,{divider:!0}),r.a.createElement(g.a,{toggle:!1,onClick:function(){return M.a.clearAll()}},"Clear Everything")))))),r.a.createElement("div",{className:"app text-light bg-dark col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(P,e)}}),r.a.createElement(p.a,{path:"/archenemy",exact:!0,render:function(e){return r.a.createElement(Fe,e)}}),r.a.createElement(p.a,{path:"/planechase",exact:!0,render:function(e){return r.a.createElement(Ye,e)}})),r.a.createElement(D.a,{color:"warning",className:"fixed-bottom mb-0 py-1",isOpen:!this.state.disclaimerDismissed,toggle:this.dismissDisclaimer},r.a.createElement("h6",null,"Disclaimer"),r.a.createElement("small",{className:"text-muted m-0"},"This site is created for personal use. Magic: The Gathering, the mana symbols, the tap symbol and all other related images are owned by Wizards of the Coast. jibbermaster.com is unaffiliated with Wizards of the Coast."))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,a,t){e.exports=t.p+"static/media/planechase-back.c7f50007.jpg"},54:function(e,a,t){e.exports=t(116)},59:function(e,a,t){},79:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.921ab044.chunk.js.map