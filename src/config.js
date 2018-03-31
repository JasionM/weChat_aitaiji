/**
 * 
 * @authors ${author} (${email})
 * @date    2018-03-26
 * @version $Id$
 */

let www = window.location.hostname;
let api = "";
let http_url = {};
if (www == 'www.e-lotus.cn' || www == 'www.i-taichi.cn') {
	api = 'http://api.i-taichi.cn';
	http_url = {
		home: api + '/home/'
	}
} else if (www == 'localhost') {
	api = 'http://localhost:8081';
	http_url = {
		home: api + '/run/home/'
	}
}
Config = http_url;
