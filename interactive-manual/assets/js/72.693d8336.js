(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{368:function(e,o,i){},447:function(e,o,i){"use strict";var s=i(368);i.n(s).a},604:function(e,o,i){"use strict";i.r(o);var s=i(204),n=[{name:"appleid.apple.com",phish:!1},{name:"facebook.com",phish:!1},{name:"google.com",phish:!1},{name:"google.co.uk",phish:!1},{name:"mail.google.com",phish:!1},{name:"outlook.live.com",phish:!1},{name:"paypal.com",phish:!1},{name:"support.apple.com",phish:!1},{name:"www.bankofamerica.com",phish:!1},{name:"www.facebook.com",phish:!1},{name:"www.google.com",phish:!1},{name:"www.irs.gov",phish:!1},{name:"www.office.com",phish:!1},{name:"www.paypal.com",phish:!1},{name:"www.youtube.com",phish:!1},{name:"youtube.com",phish:!1},{name:"google-docs.org",phish:!0,description:"The real domain is docs.google.com or something that ends with google.com."},{name:"microsaft.com",phish:!0,description:"It only takes a single letter! That doesn't say Microsoft."},{name:"fb-settings-applications.hol.es",phish:!0,description:'Sometimes hyphens are used to make it easy to read, but this is not "facebook.com".'},{name:"h_t_t_p_s.m.facebook.com.3s3s.org",phish:!0,description:"They used two tricks, one makes it looks like secure https:// and the other uses facebook.com as a prefix."},{name:"facebook.com.hithood.org",phish:!0,description:"This uses a facebook.com prefix to trick you."},{name:"paypal.com.limited-transaction.logins-comuunications.business",phish:!0,description:"This domain uses a long string of prefixes to trick you."},{name:"www.paypal-customerfeedback.com",phish:!0,description:'Uh-oh, "paypal-customerfeedback" is not the same as "paypal".'},{name:"www.paypal.com.uk.cmd.cgi-bin.19e4c97d16082b82f1b2abe86d4128365ef901fe09d28c1845d3e80c18ee66.47831bf44b7336ee656b8f0f123900e059866da8e4da204fdf4eceb143c215.07333f181f8b7ffcb295bb6eefd79d7817e2cfe325fbcd066e42199c802982.custommap.de",phish:!0,description:"This domain uses a long string of prefixes to trick you."},{name:"www.paypal.com.cgi-bin.webscr.cmd-flowers.chmod-login.5578621365422366166.mandwignitions.com",phish:!0,description:"This domain uses a long string of prefixes to trick you."},{name:"paypalmoney.ga",phish:!0,description:'Should the domain end in ".ga"?'},{name:"www4.sa.irs.tax.gov.us.3066036666.revenue.mysupportsolutions.com",phish:!0,description:"This domain uses a long string of prefixes to trick you."},{name:"irs.tax.gov.customercare.3206250713.tax.sa.www4.canoncopiermumb...",phish:!0,description:"This domain uses a long string of prefixes to trick you."},{name:"netflixpremiumaccount.com",phish:!0,description:"This phish uses 'premiumaccount' to make it appear official, but it should only be 'netflix.com'"},{name:"netflixhdgq.000webhostapp.com",phish:!0},{name:"amazonsuspended.net",phish:!0},{name:"amazon-discount1.000webhostapp.com",phish:!0},{name:"https.www.amazon.com.account.security.update.information.jmscisb.com",phish:!0},{name:"bankofamerca.emriittuss.com",phish:!0,description:'"Backofamerca" is misspelled and it doesn\'t use bankofamerica.com'},{name:"www.bankofamerca.emriittuss.com",phish:!0,description:'"Backofamerca" is misspelled and it doesn\'t use bankofamerica.com'},{name:"login.secure.bankofamerica.com.lafabricadeeventos.com",phish:!0,description:"Long phishing domain uses prefixes to fool you, scroll right."},{name:"secure.bankofamerica.com-login-sign-in-signonv2screen.go.ghj70.ga",phish:!0,description:"Long phishing domain uses prefixes to fool you, scroll right."},{name:"capital1.com-onlinebanking.com",phish:!0,description:'The top-level domain is "com-onlinebanking", not "capital1".'},{name:"loginbank.org",phish:!0,description:"Which bank is this? They use a generic looking name to trick you."},{name:"www.myfidelitybankbenefits.com",phish:!0},{name:"chase.com-onlinebanking.com",phish:!0,description:'The top-level domain is "com-onlinebanking", not "chase".'},{name:"onlinehsbcbanking.ga",phish:!0,description:'Should the domain end in ".ga"?'},{name:"wellfargoaccount.gotdns.ch",phish:!0,description:'Wellsfargo is mispelled and "gotdns.ch" is the wrong domain!'},{name:"connect.wellsfargoemail.com",phish:!0},{name:"www.connects.secire.wellfargo.orhankaplan.net",phish:!0,description:"Notice that 'secire' and 'wellfargo' are mispelled and the top-level domain is wrong."},{name:"google-docs.org",phish:!0},{name:"secure.paypol.com.update.information.koakeducation.com",phish:!0},{name:"appleid.apple.com-serve-notice-important.support",phish:!0}],a={data:function(){return{view:"menu",domain:s.sample(n),correct:[],incorrect:[]}},computed:{currentView:function(){return"Phishing-GuessingGame-"+s.capitalize(this.view)},answers:function(){return{correct:this.correct,incorrect:this.incorrect,total:this.correct.length+this.incorrect.length}}},methods:{goto:function(e){this.view=e},guessed:function(e){this.domain.phish==("bad"===e)?this.correct.push(this.domain):this.incorrect.push(this.domain),this.domain=s.sample(n)},reset:function(){this.correct=[],this.incorrect=[]}}},t=(i(447),i(1)),c=Object(t.a)(a,function(){var e=this.$createElement,o=this._self._c||e;return o("div",{staticClass:"guessing-game"},[o(this.currentView,{tag:"component",attrs:{domain:this.domain,answers:this.answers},on:{goto:this.goto,guess:this.guessed,reset:this.reset}})],1)},[],!1,null,"2c3651d4",null);o.default=c.exports}}]);