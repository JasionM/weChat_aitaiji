<template>
	<div id="videoSwiper">
		<div class="swiper_container">
			<div class="swiper_panel">
				<div class="swiper_item swiper_item_prev">
					<div class="swiper_item_panel">
						<div class="swiper_popup"></div>
						<img src="./../../../assets/video_1.png" height="517" width="776">
					</div>
				</div>
				<div class="swiper_item swiper_item_active">
					<div class="swiper_item_panel">
						<div class="swiper_popup"></div>
						<img src="./../../../assets/video_2.png" height="517" width="776">
					</div>
				</div>
				<div class="swiper_item swiper_item_next">
					<div class="swiper_item_panel">
						<div class="swiper_popup"></div>
						<img src="./../../../assets/video_3.png" height="517" width="776">
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
		data () {
			return {
				baseOffset: -567,
				offset: 776,
				currentOffset: -567,
			}
		},
		components: {
			
		},
		created: function () {

		},
		mounted: function () {
			$(".swiper_panel").width(776 * 3);
		},
		methods: {
			clickPrev(){
				let prevItem = $(".swiper_item_prev");
				let activeItem = $(".swiper_item_active");
				let nextItem = $(".swiper_item_next");

				this.currentOffset += this.offset;

				$(".swiper_panel").css({
					"transform": "translate("+this.currentOffset+"px)",
				});

				prevItem.addClass("swiper_item_active");
				prevItem.removeClass("swiper_item_prev");

				activeItem.addClass("swiper_item_next");
				activeItem.removeClass("swiper_item_active");

				nextItem.removeClass("swiper_item_next");
			},
			clickNext(){
				let prevItem = $(".swiper_item_prev");
				let activeItem = $(".swiper_item_active");
				let nextItem = $(".swiper_item_next");

				this.currentOffset -= this.offset;

				$(".swiper_panel").css({
					"transform": "translate("+this.currentOffset+"px)",
				});

				prevItem.removeClass("swiper_item_prev");

				activeItem.addClass("swiper_item_prev");
				activeItem.removeClass("swiper_item_active");

				nextItem.addClass("swiper_item_active");
				nextItem.removeClass("swiper_item_next");
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
			overflow: hidden;
			transform: translate(-564px);
			transition: all .3s ease 0s;
			div.swiper_item{
				float: left;
				display: inline-block;
				width: 776px;
				height: 100%;
				div.swiper_item_panel{
					transition: all .3s ease 0s;
				}
				&.swiper_item_prev, &.swiper_item_next{
					z-index: 0;
					div.swiper_item_panel{
						position: relative;
						transform: ;
						overflow: hidden;
						display: inline-block;
						width: 204px;
						height: 363px;
						margin-top: 37px;
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
				}
				&.swiper_item_active{
					z-index: 1;
				}
				&.swiper_item_prev{
					div.swiper_item_panel{
						// transform: translateX(123px) scale(.7);
						float: right;
					}
				}
				&.swiper_item_next{
					div.swiper_item_panel{
						// transform: translateX(-123px) scale(.7);
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