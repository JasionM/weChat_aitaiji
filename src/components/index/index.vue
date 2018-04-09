<template>
	<div id="index">
		<welcome></welcome>
		<videoModule v-if="videoList.length >= 1" :videoList="videoList"></videoModule>
		<appIntro v-if="data.app != undefined" :appInfo="data.app[0]"></appIntro>
		<bottomInfo></bottomInfo>
	</div>
</template>
<script>
	import welcome from "./child/welcome";
	import videoModule from "./child/videoModule";
	import appIntro from "./child/appIntro.vue";
	import bottomInfo from "./child/bottomInfo.vue";
	export default {
	  	name: '',
	  	data () {
		    return {
		    	data: "",
		    	videoList: [],
		    	androidUrl: "",
		    	iosUrl: "",
		    }
		},
		components: {
			welcome,
			videoModule,
			appIntro,
			bottomInfo
		},
		mounted: function () {

		},
		created: function () {
			if ($(window).width() < 960) {
				this.$router.push({
					name: "h5"
				})
			}
			this.init();
			this.getDownloadUrl();
		},
		methods: {
			init () {
				let url = Config.web + "home";
				this.$http.get(url).then(res => {
					let body = res.body;
					if (body.result == 1) {
						this.data = body;
						this.videoList = body.video[0].video;
					} else {
						console.log("获取首页信息失败")
					}
				},(err) => {
					console.log("获取首页信息失败", err.statusText);
				})
			},
			getDownloadUrl(){
				let url = Config.wap + "home";
				this.$http.get(url).then(res => {
					let body = res.body;
					if (body.result == 1) {
						this.androidUrl = body.androidurl;
						this.iosUrl = body.iosurl;
					}
				})
			}
		}
	}
</script>