(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),o=n(8),r=n(9),d=n(11),b=n(10),l=n(0),u=function(e){var t=e.text;return Object(l.jsx)("p",{className:"text",children:t})},j=n(4),h=n.n(j),k=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(l.jsx)("div",{className:h.a.Statistics,children:c>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("span",{className:h.a.Statistics__item,children:["Good: ",t]}),Object(l.jsxs)("span",{children:["Neutral: ",n]}),Object(l.jsxs)("span",{children:["Bad: ",a]}),Object(l.jsxs)("span",{children:["Total: ",c]}),Object(l.jsxs)("span",{children:["Positive feedback: ",s,"%"]})]}):Object(l.jsx)(u,{text:"No feedback given"})})},O=n(2),_=n.n(O),F=function(e){var t=e.onLeaveFeedback;return Object(l.jsxs)("div",{className:_.a.FeedbackOptions,children:[Object(l.jsx)("button",{className:_.a.FeedbackOptions__btn,type:"button",onClick:t.goodFeedback,children:"Good"}),Object(l.jsx)("button",{className:_.a.FeedbackOptions__btn,type:"button",onClick:t.neutralFeedback,children:"Neutral"}),Object(l.jsx)("button",{className:_.a.FeedbackOptions__btn,type:"button",onClick:t.badFeedback,children:"Bad"})]})},p=n(5),f=n.n(p),x=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("div",{className:f.a.Section,children:[Object(l.jsxs)("h1",{className:f.a.Section__title,children:[" ",t]}),n]})},v=(n(6),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleGoodFeedback=function(){return e.setState((function(e){return{good:e.good+1}}))},e.handleNeutralFeedback=function(){return e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleBadFeedback=function(){return e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(l.jsxs)("div",{className:"Container",children:[Object(l.jsx)(x,{title:"Please leave feedback",children:Object(l.jsx)(F,{onLeaveFeedback:{goodFeedback:this.handleGoodFeedback,neutralFeedback:this.handleNeutralFeedback,badFeedback:this.handleBadFeedback}})}),Object(l.jsx)(x,{title:"Statistics",children:Object(l.jsx)(k,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(a.Component));i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={FeedbackOptions:"Feedback_FeedbackOptions__PFQ5r",FeedbackOptions__btn:"Feedback_FeedbackOptions__btn__DKwZs"}},4:function(e,t,n){e.exports={Statistics:"Statistics_Statistics__1GPlI"}},5:function(e,t,n){e.exports={Section:"Section_Section__1fQ0E",Section__title:"Section_Section__title__3jN78"}},6:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.525b01ec.chunk.js.map