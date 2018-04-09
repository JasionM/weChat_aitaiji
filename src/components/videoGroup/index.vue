<template>
	<div id="videoGroup">
		<videoGroupHead ref="videoGroupHead"></videoGroupHead>
		<videoGroupContent :data="videoGroupList"></videoGroupContent>
		<bottomInfo></bottomInfo>
	</div>
</template>
<script type="text/javascript">
	import videoGroupHead from "./child/videoGroupHead.vue";
	import videoGroupContent from "./child/videoGroupContent.vue";
	import bottomInfo from "./../index/child/bottomInfo.vue";
	export default {
		data () {
			return {
				videoGroupList: [],
			}
		},
		components: {
			videoGroupHead,
			videoGroupContent,
			bottomInfo
		},
		created: function () {
			this.getVideoList();
		},
		mounted: function () {

		},
		methods: {
			playVideo(){
				this.$refs.videoGroupHead.playVideo();
			},
			stopVideo(){
				this.$refs.videoGroupHead.stopVideo();
			},
			getVideoList(){
				let url = Config.web + "video/video";
				this.$http.get(url).then(res => {
					let body = res.body;
					if (body.result == 1) {
						body.grouping.forEach(group => {
							group.videoList = body.videoinfo.filter(video => {
								return video.tcid == group.tcid
							});
							this.videoGroupList.push(group);
						})
					}
				})
			}
		}
	}
</script>
<style type="text/css" lang="less">

</style>