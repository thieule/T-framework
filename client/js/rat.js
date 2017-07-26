/**
 * 
 * @file
 * RAT Library
 */

var rat = {};

// Global settings
rat.global = {
    baseAddress: 'http://annie.local/rat-project/RAT_Deploy/RAT',
    appId:123456,
    token:null,
    debug: false,
    secure: false,
    loading: true,
    authenticated: 0,
    authorized: 0
};

 /**
     * Token storage, default is in a cookie. The RAT integration will override this
     * to store the token in localStorage instead.
     */
rat.tokenStorage || (rat.tokenStorage = {
	get: function() {
		return Cookies.get('ua_session_token');
	},
	set: function(token) {
		Cookies.set('ua_session_token', token, { expires: new Date(new Date().getTime() + 31536000000) });
	},
	remove: function() {
		Cookies.expire('ua_session_token');
	}
});

 // check login status
   rat.isLogin = function() {
                var token = rat.tokenStorage.get();
                var user = rat.userStorage.get();
                if(!user) return false;

                user = JSON.parse(user);
                if(token && user.id) return true;
                return false;
            };

/**
 * Token user, default is in a cookie. The RAT integration will override this
 * to store the token in localStorage instead.
 */
    rat.userStorage || (rat.userStorage = {
    get: function() {
        return Cookies.get('ua_session_user');
    },
    set: function(user) {
        Cookies.set('ua_session_user', user, { expires: new Date(new Date().getTime() + 31536000000) });
    },
    remove: function() {
        Cookies.expire('ua_session_user');
    }
});

/*! Cookies.js - 0.3.1; Copyright (c) 2013, Scott Hamper; http://www.opensource.org/licenses/MIT */
    (function(e){"use strict";var a=function(b,d,c){return 1===arguments.length?a.get(b):a.set(b,d,c)};a._document=document;a._navigator=navigator;a.defaults={path:"/"};a.get=function(b){a._cachedDocumentCookie!==a._document.cookie&&a._renewCache();return a._cache[b]};a.set=function(b,d,c){c=a._getExtendedOptions(c);c.expires=a._getExpiresDate(d===e?-1:c.expires);a._document.cookie=a._generateCookieString(b,d,c);return a};a.expire=function(b,d){return a.set(b,e,d)};a._getExtendedOptions=function(b){return{path:b&& b.path||a.defaults.path,domain:b&&b.domain||a.defaults.domain,expires:b&&b.expires||a.defaults.expires,secure:b&&b.secure!==e?b.secure:a.defaults.secure}};a._isValidDate=function(b){return"[object Date]"===Object.prototype.toString.call(b)&&!isNaN(b.getTime())};a._getExpiresDate=function(b,d){d=d||new Date;switch(typeof b){case "number":b=new Date(d.getTime()+1E3*b);break;case "string":b=new Date(b)}if(b&&!a._isValidDate(b))throw Error("`expires` parameter cannot be converted to a valid Date instance"); return b};a._generateCookieString=function(b,a,c){b=encodeURIComponent(b);a=(a+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};b=b+"="+a+(c.path?";path="+c.path:"");b+=c.domain?";domain="+c.domain:"";b+=c.expires?";expires="+c.expires.toUTCString():"";return b+=c.secure?";secure":""};a._getCookieObjectFromString=function(b){var d={};b=b?b.split("; "):[];for(var c=0;c<b.length;c++){var f=a._getKeyValuePairFromCookieString(b[c]);d[f.key]===e&&(d[f.key]=f.value)}return d};a._getKeyValuePairFromCookieString= function(b){var a=b.indexOf("="),a=0>a?b.length:a;return{key:decodeURIComponent(b.substr(0,a)),value:decodeURIComponent(b.substr(a+1))}};a._renewCache=function(){a._cache=a._getCookieObjectFromString(a._document.cookie);a._cachedDocumentCookie=a._document.cookie};a._areEnabled=function(){var b="1"===a.set("cookies.js",1).get("cookies.js");a.expire("cookies.js");return b};a.enabled=a._areEnabled();"function"===typeof define&&define.amd?define(function(){return a}):"undefined"!==typeof exports?("undefined"!== typeof module&&module.exports&&(exports=module.exports=a),exports.Cookies=a):window.Cookies=a})();


