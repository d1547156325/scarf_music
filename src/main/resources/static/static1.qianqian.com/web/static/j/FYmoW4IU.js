(function(t,e){if(typeof exports==="object"){module.exports=e()}else if(typeof define==="function"&&define.amd){define("muplayer/lib/AudioContextMonkeyPatch",e)}else{e()}})(this,function(){function t(t){if(!t)return;if(!t.setTargetAtTime)t.setTargetAtTime=t.setTargetValueAtTime}if(window.hasOwnProperty("webkitAudioContext")&&!window.hasOwnProperty("AudioContext")){window.AudioContext=webkitAudioContext;if(!AudioContext.prototype.hasOwnProperty("createGain"))AudioContext.prototype.createGain=AudioContext.prototype.createGainNode;if(!AudioContext.prototype.hasOwnProperty("createDelay"))AudioContext.prototype.createDelay=AudioContext.prototype.createDelayNode;if(!AudioContext.prototype.hasOwnProperty("createScriptProcessor"))AudioContext.prototype.createScriptProcessor=AudioContext.prototype.createJavaScriptNode;if(!AudioContext.prototype.hasOwnProperty("createPeriodicWave"))AudioContext.prototype.createPeriodicWave=AudioContext.prototype.createWaveTable;AudioContext.prototype.internal_createGain=AudioContext.prototype.createGain;AudioContext.prototype.createGain=function(){var e=this.internal_createGain();t(e.gain);return e};AudioContext.prototype.internal_createDelay=AudioContext.prototype.createDelay;AudioContext.prototype.createDelay=function(e){var o=e?this.internal_createDelay(e):this.internal_createDelay();t(o.delayTime);return o};AudioContext.prototype.internal_createBufferSource=AudioContext.prototype.createBufferSource;AudioContext.prototype.createBufferSource=function(){var e=this.internal_createBufferSource();if(!e.start){e.start=function(t,e,o){if(e||o)this.noteGrainOn(t,e,o);else this.noteOn(t)}}if(!e.stop)e.stop=e.noteOff;t(e.playbackRate);return e};AudioContext.prototype.internal_createDynamicsCompressor=AudioContext.prototype.createDynamicsCompressor;AudioContext.prototype.createDynamicsCompressor=function(){var e=this.internal_createDynamicsCompressor();t(e.threshold);t(e.knee);t(e.ratio);t(e.reduction);t(e.attack);t(e.release);return e};AudioContext.prototype.internal_createBiquadFilter=AudioContext.prototype.createBiquadFilter;AudioContext.prototype.createBiquadFilter=function(){var e=this.internal_createBiquadFilter();t(e.frequency);t(e.detune);t(e.Q);t(e.gain);return e};if(AudioContext.prototype.hasOwnProperty("createOscillator")){AudioContext.prototype.internal_createOscillator=AudioContext.prototype.createOscillator;AudioContext.prototype.createOscillator=function(){var e=this.internal_createOscillator();if(!e.start)e.start=e.noteOn;if(!e.stop)e.stop=e.noteOff;if(!e.setPeriodicWave)e.setPeriodicWave=e.setWaveTable;t(e.frequency);t(e.detune);return e}}}});(function(t,e){if(typeof exports==="object"){return module.exports=e()}else if(typeof define==="function"&&define.amd){return define("muplayer/plugin/audioNode",["muplayer/lib/AudioContextMonkeyPatch"],e)}else{return t._mu.AudioNode=e()}})(this,function(){var t;return t=function(){function t(t){var e,o,r;if(!AudioContext){throw new Error("浏览器暂不支持Web Audio API :(")}this.opts=r=$.extend({},this.defaults,t);if(!r.input){throw new Error("input是必填的初始化参数！")}this.context=e=new AudioContext;o=r.input;if(o instanceof Audio){this.input=e.createMediaElementSource(o)}else{this.input=o}this.output=r.output||e.destination}t.prototype.connect=function(){return this.output.connect.apply(this.output,arguments)};t.prototype.disconnect=function(){return this.output.disconnect(0)};return t}()});var extend=function(t,e){for(var o in e){if(hasProp.call(e,o))t[o]=e[o]}function r(){this.constructor=t}r.prototype=e.prototype;t.prototype=new r;t.__super__=e.prototype;return t},hasProp={}.hasOwnProperty;(function(t,e){if(typeof exports==="object"){return module.exports=e()}else if(typeof define==="function"&&define.amd){return define("muplayer/plugin/equalizer",["muplayer/plugin/audioNode"],e)}else{return t._mu.Equalizer=e(_mu.AudioNode)}})(this,function(t){var e,o;o=Math.pow;return e=function(t){extend(e,t);e.prototype.defaults={frequencies:[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],filter:{Q:1.4,gain:0},effects:{reset:[0,0,0,0,0,0,0,0,0,0],electronic:[4,3.5,1,0,-2,2,.5,1,4,5],classic:[4.5,3.5,3,2.5,-2,-1.5,0,2,3.5,4],jazz:[4,3,1,2,-2,-2,0,1.5,3,3.5],pop:[-2,-1,0,2,4,4,2,0,-1.5,-2],voice:[-2,-3.5,-3,1,3.5,3.5,3,1.5,.5,-2],dance:[3.5,6.5,5,0,2,3.5,5,4,3.5,0],rock:[5,4,3,1.5,-.5,-1.5,.5,2.5,3.5,4.5]}};function e(t){var o,r,n,i,a,u,p,c,s,f,l;e.__super__.constructor.call(this,t);f=this.opts;o=this.context;i=[];a={};c=null;n=f.filter;this.preGain=o.createGain();l=f.frequencies;for(p=0,s=l.length;p<s;p++){u=l[p];r=o.createBiquadFilter();r.type=r.PEAKING||"peaking";r.Q.value=n.Q;r.gain.value=n.gain;r.frequency.value=u;i.push(r);a[u]=r;if(!c){this.input.connect(this.preGain);this.preGain.connect(r)}else{c.connect(r)}c=r}c.connect(this.output);this.filters=i;this.filtersMap=a}e.prototype.setEffect=function(t,e){var o,r,n,i,a,u,p;r=this.opts.effects;o=r[t]||r["reset"];p=this.filters;for(i=a=0,u=p.length;a<u;i=++a){n=p[i];n.gain.value=o[i]}return e&&e(o)};e.prototype.setPreGainValue=function(t){if(!(-12<=t&&t<=12)){t=0}return this.preGain.gain.value=o(10,t/12)};e.prototype.setFilterValue=function(t,e){var o;if(!(-12<=e&&e<=12)){e=0}o=this.filtersMap[t];if(o){return o.gain.value=e}};return e}(t)});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/