<template>
	<div id="videoGroup">
		<videoGroupHead></videoGroupHead>
		<videoGroupContent></videoGroupContent>
	</div>
</template>
<script type="text/javascript">
	import videoGroupHead from "./child/videoGroupHead.vue";
	import videoGroupContent from "./child/videoGroupContent.vue";
	export default {
		data () {
			return {
				
			}
		},
		components: {
			videoGroupHead,
			videoGroupContent
		},
		created: function () {
		},
		mounted: function () {

		},
		methods: {
			
		}
	}
</script>
<style type="text/css" lang="less">

</style>