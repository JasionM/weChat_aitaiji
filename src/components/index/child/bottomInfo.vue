<template>
	<div id="bottomInfo">
		<img src="./../../../assets/bottom_bg.png" class="bg_img">
		<div class="container">
			<div class="main">
				<div class="top_jump">
					<button type="button" class="text" @click="goTop">返回顶部</button>
				</div>
				<div class="btn_list">
					<button type="button">隐私条款</button>
					<button type="button">服务条款</button>
					<button type="button">关于我们</button>
				</div>
				<div class="bottom_info">
					<img src="./../../../assets/aitaichi.png">
					<p>iTaichi 爱太极 2016 © All Right Reserved. 河南荷花科技有限公司 版权所有 豫ICP备16030317号</p>
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
			goTop(){
				$("html,body").animate({
					scrollTop: 0+"px"
				}, 300)
			}
		}
	}
</script>
<style type="text/css" lang="less">
#bottomInfo{
	position: relative;
	overflow: hidden;
	height: 443px;
	text-align: center;
	img.bg_img{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -659px;
		margin-left: -980px;
	}
	div.container{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 443px;
		background: rgba(0,0,0,.7);
		div.main{
			width: 1200px;
			margin: 85px auto;
			div.top_jump{
				margin-bottom: 103px;
				button.text{
					background: rgba(0,0,0,0);
					text-decoration: underline;
					color: #fff;
					cursor: pointer;
					border: none;
				}
			}
			div.btn_list{
				margin-bottom: 30px;
				button{
					padding: 10px 34px;
					background: rgba(0,0,0,0);
					border: 1px solid #fff;
					color: #fff;
					margin-right: 44px;
					font-size: 16px;
					cursor: pointer;
					transition: all .3s ease 0s;
					&:last-child{
						margin: 0;
					}
					&:hover{
						background: #fff;
						color: rgba(0,0,0,.7);
					}
				}
			}
			div.bottom_info{
				img{
					margin-bottom: 20px;
				}
				p{
					color: #fff;
					font-size: 14px;
				}
			}
		}
	}
}
</style>