<template>
		<div class="picker">
	        <div class="phone" v-for="mobile in mobiles">
	          <img :src="mobile.imageSrc">
	          <section>
	            <h2>{{mobile.name}}</h2>
	            <ul>
	              <li v-for="specification in mobile.specifications">{{specification.spec}}</li>
	            </ul>
	          </section>
	          <input type="radio" name="phone" :value="mobile.value" @change="setMobilePrice(mobile.value)"> 
	        </div>
	    </div>
</template>

<script>

	export default {
		'name': 'phones',
		methods: {
			setMobilePrice: function(value){
				this.$store.commit('setMobilePrice', value)
			}
		},
		data() {
			return {
				mobiles: [
				{'name': 'iPhone Z', 'imageSrc': 'https://www.technobuffalo.com/wp-content/uploads/2017/02/iphone-8-concept-8-3-470x310@2x.jpg', specifications: [{spec: 'Semitransparent telefon'}, {spec: '5G Ready'}, {spec: 'Handhållare'}], 'value': 200}, 

				{'name': 'iPhone G', 'imageSrc': 'https://images.techhive.com/images/idge/imported/imageapi/2015/01/14/17/011011-iphoney5-2-100546391-gallery.idge.jpg', specifications: [{spec: 'Armbandstelefon'}, {spec:'Projicerad skärm'}, {spec: 'Virtual touch'}], 'value': 250},

				{'name': 'iPhone Mini', 'imageSrc': 'http://www.newsmobile.in/wp-content/uploads/2017/06/iPhone1.jpg', specifications: [{spec: 'Retrodesign'}, {spec: 'Face recognition'}, {spec: 'Handhållare'}], 'value': 110},

				{'name': 'Samsung Wear', 'imageSrc': 'http://cdn.images.express.co.uk/img/dynamic/59/590x/secondary/update-samsung-gear-s3-android-wear-google-801981.jpg', specifications: [{spec: 'Look cool'}, {spec: 'Feel hot'}, {spec: 'Arm-processor'}], 'value': 200},

				{'name': 'iDrink Nokia', 'imageSrc': 'http://thefoxisblack.com/blogimages//samsung-display-centric-world.jpg', specifications: [{spec: 'Smakinterface'}, {spec: 'Tungstyrd'}, {spec: 'No more cool-aid'}], 'value': 100}
				]
			}
		}
	}
</script>