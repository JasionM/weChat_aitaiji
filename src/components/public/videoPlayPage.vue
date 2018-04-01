<template>
	<div id="videoPlayPage">
		<div class="videoPlayPage_container">
			<div class="videoPlayPage_popup" @click="close"></div>
			<div class="videoPlayPage_main">
				<div class="headInfo">
					<span class="title"></span>
					<span class="close_icon" @click="close">&times;</span>
				</div>
				<video autoplay="autoplay" controls="controls" :poster="poster">
					<source :src="url" type="video/mp4">
					您的浏览器不支持h5视频播放。
				</video>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ["url","poster"],
		data () {
			return {
				
			}
		},
		components: {
			
		},
		created: function () {
		},
		mounted: function () {
			$("#videoPlayPage").height($(window).height());
		},
		methods: {
			close(){
				this.$parent.showPlay = false;
			}
		}
	}
</script>
<style type="text/css" lang="less">
#videoPlayPage{
	position: fixed;
	left: 0;
	top: 0;
	
	width: 100%;
	z-index: 10;
	div.videoPlayPage_popup{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.8);
	}
	div.videoPlayPage_main{
		width: 800px;
		position: absolute;
		top: 15%;
		left: 50%;
		margin-left: -400px;
		div.headInfo{
			position: absolute;
			opacity: 0;
			width: 100%;
			height: 50px;
			background-color: rgba(0,0,0,.8);
			top: 0;
			left: 50%;
			margin-left: -400px;
			transition: all .3s ease 0s;
			z-index: 1;
			span.title{
				float: left;
			}
			span.close_icon{
				float: right;
				color: #fff;
				font-size: 32px;
				margin-right: 10px;
				cursor: pointer;
				line-height: 25px;
				margin-top: 10px;
				display: inline-block;
			}
		}
		&:hover{
			div.headInfo{
				opacity: 1;
			}
		}
		video{
			height: 100%;
			width: 100%;
			z-index: 0;
		}
	}
}
</style>