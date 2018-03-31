<template>
	<div id="videoModule">
		<img src="./../../../assets/video_bg.png" class="bg_pic">
		<div class="container">
			<div class="main">
				<div class="top_info">
					<div class="title">
						<h3>首推视频</h3>
						<h3>陈式太极八卦六十四掌</h3>
					</div>
					<div class="intro">
						<p>陈式太极拳“四大金刚”之一的陈正雷老师独家授权并参与拍摄的教学视频库，由赏析视频，教学视频与动作库三部分组成</p>
						<p>并邀请陈正雷大师亲自示范</p>
						<p>陈正雷大师若干弟子全程参与课程拍摄和文字整理，保证了教学视频的科学，系统及标准化</p>
					</div>
				</div>
				<div class="video_swipe">
					<swiper :options="swiperOption" ref="mySwiper" v-show="false">
						<swiper-slide>
							<div class="img_panel">
								<div class="panel_popup"></div>
								<img src="./../../../assets/video_1.png" height="517" width="776">
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="img_panel">
								<div class="panel_popup"></div>
								<img src="./../../../assets/video_2.png" height="517" width="776">
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="img_panel">
								<div class="panel_popup"></div>
								<img src="./../../../assets/video_3.png" height="517" width="776">
							</div>
						</swiper-slide>
						<div class="swiper-pagination" slot="pagination"></div>
						<div class="swiper-button-prev" slot="button-prev"></div>
					  	<div class="swiper-button-next" slot="button-next"></div>
					  	<div class="swiper-scrollbar"  slot="scrollbar"></div>
					</swiper>
					<videoSwiper></videoSwiper>
				</div>
				<div class="bottom">
					<button type="button">进入视频区</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import videoSwiper from "./videoSwiper.vue";
	export default {
	  	name: '',
	  	data () {
		    return {
		    	swiperOption: {
		          	slidesPerView : 3,
					centeredSlides : true,
					autoplay: 3000,
					initialSlide:1,
					slidesOffsetAfter: 0,
					navigation: {
					    nextEl: '.swiper-button-next',
					    prevEl: '.swiper-button-prev',
					 },
					pagination: {
					   el: '.swiper-pagination',
					}
	            }
		    }
		},
		components: {
			videoSwiper
		},
		computed: {
			swiper() {
		     	return this.$refs.mySwiper.swiper;
		    }
		},
		mounted: function () {
			let windowHeight = $(window).height() < 893?893:$(window).height();
			$("#videoModule").height(windowHeight);
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
	#videoModule{
		position: relative;
		overflow: hidden;
		h3,p{
			margin: 0;
		}
		h3{
			opacity: .8;

		}
		p{
			opacity: .7;
		}
		img.bg_pic{
			position: absolute;
			top: 50%;
			margin-top: -556px;
			left: 50%;
			margin-left: -960px;
		}
		div.container{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.7);
			div.main{
				width: 1200px;
				margin: 0 auto;
				div.top_info{
					text-align: center;
					color: #fff;
					margin-top: 50px;
					margin-bottom: 27px;
					div.title{
						h3{
							font-size: 26px;
							line-height: 53px;
						}
					}
					div.intro{
						p{
							font-size: 14px;
							line-height: 23px;
							
						}
					}
				}
				div.video_swipe{
					height: 438px;
					div.swiper-container{
						height: 100%;
						overflow: hidden;
						img{
							height: 100%;
							width: auto;
						}
						div.swiper-wrapper{
							div.swiper-slide{
								display: none;
								transition: all .3s;
								&.swiper-slide-active,&.swiper-slide-prev,&.swiper-slide-next{
									display: inline-block;
								}
								&.swiper-slide-active{
									position: relative;
									z-index: 1;
									img{
										position: absolute;
										left: 50%;
										margin-left: -331px;
									}
								}
								&.swiper-slide-prev,&.swiper-slide-next{
									position: relative;
									transform: scale(.7);
									overflow: hidden;
									div.panel_popup{
										position: absolute;
										left: 0;
										top: 0;
										width: 100%;
										height: 100%;
										background: rgba(0,0,0,.5);
									}
								}
							}
						}
					}
				}
				div.bottom{
					text-align: center;
					margin-top: 50px;
					button{
						height: 78px;
						width: 256px;
						line-height: 78px;
						border: 1px solid #fff;
						font-size: 30px;
						color: #fff;
						opacity: .9;
						background: rgba(0,0,0,0);
						cursor: pointer;
						transition: all .5s;
						&:hover{
							background-color: #eee;
							color: #333;
						}
					}
				}
			}
		}
	}
</style>