<template>
	<div id="videoGroupHead">
		<img src="./../../../assets/video_bg.png" class="bg_pic">
		<div class="container">
			<div class="main">
				<h3 class="title">我是标题</h3>
				<div class="video_panel">
					<video controls autoplay>
						<source src="http://img.gaozhaobang.com/video/howTouse/如何使用登录注册.mp4" type="video/mp4">
						您的浏览器不支持h5视频播放。
					</video>
					<p class="tip">爱太极已更新至1.7.0，安卓&苹果均已上线</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				
			}
		},
		components: {
			
		},
		created: function () {
		},
		mounted: function () {

		},
		methods: {
			
		}
	}
</script>
<style type="text/css" lang="less">
#videoGroupHead{
	position: relative;
	overflow: hidden;
	height: 550px;
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
		background-color: rgba(0,0,0,.6);
		div.main{
			width: 1200px;
			margin: 50px auto;
			position: relative;
			height: 100%;
			h3.title{
				font-size: 24px;
				color: #fff;
				margin-left: 225px;
				margin-bottom: 10px;
			}
			div.video_panel{
				width: 650px;
				height: 350px;
				margin: 0 auto;
				video{
					width: 100%;
					box-shadow: 0 0 0 #fff;
				}
				p.tip{
					font-size: 14px;
					color: #fff;
				}
			}
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