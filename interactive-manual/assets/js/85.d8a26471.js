(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{384:function(s,t,e){},460:function(s,t,e){"use strict";var i=e(384);e.n(i).a},572:function(s,t,e){"use strict";e.r(t);e(84),e(12),e(26);var i=e(479),a=e(477),n=e.n(a),u={props:["size"],data:function(){for(var s=[],t=0;t<this.size;t++)s.push({value:"",score:""});return{slot:0,guess:"",guesses:s,guessed:0,miss:!1,missed:0,visible:!1}},mounted:function(){var s=localStorage.getItem("password");s&&(this.guess=s,this.submit())},computed:{disabled:function(){return this.missed>=3||this.guessed>=10},rows:function(){return this.size/2},score:function(){for(var s=0,t=0;t<this.guesses.length;t++)s+=parseInt(this.guesses[t].score)||0;return s.toLocaleString()},leftColumn:function(){return this.guesses.slice(0,this.size/2)},rightColumn:function(){return this.guesses.slice(this.size/2,this.size)}},methods:{submit:function(){var s=this,t=i(this.guess).toUpperCase(),e=t.slice(0,5),a=t.slice(5,40);n.a.get("https://api.pwnedpasswords.com/range/"+e).then(function(s){var t={};return s.data.split("\n").forEach(function(s){var e=s.split(":");t[e[0]]=parseInt(e[1])}),t}).then(function(t){var e={value:s.guess,score:t[a]||0};s.$set(s.guesses,s.slot,e),e.score<1&&(s.miss=!0,s.missed+=1,setTimeout(function(){s.missed<3&&(s.miss=!1)},1e3)),s.guessed+=1,s.guess="",s.nextSlot()})},reset:function(){this.miss=!1,this.missed=0,this.slot=0,this.guess="",this.guesses=[],this.guessed=0;for(var s=0;s<this.size;s++)this.guesses.push({value:"",score:""})},nextSlot:function(){this.slot=(this.slot+1)%this.size}}},o=(e(460),e(1)),r=Object(o.a)(u,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"game"},[e("div",{staticClass:"controls"},[e("div",{staticClass:"left"},[e("div",{staticClass:"password-input"},[s.visible?e("input",{directives:[{name:"model",rawName:"v-model",value:s.guess,expression:"guess"}],attrs:{type:"text",placeholder:"Password",name:"secret",disabled:s.disabled},domProps:{value:s.guess},on:{keyup:function(t){return"button"in t||!s._k(t.keyCode,"enter",13,t.key,"Enter")?s.submit(t):null},input:function(t){t.target.composing||(s.guess=t.target.value)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:s.guess,expression:"guess"}],attrs:{type:"password",placeholder:"Password",name:"secret",disabled:s.disabled},domProps:{value:s.guess},on:{keyup:function(t){return"button"in t||!s._k(t.keyCode,"enter",13,t.key,"Enter")?s.submit(t):null},input:function(t){t.target.composing||(s.guess=t.target.value)}}}),e("a",{staticClass:"visibility",on:{click:function(t){s.visible=!s.visible}}},[s.visible?e("i",{staticClass:"fas fa-eye"}):e("i",{staticClass:"fas fa-eye-slash"})])]),e("button",{attrs:{disabled:s.disabled},on:{click:s.submit}},[s._v("Submit")])]),e("div",{staticClass:"right"},[e("button",{on:{click:s.reset}},[s._v("Reset")])]),e("div",{staticStyle:{clear:"both"}})]),e("div",{staticClass:"gameboard"},[s.miss?e("div",{staticClass:"misses-wrapper"},[e("div",{staticClass:"misses"},s._l(s.missed,function(s){return e("i",{staticClass:"x fas fa-times"})}))]):s._e(),e("div",{staticClass:"left column"},s._l(s.leftColumn,function(s){return e("div",{staticClass:"item"},[e("input",{attrs:{disabled:""},domProps:{value:s.value}}),e("input",{attrs:{disabled:""},domProps:{value:s.score}})])})),e("div",{staticClass:"right column"},[s._l(s.rightColumn,function(s){return e("div",{staticClass:"item"},[e("input",{attrs:{disabled:""},domProps:{value:s.value}}),e("input",{attrs:{disabled:""},domProps:{value:s.score}})])}),e("div",{staticClass:"total"},[e("input",{attrs:{value:"TOTAL",disabled:""}}),e("input",{attrs:{name:"score",disabled:""},domProps:{value:s.score}})])],2),e("div",{staticStyle:{clear:"both"}})])])},[],!1,null,"ff065c42",null);t.default=r.exports}}]);