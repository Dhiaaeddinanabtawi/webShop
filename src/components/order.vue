<template>
	<form id="order" v-bind:class="{showForm:formVisible}">
        <button id="open-order" @click.prevent="showForm">Beställ</button>
        <input type="text" id="first-name" placeholder="Förnamn">
        <input type="text" id="last-name" placeholder="Efternamn">
        <input type="tel" id="phone" placeholder="Telefonnr">
        <input type="email" id="email" placeholder="E-postadress">
        <input type="text" id="street"  placeholder="Gatuadress">  
        <input type="text" id="zip"  placeholder="Postnr">  
        <input type="text" id="city"  placeholder="Ort">  
        <input type="submit" value="Skicka" @click="showMessage">
      </form>
</template>

<script>
	export default {
		'name': 'order', 
        data() {
            return {
                formVisible: false
            }
        },
        methods: {
            showForm: function(event){
                this.formVisible = ! this.formVisible;
            },
            showMessage: function(){
                console.log('Din beställning är mottagen')
            }
        }
    }
</script>