<template>
	<div id="appIntro">
		<div class="container">
			<div class="main">
				<div class="left">
					<img src="./../../../assets/phone.png">
				</div>
				<div class="right">
					<h3>{{appInfo.title}}</h3>
					<div class="part">
						<p v-for="info in appInfo.introduce.split('|')">{{info}}</p>
						<!-- <p>中国非物质文化遗产陈式太极拳传承人陈正雷老师独家授权的太极拳教学APP。</p> -->
					</div>
					<div class="part">
						<p v-for="info in appInfo.updateinfo.split('|')">{{info}}</p>
						<!-- <p>爱太极通过对陈氏太极拳精品化的课程展示，科学系统化的课程编排，</p>
						<p>正宗正源，兼顾传承与发展。</p> -->
					</div>
					<!-- <div class="part">
						<p>实现对中华瑰宝陈氏太极拳的宣传与普及。</p>
					</div> -->
					<div class="btn_list">
						<div class="btn" @mouseover="iosHover = true" @mouseout="iosHover = false" @click="download($parent.iosUrl)">
							<img src="./../../../assets/apple_icon.png" v-if="!iosHover">
							<img src="./../../../assets/apple_white_icon.png"v-if="iosHover">
							<div class="info">
								<p>Available on the</p>
								<h3>App Store</h3>
							</div>
						</div>
						<div class="btn" @mouseover="androidHover = true" @mouseout="androidHover = false" @click="download($parent.androidUrl)">
							<img src="./../../../assets/android_icon.png" v-if="!androidHover">
							<img src="./../../../assets/android_white_icon.png" v-if="androidHover">
							<div class="info">
								<p>Available on the</p>
								<h3>App Store</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: ["appInfo"],
		data () {
			return {
				iosHover: false,
				androidHover: false,
			}
		},
		components: {
			
		},
		created: function () {
		},
		mounted: function () {

		},
		methods: {
			download(url){
				window.open(url);
			}
		}
	}
</script>
<style type="text/css" lang="less">
#appIntro{
	div.container{
		overflow: hidden;
		background: #fff;
		div.main{
			width: 1200px;
			margin: 0 auto;
			margin-top: 100px;
			div.left{
				float: left;
				height: 582px;
				width: 50%;
				overflow: hidden;
				position: relative;
				img{
					position: absolute;
					top: 0;
					right: 60px;
					width: 308px;
				}
			}
			div.right{
				float: right;
				width: 50%;
				padding-left: 60px;
				box-sizing: border-box;
				padding-top: 70px;
				color: #565656;
				h3{
					font-size: 26px;
					font-weight: 400;
					margin-bottom: 32px;	
				}
				div.part{
					margin-bottom: 28px;

					p{
						font-size: 14px;
					}
				}
				div.btn_list{
					div.btn{
						border: 1px solid #7f7f7f;
						padding: 12px;
						border-radius: 10px;
						display: table;
						width: 178px;
						overflow: hidden;
						margin-bottom: 20px;
						cursor: pointer;
						transition: all .3s ease 0s;
						color: #7f7f7f;
						img,div.info{
							float: left;
							vertical-align: middle;
						}
						img{
							margin-top: 3px;
						}
						div.info{
							display: inline-block;
							margin-left: 20px;
							p,h3{
								margin: 0;
							}
							p{
								font-size: 15px;
							}
							h3{
								font-size: 20px;
								font-weight: bolder;
							}
						}
						&:hover{
							color: #fff;
							background: #7f7f7f;
						}
					}
				}
			}
		}
	}
}
</style>