<template>
	<div id="h5">
		<img src="./../../assets/h5_bg.png" class="h5_bg">
		<div class="h5_container">
			<div class="top_info">
				<div class="left info">
					<p>随时随地练太极</p>
					<p>加入我们</p>
				</div>
				<div class="right info">
					<h3>爱太极</h3>
					<p>从现在开始</p>
				</div>
			</div>
			<div class="content">
				<video autoplay loop id="h5Video">
					<source :src="videourl" type="video/mp4">
				</video>
			</div>
			<div class="btn_list">
				<img src="./../../assets/ios_download_normal.png" @click="download(iosUrl)">
				<img src="./../../assets/android_download_normal.png" @click="download(androidUrl)">
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	  	name: '',
	  	data () {
		    return {
		    	androidUrl: "",
		    	iosUrl: "",
		    	videourl: "",
		    }
		},
		components: {

		},
		mounted: function () {
			$("#h5").css({
				"min-height":$(window).height()
			})
			$(".h5_bg").css({
				"height":$(window).height()
			})
		},
		created: function () {
			this.init();
		},
		methods: {
			init () {
				this.getDownloadUrl();
			},
			download(url){
				window.open(url);
			},
			getDownloadUrl(){
				let url = Config.wap + "home";
				this.$http.get(url).then(res => {
					let body = res.body;
					if (body.result == 1) {
						this.androidUrl = body.androidurl;
						this.iosUrl = body.iosurl;
						this.videourl = body.videourl;
						let str = "<source src="+this.videourl+" type='video/mp4'>"
						$("#h5Video").append(str);
					}
				})
			}
		}
	}
</script>
<style type="text/css" lang="less">
	#h5{
		position: relative;
		width: 100%;
		img.h5_bg{
			width: 100%;
			height: 100%;
		}
		div.h5_container{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			div.top_info{
				padding: 4.15rem 2.0rem 0;
				margin-bottom: 3.0rem;
				overflow: hidden;
				div{
					display: inline-block;
					&.right{
						float: right;
					} 
					&.left{
						float: left;
					}
					&.info{
						h3,p{
							float: left;
							margin: 0;
							color: #fff;
						}
						p{
							font-size: 0.9rem;
							width: 1.0rem;
							line-height: 1.0rem;
							margin-left: 0.5rem;
							padding-top: 0.9rem;
						}
						h3{
							font-size: 3.0rem;
							width: 4.0rem;
						}
					}
				}
			}
			div.content{
				width: 100%;
				margin-bottom: 4.5rem;
				video{
					width: 86%;
					display: block;
					margin: 0 auto;
				}
			}
			div.btn_list{
				text-align: center;
				img{
					width: 10.0rem;
				}
			}
		}
	}
</style>