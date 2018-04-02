<template>
	<div id="about">
		<div class="subpage-nav">
	        <nav>
	            <div class="logo"></div>
	            <ul>
	            	<li>
	            		<router-link to="/index">首页</router-link>
	            	</li>
	            	<li>
	            		<router-link to="/videoGroup">视频区</router-link>
	            	</li>
	            	<li class="active"></li>
	            </ul>
	        </nav>
	    </div>
	    <div class="infomation-container">
	        <h1>关于我们</h1>
	            <p>古老的东方文明一直以来有这样一个观点，即天人合一。人诞生于自然中，又同时在不断地影响着自然，人与自然间有一个交汇点为气。当人能合理地控制、培养自己的气，便能使人处于一种和谐、平静地状态，这种状态不仅可以使人减少疾病的发生，也可以对抗难以预料的敌人的攻击，同时更能使自己具有参透宇宙万物运行哲理的智慧。中华民族祖先率先参透了这个道理，通过阴和阳，绘制了“气”运行的原理图----太极图。在该蓝图下，发明了太极拳，通过太极拳的练习以培养、控制人的气，最终使人的自身、人与人之间、人与自然之间达到一种和谐、平静、共生、共养的状态。</p>
	            <p>然而，千百年来，中华大地战事频发，太极拳跟随其传人也散布于世界各地，像中华文化一样，也与各地的自然、文化相结合，产生了多种变化。虽然太极拳的枝叶仍保留着太极拳的部分功效、形态，但他的神已渐渐模糊。今天《爱太极》APP有幸得到了陈正雷大师的授权，得以将正宗的太极拳和习练方法展示给世人，使大家能以简单有效的方法，练习“气”的采集与陈氏太极拳的入门招式。未来，您的练习视频，甚至能有幸得到陈正雷大师的亲自提点与指导。还等什么？下载《爱太极》，让我们来带你进入神秘的太极拳世界，一起来拜访一下陈大师和他的徒弟们。</p>
	            <p>《爱太极》的使用方法非常简单，下载APP后，您可以根据您所在国家经常使用的社交网络账号，如：微信、facebook等进行登录。登陆后，首先根据APP内的视频课程进行采气练习，采气结束后再有选择地练习陈氏太极的初级拳法套路。中国有句古话，“贵在坚持”，根据您的采气活动，以及练习进度，我们会给您进行积分，当积分达到等级后，您不仅可以得到陈正雷大师亲自颁发的认证证书，还会得到陈氏太极拳师对您的在线指导，甚至获得与陈正雷大师面对面切磋的机会。</p>
	            <h2>联系方式</h2>
	                <p>地址：河南省郑州市经济技术开发区兴华科技产业园</p>
	                <p>邮箱: support@e-lotus.cn</p>
	                <p>电话: (86)189-3763-1911</p>
	    </div>
	    <baseBottom></baseBottom>
	</div>
</template>
<script>
	import baseBottom from "./../index/child/bottomInfo.vue";
	export default {
	  	name: '',
	  	data () {
		    return {
		    	
		    }
		},
		components: {
			baseBottom
		},
		mounted: function () {
			console.log("mounted");
		},
		created: function () {
			$("html,body").scrollTop(0);
		},
		methods: {
			init () {
				console.log("init");
			}
		}
	}
</script>
<style type="text/css" lang="less">
	#about{
		div.subpage-nav{
			width: 100%;
		    height: 94px;
		    overflow: hidden;
		    background-color: #3AD88F;
		    nav{
			    width: 100%;
			    height: 94px;
			    margin: 0px auto;
			    display: block;
			    ul{
				    display: block;
				    float: right;
				    margin: 0;
				    height: 100%;
				    li{
					    display: block;
					    float: left;
					    width: 150px;
					    height: 94px;
					    line-height: 94px;
					    margin: 0px 15px;
					    text-align: center;
					    a{
						    text-decoration: none;
						    display: inline-block;;
						    color: #FFF;
						    font-size: 20px;
						}
						&.active{
						 	a{
						    	border-bottom: 2px solid #FFF;
						    }
						}
					}
				}
			}
			div.logo{
			    width: 70px;
			    height: 70px;
			    background-image: url( './../../assets/logo.png');
			    background-position: center;
			    background-size: cover;
			    margin-left: 30px;
			    margin-top: 12px;
			    float: left;
			}
		}
		div.infomation-container{
			width: 784px;
			margin: 48px auto;
    		padding-bottom: 118px;
    		h1 {
			    height: 96px;
			    line-height: 96px;
			    font-size: 48px;
			    color: #333;
			}
			h2 {
			    height: 30px;
			    line-height: 20px;
			    font-size: 20px;
			    color: #333;
			}
			p {
			    font-size: 16px;
			    line-height: 24px;
			    color: #333;
			    margin-bottom: 24px;
			}
		}
	}
</style>