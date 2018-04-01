<template>
	<div id="index">
		<welcome></welcome>
		<videoModule></videoModule>
		<appIntro></appIntro>
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
			console.log("created");
			this.init();
		},
		methods: {
			init () {
				console.log("init");
			}
		}
	}
</script>