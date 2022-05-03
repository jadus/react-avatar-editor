!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).AvatarEditor=t(e.PropTypes,e.React)}(this,function(e,t){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var e=o(e),r=o(t);function n(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach(function(e){s(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o,n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if(null==e)return{};var o,n=function(e,t){if(null==e)return{};for(var o,n={},a=Object.keys(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o]);return n}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=a(o),t=(e=n?(e=a(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return p(t)}}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,a,r=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(s)throw a}}return r}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(o="Object"===o&&e.constructor?e.constructor.name:o)||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function v(n,a){return new Promise(function(e,t){var o=new Image;o.onload=function(){return e(o)},o.onerror=t,!1==(null!==(t=n)&&!!t.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&a&&(o.crossOrigin=a),o.src=n})}var y,b=["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"],w=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),M="undefined"!=typeof File,t={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},O=w?t.touch:t.desktop,I="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,P={x:.5,y:.5},t=function(e){var t=a;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e);var o,n=l(a);function a(e){var l;if(this instanceof a)return s(p(l=n.call(this,e)),"state",{drag:!1,my:null,mx:null,image:P}),s(p(l),"handleImageReady",function(e){var t=l.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,t.backgroundColor=l.props.backgroundColor,l.setState({drag:!1,image:t},l.props.onImageReady),l.props.onLoadSuccess(t)}),s(p(l),"clearImage",function(){l.canvas.getContext("2d").clearRect(0,0,l.canvas.width,l.canvas.height),l.setState({image:P})}),s(p(l),"handleMouseDown",function(e){(e=e||window.event).preventDefault(),l.setState({drag:!0,mx:null,my:null})}),s(p(l),"handleMouseUp",function(){l.state.drag&&(l.setState({drag:!1}),l.props.onMouseUp())}),s(p(l),"handleMouseMove",function(e){var t,o,n,a,r,i,s,u,h,c;e=e||window.event,!1!==l.state.drag&&(e.preventDefault(),t={mx:o=e.targetTouches?e.targetTouches[0].pageX:e.clientX,my:n=e.targetTouches?e.targetTouches[0].pageY:e.clientY},c=l.props.rotate,c=(c%=360)<0?c+360:c,l.state.mx&&l.state.my&&(o=l.state.mx-o,n=l.state.my-n,a=l.state.image.width*l.props.scale,r=l.state.image.height*l.props.scale,i=(u=l.getCroppingRect()).x,u=u.y,i*=a,u*=r,h=function(e){return e*(Math.PI/180)},s=Math.cos(h(c)),h=u+-o*(u=Math.sin(h(c)))+n*s,c={x:(i+o*s+n*u)/a+1/l.props.scale*l.getXScale()/2,y:h/r+1/l.props.scale*l.getYScale()/2},l.props.onPositionChange(c),t.image=d(d({},l.state.image),c)),l.setState(t),l.props.onMouseMove(e))}),s(p(l),"setCanvas",function(e){l.canvas=e}),l.canvas=null,l;throw new TypeError("Cannot call a class as a function")}return t=a,(e=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(I=1);var e,t=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(t),document&&(t=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){t=!1}return t}()&&{passive:!1},e=O.native,document.addEventListener(e.move,this.handleMouseMove,t),document.addEventListener(e.up,this.handleMouseUp,t),w&&(document.addEventListener(e.mouseMove,this.handleMouseMove,t),document.addEventListener(e.mouseUp,this.handleMouseUp,t)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===P||this.clearImage();var o=this.canvas.getContext("2d");o.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(o),this.paintImage(o,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=O.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),w&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.props.border;return Array.isArray(e)?e:[e,e]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,n=e.rotate,e=e.border,a={},r=g(this.getBorders(e),2),i=r[0],r=r[1],s=t,u=o;return this.isVertical()?(a.width=u,a.height=s):(a.width=s,a.height=u),a.width+=2*i,a.height+=2*r,{canvas:a,rotate:n,width:t,height:o,border:e}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image,o=(e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height,document.createElement("canvas")),n=(this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height),o.getContext("2d"));return n.translate(o.width/2,o.height/2),n.rotate(this.props.rotate*Math.PI/180),n.translate(-o.width/2,-o.height/2),this.isVertical()&&n.translate((o.width-o.height)/2,(o.height-o.width)/2),t.backgroundColor&&(n.fillStyle=t.backgroundColor,n.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),n.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,e=e.height,o=document.createElement("canvas");return this.isVertical()?(o.width=e,o.height=t):(o.width=t,o.height=e),this.paintImage(o.getContext("2d"),this.state.image,0,1),o}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),e={x:e.x-t/2,y:e.y-o/2,width:t,height:o},n=0,a=1-e.width,r=0,i=1-e.height;return(this.props.disableBoundaryChecks||1<t||1<o)&&(n=-e.width,r=-e.height,i=a=1),d(d({},e),{},{x:Math.max(n,Math.min(e.x,a)),y:Math.max(r,Math.min(e.y,i))})}},{key:"loadImage",value:function(e){var t;M&&e instanceof File?this.loadingImage=(t=e,new Promise(function(o,n){var e=new FileReader;e.onload=function(e){try{var t=v(e.target.result);o(t)}catch(e){n(e)}},e.readAsDataURL(t)}).then(this.handleImageReady).catch(this.props.onLoadFailure)):"string"==typeof e&&(this.loadingImage=v(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var o,n,a=this.getDimensions();return t/e<a.height/a.width?n=e*((o=this.getDimensions().height)/t):o=t*((n=this.getDimensions().width)/e),{height:o,width:n}}},{key:"paintImage",value:function(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:I;t.resource&&(o=this.calculatePosition(t,o),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(n,n),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,o.x,o.y,o.width,o.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(o.x,o.y,o.width,o.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var t=g(this.getBorders(t),2),o=t[0],t=t[1],n=this.getCroppingRect(),a=e.width*this.props.scale,e=e.height*this.props.scale,r=-n.x*a,n=-n.y*e;return this.isVertical()?(r+=t,n+=o):(r+=o,n+=t),{x:r,y:n,height:e,width:a}}},{key:"paint",value:function(e){e.save(),e.scale(I,I),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,o,n,a,r,i=this.props.borderRadius,s=this.getDimensions(),u=g(this.getBorders(s.border),2),h=u[0],u=u[1],c=s.canvas.height,s=s.canvas.width,i=Math.max(i,0);i=Math.min(i,s/2-h,c/2-u),e.beginPath(),t=e,o=s-2*(h=h),n=c-2*(u=u),0===(i=i)?t.rect(h,u,o,n):(a=o-i,r=n-i,t.translate(h,u),t.arc(i,i,i,Math.PI,1.5*Math.PI),t.lineTo(a,0),t.arc(a,i,i,1.5*Math.PI,2*Math.PI),t.lineTo(o,r),t.arc(a,r,i,2*Math.PI,.5*Math.PI),t.lineTo(i,n),t.arc(i,r,i,.5*Math.PI,Math.PI),t.translate(-h,-u)),e.rect(s,0,-s,c),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),e=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,c(e,b)),o=this.getDimensions(),n={width:o.canvas.width,height:o.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},o={width:o.canvas.width*I,height:o.canvas.height*I,style:d(d({},n),t)};return o[O.react.down]=this.handleMouseDown,w&&(o[O.react.mouseDown]=this.handleMouseDown),r.default.createElement("canvas",u({ref:this.setCanvas},o,e))}}])&&i(t.prototype,e),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);return s(t,"propTypes",{scale:e.default.number,rotate:e.default.number,image:e.default.oneOfType([e.default.string].concat(function(e){if(Array.isArray(e))return m(e)}(y=M?[e.default.instanceOf(File)]:[])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(y)||f(y)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:e.default.oneOfType([e.default.number,e.default.arrayOf(e.default.number)]),borderRadius:e.default.number,width:e.default.number,height:e.default.number,position:e.default.shape({x:e.default.number,y:e.default.number}),color:e.default.arrayOf(e.default.number),backgroundColor:e.default.string,crossOrigin:e.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:e.default.func,onLoadSuccess:e.default.func,onImageReady:e.default.func,onImageChange:e.default.func,onMouseUp:e.default.func,onMouseMove:e.default.func,onPositionChange:e.default.func,disableBoundaryChecks:e.default.bool,disableHiDPIScaling:e.default.bool,disableCanvasRotation:e.default.bool}),s(t,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),t});
