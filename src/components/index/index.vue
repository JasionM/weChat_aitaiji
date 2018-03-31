<template>
	<div id="index">
		<welcome></welcome>
		<videoModule></videoModule>
	</div>
</template>
<script>
	import welcome from "./child/welcome";
	import videoModule from "./child/videoModule";
	export default {
	  	name: '',
	  	data () {
		    return {
		    	

		    }
		},
		components: {
			welcome,
			videoModule
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