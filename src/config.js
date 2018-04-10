/**
 * 
 * @authors ${author} (${email})
 * @date    2018-03-26
 * @version $Id$
 */

let www = window.location.hostname;
let api = "";
let http_url = {};
if (www == 'home.i-taichi.cn' || www == 'www.i-taichi.cn') {
	api = 'http://app.i-taichi.cn';
	http_url = {
		web: api + '/web/',
		wap: api + '/wap/'
	}
} else {
	http_url = {
		web: '/run/web/',
		wap: '/run/wap/'
	}
}
Config = http_url;
