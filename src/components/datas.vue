<template>
	<div class="datas">
		<div class="data" v-for="size in sizes">
			<input type="radio" name="data" :value="size.value" @change = "setDataAmountPrice(size.value)">
			<label>{{size.amount}}</label>
		</div>
	</div>
</template>

<script>
	export default {
		'name': 'datas',
		methods: {
			setDataAmountPrice: function(value){
				this.$store.commit('setDataAmountPrice', value)
			}
		},
		data() {
			return {
				sizes: [
					{'amount': '10 GB', 'value': 50},
					{'amount': '25 GB', 'value': 100},
					{'amount': '50 GB', 'value': 150},
					{'amount': '100 GB', 'value': 200}
				]
		   	}
		}
	}
</script>