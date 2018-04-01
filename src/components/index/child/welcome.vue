<template>
	<div id="welcome">
		<img src="./../../../assets/welcome.png" class="bg_pic">
		<div class="container">
			<div class="main">
				<img src="./../../../assets/aitaichi.png" class="logo">
				<div class="footer">
					<div class="left">
						<h3>太 极 你 的 世 界</h3>
						<p>从现在开始 爱太极</p>
						<p>加入我们 随时随地练太极</p>
					</div>
					<div class="right">
						<img src="./../../../assets/android.png">
						<img src="./../../../assets/ios.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	  	name: '',
	  	data () {
		    return {
		    	
		    }
		},
		mounted: function () {
			console.log("mounted");
			$("#welcome").height($(window).height());
		},
		created: function () {
			console.log("created");
			this.init();
		},
		methods: {
			init () {
				console.log("init");
			}
		}
	}
</script>
<style type="text/css" lang="less">
	#welcome{
		position: relative;
		overflow: hidden;
		h3,p{
			margin: 0;
		}
		img.bg_pic{
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -540px;
			margin-left: -960px;
		}
		div.container{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			div.main{
				width: 1200px;
				margin: 32px auto;
				position: relative;
				height: 100%;
				div.footer{
					width: 100%;
					position: absolute;
					bottom: 50px;
					left: 0;
					overflow: hidden;
					color: #fff;
					div.left{
						float: left;
						h3{
							font-weight: 400;
							font-size: 22px;
							line-height: 22px;
							margin: 22px 0;
						}
						p{
							font-size: 14px;
							margin: 0;
							word-spacing: 8px;
						}
					}
					div.right{
						float: right;
						img{
							margin-right: 22px;
						}
					}
				}
			}
		}
	}
</style>