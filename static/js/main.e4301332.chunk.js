(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),o=n(8),r=n(9),d=n(10),b=n(12),l=n(11),u=n(0),j=function(e){var t=e.text;return Object(u.jsx)("p",{className:"text",children:t})},h=n(3),O=n.n(h),p=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(u.jsx)("div",{className:O.a.Statistics,children:a>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{className:O.a.Statistics__item,children:["Good: ",t]}),Object(u.jsxs)("span",{children:["Neutral: ",n]}),Object(u.jsxs)("span",{children:["Bad: ",c]}),Object(u.jsxs)("span",{children:["Total: ",a]}),Object(u.jsxs)("span",{children:["Positive feedback: ",s,"%"]})]}):Object(u.jsx)(j,{text:"No feedback given"})})},_=n(4),k=n.n(_),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("div",{className:k.a.FeedbackOptions,children:t.map((function(e){return Object(u.jsx)("button",{className:k.a.FeedbackOptions__btn,type:"button",onClick:function(){return n(e)},children:e},e)}))})},x=n(5),v=n.n(x),F=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("div",{className:v.a.Section,children:[Object(u.jsxs)("h1",{className:v.a.Section__title,children:[" ",t]}),n]})},S=(n(6),function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state);return Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)(F,{title:"Please leave feedback",children:Object(u.jsx)(f,{options:a,onLeaveFeedback:this.handleFeedback})}),Object(u.jsx)(F,{title:"Statistics",children:Object(u.jsx)(p,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component));i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={Statistics:"Statistics_Statistics__1GPlI"}},4:function(e,t,n){e.exports={FeedbackOptions:"Feedback_FeedbackOptions__PFQ5r",FeedbackOptions__btn:"Feedback_FeedbackOptions__btn__DKwZs"}},5:function(e,t,n){e.exports={Section:"Section_Section__1fQ0E",Section__title:"Section_Section__title__3jN78"}},6:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.e4301332.chunk.js.map