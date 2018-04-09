<template>
	<div id="videoGroupContent">
		<div class="videoGroupContent_main">
			<nav class="video_main" v-for="videoGroup in data">
				<div class="video_title">
					<div class="video_popup">
						<h3>{{videoGroup.gradename}}</h3>
					</div>
					<img :src="videoGroup.groupingurl">
				</div>
				<ul class="video_list">
					<li v-for="video in videoGroup.videoList" @click="openVideo(video)">
						<div class="video_panel">
							<h3>{{video.name}}</h3>
							<img src="./../../../assets/icon_play.png">
							<div class="info">
								<span class="left">{{dateFormatter(video.duration)}}</span>
								<!-- <span class="right">123次播放</span> -->
							</div>
						</div>
						<img :src="video.background" class="video_bg">
					</li>
				</ul>
			</nav>
		</div>
		<transition name="fade">
			<videoPlayPage :url="video.url" :poster="video.background" :title="video.name" v-if="showPlay"></videoPlayPage>
		</transition>
	</div>
</template>
<script type="text/javascript">
	import videoPlayPage from "./../../public/videoPlayPage.vue";
	export default {
		props: ["data"],
		data () {
			return {
				baseWidth: 267,
				showPlay: false,
				video: {
					url: "https://itaichi-production.oss-cn-beijing.aliyuncs.com/itaichi_video/oss_G00005.mp4",
					poster: "",
				}
			}
		},
		components: {
			videoPlayPage
		},
		created: function () {

		},
		mounted: function () {
			this.initKindList();
		},
		methods: {
			initKindList(){
				setTimeout(() => {
					let ul = $("nav.video_kind_list").find("ul");
					let list = ul.find("li");

					$(ul).width(list.length * this.baseWidth)
					list.each((index, item) => {
						let img = $(item).find("img.video_kind_img");
						img.css({
							"margin-left":"-" + img.width() / 2 + "px"
						})
					})
				}, 100);
			},
			openVideo(video){
				this.showPlay = true;
				this.video = video;
				this.$parent.stopVideo();
			},
			close(){
				this.showPlay = false;
			},
			playVideo(){
				this.$parent.playVideo();
			},
			dateFormatter(time){
				let date = new Date(time * 1000);

				let minute = date.getMinutes() >= 10 ? date.getMinutes() : "0"
							+ date.getMinutes();
				let second = date.getSeconds() >= 10 ? date.getSeconds() : "0"
							+ date.getSeconds();

				return minute + ":" + second;
			}
		}
	}
</script>
<style type="text/css" lang="less">
#videoGroupContent{
	overflow: hidden;
	.fade-enter-active, .fade-leave-active {
	  	transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
	div.videoGroupContent_main{
		margin-top: 136px;
		nav.video_main{
			width: 1200px;
			margin: 0 auto 50px;
			overflow: hidden;
			div.video_title,ul.video_list{
				float: left;
				display: inline-block;
			}
			div.video_title{
				width: 240px;
				height: 410px;
				position: relative;
				overflow: hidden;
				img,div.video_popup{
					position: absolute;
					left: 0;
					top: 0;
				}
				img{
					height: 100%;
					width: 100%;
					z-index: 0;
				}
				div.video_popup{
					z-index: 1;
					background-color: rgba(0,0,0,.5);
					width: 100%;
					height: 100%;
					h3{
						color: #fff;
						font-size: 22px;
						font-weight: 400;
						margin: 0;
						padding: 15px;
					}
				}
			}
			ul.video_list{
				padding: 0;
				width: 960px;
				margin: 0;
				li{
					float: left;
					list-style: none;
					width: 310px;
					height: 200px;
					box-sizing: border-box;
					overflow: hidden;
					position: relative;
					background-color: #fff;
					padding: 10px;
					margin-left: 10px;
					margin-bottom: 10px;
					cursor: pointer;
					transition: all .5s ease 0s;
					div.video_panel,img.video_bg{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						transition: all .5s ease 0s;
					}
					div.video_panel{
						background-color: rgba(0,0,0,.3);
						z-index: 1;
						color: #fff;
						text-align: center;
						h3{
							margin: 0;
							padding: 15px 20px;
							font-size: 16px;
							font-weight: 400;
							text-align: left;
						}
						img{
							margin: 32px;
						}
						div.info{
							text-align: left;
							padding: 0 20px;
							span.left{
								float: left;
							}
							span.right{
								float: right;
							}
						}
					}
					img.video_bg{
						z-index: 0;
					}
					&:hover{
						box-shadow: 0 0 5px #000;
						div.video_panel{
							background-color: rgba( 0, 0, 0, .7);
						}
						img.video_bg{
							transform: scale(1.1);
						}
					}
				}
			}
		}
	}
}
</style>