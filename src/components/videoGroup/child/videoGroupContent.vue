<template>
	<div id="videoGroupContent">
		<nav class="video_kind_list">
			<ul>
				<li class="hover">
					<img src="./../../../assets/video_1.png" class="video_kind_img">
					<div class="panel">
						<h3>我是标题</h3>
					</div>
				</li>
				<li>
					<img src="./../../../assets/video_2.png" class="video_kind_img">
					<div class="panel">
						<h3>我是标题</h3>
					</div>
				</li>
				<li>
					<img src="./../../../assets/video_3.png" class="video_kind_img">
					<div class="panel">
						<h3>我是标题</h3>
					</div>
				</li>
			</ul>
		</nav>
		<nav class="video_main">
			<ul>
				<li></li>
			</ul>
		</nav>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				baseWidth: 200
			}
		},
		components: {
			
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
			}
		}
	}
</script>
<style type="text/css" lang="less">
#videoGroupContent{
	nav.video_kind_list{
		width: 1200px;
		background-color: #ddd;
		margin: 0 auto;
		overflow: hidden;
		overflow: auto;
		ul{
			overflow: hidden;
			margin: 0 auto;
			display: table;
			padding: 0;
			li{
				position: relative;
				overflow: hidden;
				float: left;
				display: inline-block;
				width: 200px;
				height: 300px;
				cursor: pointer;
				img{
					position: absolute;
					left: 50%;
					height: 100%;
					z-index: 1;
				}
				div.panel{
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					background-color: rgba(0,0,0,0);
					z-index: 2;
					padding: 10px;
					transition: all .3s ease 0s;
					h3{
						color: #fff;
						margin: 0;
					}
				}
				&:hover,&.hover{
					div.panel{
						background-color: rgba(0,0,0,.5);
					}
				}
			}
		}
	}
}
</style>