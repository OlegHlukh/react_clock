(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),i=a.n(o),l=a(1),s=a(2),r=a(4),m=a(3),u=(a(12),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props.clockName;e.clockName!==t&&console.log("The Clock was renamed from ".concat(e.clockName," to ").concat(t))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props.clockName,t=this.state.date;return c.a.createElement(c.a.Fragment,null,"Time: ".concat(t.toLocaleTimeString()),c.a.createElement("span",{className:"tag is-light is-large"},e))}}]),a}(c.a.Component)),k=(a(13),a(14),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:Math.ceil(100*Math.random())},e.setRandomName=function(){e.setState({clockName:Math.ceil(100*Math.random())})},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=new Date;e.state.isClockVisible&&console.log(t.toLocaleTimeString())}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.clockName,a=e.isClockVisible;return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"title is-1"},"React clock"),c.a.createElement("p",{className:"tag is-light is-large block"},a&&c.a.createElement(u,{clockName:t})),c.a.createElement("div",{className:"button-block"},c.a.createElement("button",{className:"button is-info is-outlined",type:"button",onClick:this.showClock},"Show clock"),c.a.createElement("button",{className:"button is-info is-outlined",type:"button",onClick:this.hideClock},"Hide clock"),c.a.createElement("button",{className:"button is-info is-outlined",type:"button",onClick:this.setRandomName},"Random name")))}}]),a}(c.a.Component));i.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.7c3dad08.chunk.js.map