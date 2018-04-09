<template>
	<div id="videoSwiper">
		<div class="swiper_container">
			<div class="swiper_panel">
				<div 
					v-for="(video, index) in videoList" 
					:class="{swiper_item: true,swiper_item_next:index == activeIndex + 1,swiper_item_prev:index == activeIndex - 1,swiper_item_active: index == activeIndex}">
					<div class="swiper_item_panel">
						<div class="play_icon" @click="playVideo(video.url, video.poster, video.title)"></div>
						<div class="swiper_popup"></div>
						<img :src="video.poster" height="517" width="776">
					</div>
				</div>
			</div>
			<div class="swiper_prev" @click="clickPrev"></div>
			<div class="swiper_next" @click="clickNext"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ["videoList"],
		data () {
			return {
				baseOffset: -174,
				offset: 476,
				currentOffset: -174,
				control: false,
				url: "",
				poster: "",
				activeIndex: 1,
			}
		},
		components: {
		},
		created: function () {
			this.activeIndex = this.$parent.startIndex;
		},
		mounted: function () {
			$(".swiper_panel").width(476 * 3);
		},
		methods: {
			clickPrev(){
				let prevItem = $(".swiper_item_prev");
				let activeItem = $(".swiper_item_active");
				let nextItem = $(".swiper_item_next");
				let prevMoreItem = prevItem.prev(".swiper_item");

				if (prevItem.length <= 0 || this.control) {
					return;
				}

				this.activeIndex--;
				this.$parent.getCurrentVideoInfo(this.activeIndex);

				this.control = true;

				this.currentOffset += this.offset;

				$(".swiper_panel").css({
					"transform": "translate("+this.currentOffset+"px)",
				});

				// if (prevMoreItem.length >= 1) {
				// 	prevMoreItem.addClass("swiper_item_prev");
				// 	prevMoreItem.find(".swiper_item_panel").css({
				// 		"float": "right"
				// 	})
				// }

				// prevItem.addClass("swiper_item_active");
				// prevItem.removeClass("swiper_item_prev");

				// activeItem.find(".swiper_item_panel").css({
				// 	"float": "left"
				// })
				// activeItem.addClass("swiper_item_next");
				// activeItem.removeClass("swiper_item_active");

				// nextItem.removeClass("swiper_item_next");

				setTimeout(() => {
					this.control = false;
				}, 300);
			},
			clickNext(){
				let prevItem = $(".swiper_item_prev");
				let activeItem = $(".swiper_item_active");
				let nextItem = $(".swiper_item_next");
				let nextMoreItem = nextItem.next(".swiper_item");

				if (nextItem.length <= 0 || this.control) {
					return;
				}

				this.activeIndex++;
				this.$parent.getCurrentVideoInfo(this.activeIndex);

				this.control = true;

				this.currentOffset -= this.offset;

				$(".swiper_panel").css({
					"transform": "translate("+this.currentOffset+"px)",
				});

				// prevItem.removeClass("swiper_item_prev");

				// activeItem.find(".swiper_item_panel").css({
				// 	"float": "right"
				// })
				// activeItem.addClass("swiper_item_prev");
				// activeItem.removeClass("swiper_item_active");

				// nextItem.addClass("swiper_item_active");
				// nextItem.removeClass("swiper_item_next");

				// nextMoreItem.addClass("swiper_item_next");

				setTimeout(() => {
					this.control = false;
				}, 300);
			},
			playVideo(url, poster, title){
				this.$parent.playVideo(url, poster, title);
			}
		}
	}
</script>
<style type="text/css" lang="less">
#videoSwiper{
	width: 100%;
	div.swiper_container{
		position: relative;
		overflow: hidden;
		div.swiper_panel{
			position: relative;
			float: left;
			height: 437px;
			// overflow: hidden;
			transform: translate(-174px);
			transition: transform .3s ease 0s;
			div.swiper_item{
				float: left;
				display: inline-block;
				width: 476px;
				height: 437px;
				// overflow: hidden;
				z-index: 0;
				div.swiper_item_panel{
					transition: all .3s ease 0s;
					position: relative;
					// overflow: hidden;
					display: inline-block;
					width: 100%;
					height: 363px;
					margin-top: 37px;
					z-index: 0;

					img{
						height: 100%;
					}
					div.swiper_popup{
						position: absolute;
						left: 0;
						top: 0;
						background: rgba(0,0,0,.5);
						width: 100%;
						height: 100%;
					}
				}
				&.swiper_item_prev, &.swiper_item_next{
					z-index: 0;
					div.swiper_item_panel{
						overflow: hidden;
					}
				}
				&.swiper_item_active{
					z-index: 1;
					div.swiper_item_panel{
						height: 100%;
						width: 100%;
						transition: all .3s ease 0s;
						margin-top: 0;
						overflow: unset;
						z-index: 1;
						div.play_icon{
							width: 62px;
							height: 62px;
							position: absolute;
							top: 50%;
							margin-top: -31px;
							left: 62%;
							margin-left: -32px;
							border: 1px solid #fff;
							border-radius: 50%;
							z-index: 2;
							cursor: pointer;
							transition: all .3s ease 0s;
							&:after{
								content: "";
								display: block;
								border-left: 20px solid #fff;
								border-top: 15px solid transparent;
								border-bottom: 15px solid transparent;
								position: absolute;
								left: 24px;
    							top: 16px;
							}
							&:hover{
								background: #fff;
								&:after{
									border-left-color: rgba(0,0,0,.7);
								}
							}
						}
						img{
							height: 100%;
							position: absolute;
							left: 50%;
							margin-left: -338px;
						}
						div.swiper_popup{
							display: none;
						}
					}
				}
				&.swiper_item_prev{
					div.swiper_item_panel{
						float: right;
					}
				}
				&.swiper_item_next{
					div.swiper_item_panel{
						float: left;
					}
				}
			}
		}
		div.swiper_prev{
			position: absolute;
			left: 14px;
			top: 50%;
			margin-top: -33px;
			height: 66px;
			cursor: pointer;
			&:after{
				content: "";
				display: inline-block;
				height: 33px;
				width: 33px;
				border-top: 2px solid #ddd;
				border-left: 2px solid #ddd;
				transform: rotate(-45deg);
			}
		}
		div.swiper_next{
			position: absolute;
			right: 14px;
			top: 50%;
			margin-top: -33px;
			height: 66px;
			cursor: pointer;
			&:after{
				content: "";
				display: inline-block;
				height: 33px;
				width: 33px;
				border-top: 2px solid #ddd;
				border-right: 2px solid #ddd;
				transform: rotate(45deg);
			}
		}
	}
}
</style>