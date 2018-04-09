<template>
	<div id="videoGroupHead">
		<img src="./../../../assets/video_bg.png" class="bg_pic">
		<nav class="videoGroupHead_head">
			<ul>
				<li class="img">
					<img src="./../../../assets/aitaichi.png">
				</li>
				<li class="item"><router-link to="/index">首页</router-link></li>
				<li class="item active">视 频 区</li>
			</ul>
		</nav>
		<div class="container">
			<div class="main">
				<h3 class="title">{{video.title}}</h3>
				<div class="video_panel">
					<video controls autoplay loop class="top_video">
						您的浏览器不支持h5视频播放。
					</video>
					<p class="tip">{{video.introduce}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				video: {}
			}
		},
		components: {
			
		},
		created: function () {
			this.getVideo();
		},
		mounted: function () {

		},
		methods: {
			getVideo(){
				let url = Config.web + "video/top";
				this.$http.get(url).then(res => {
					let body = res.body;
					if (body.result == 1) {
						this.video = body;
						let str = "<source src="+this.video.url+" type='video/mp4'>"
						$("div.video_panel").find("video").append(str);
					} else {
						console.log("获取视频区 顶部视频失败",url);
					}
				}, (err) => {
					console.log("获取视频区接口请求失败", err.statusText);
				})
			},
			stopVideo(){
				$(".top_video").trigger("pause");
			},
			playVideo(){
				$(".top_video").trigger("play");
			}
		}
	}
</script>
<style type="text/css" lang="less">
#videoGroupHead{
	position: relative;
	overflow: hidden;
	height: 895px;
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
	nav.videoGroupHead_head{
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,.5);
		z-index: 1;
		padding: 35px 0;
		ul{
			width: 1200px;
			margin: 0 auto;
			overflow: hidden;
			li{
				float: left;
				list-style: none;
				&.item{
					height: 53px;
					color: #fff;
					margin-left: 70px;
					cursor: pointer;
					color: #fff;
					line-height: 53px;
					font-size: 22px;
					a{
						color: #fff;
						line-height: 53px;
						font-size: 22px;
						text-decoration: none;
					}
					&.active{
						border-bottom: 1px solid #fff;
					}
				}
			}
		}
	}
	div.container{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.6);
		padding-top: 140px;
		div.main{
			width: 1200px;
			margin: 50px auto;
			position: relative;
			height: 100%;
			h3.title{
				font-size: 32px;
				color: #fff;
				margin-left: 85px;
				margin-bottom: 10px;
				font-weight: 400;
			}
			div.video_panel{
				width: 890px;
				height: 527px;
				margin: 0 auto;
				video{
					width: 100%;
					box-shadow: 0 0 0 #fff;
				}
				p.tip{
					font-size: 22px;
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