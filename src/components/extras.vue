<template>
		<div class="extras">
			<div class="extra" v-for="type in types">
				<label>{{type.label}}</label>
				<input type="checkbox" :value="type.value" v-model="selectedNumbers">
			</div>
		</div>
</template>

<script>
	export default {
		'name': 'extras',
		methods: {
			setExtrasPrice: function(value){
				this.$store.commit('setExtrasPrice', this.sum)
			}
		},
		watch: {
			selectedNumbers(newVal, oldVal) {
				this.setExtrasPrice()
			}
		},
		data() {
			return {
				types: [
					{'label': 'Boomy bass box', 'value': 50},
					{'label': 'Cloudy insurance', 'value': 75},
					{'label': 'Recognize face', 'value': 20},
					{'label': 'Airy Flayphones', 'value': 30}
				],
				selectedNumbers: []
			}
		},
		computed: {
			sum() {
				return this.selectedNumbers.reduce(function(a,b) {
					return parseInt(a) + parseInt(b);
				}, 0);
			}
		},
		created() {
			console.log('this instance', this, this.sum)
		}
	}
</script>