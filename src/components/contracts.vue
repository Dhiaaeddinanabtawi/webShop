<template>
	<div class="contracts">
		<select id="contract" @change="setContractsPrice($event.target.value)">
			<option v-for="type in types" :value="type.value">{{type.title}}</option>
		</select>
	</div>
</template>

<script>
	export default {
		'name': 'contracts',
		methods: {
			setContractsPrice: function(value){
				this.$store.commit('setContractsPrice', value)
			}
		}, 
		data() {
			return {
				types: [
					{'title': 'välj', 'value': 0},
					{'title': '24 mån Guld', 'value': 100},
					{'title': '18 mån Silver', 'value': 150},
					{'title': '12 mån Student', 'value': 100},
					{'title': 'Ingen bindingstid', 'value': 250}
				]
			}
		}
	}
</script>