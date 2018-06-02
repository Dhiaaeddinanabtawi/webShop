<template>
	<form id="order" v-bind:class="{showForm:formVisible}">
        <button id="open-order" v-on:click="showForm">Beställ</button>
        <input type="text" id="first-name" placeholder="Förnamn">
        <input type="text" id="last-name" placeholder="Efternamn">
        <input type="tel" id="phone" placeholder="Telefonnr">
        <input type="email" id="email" placeholder="E-postadress">
        <input type="text" id="street"  placeholder="Gatuadress">  
        <input type="text" id="zip"  placeholder="Postnr">  
        <input type="text" id="city"  placeholder="Ort">  
        <input type="submit" value="Skicka" @click.prevent="showMessage">
      </form>
</template>

<script>
    import { mapMutations } from 'vuex'
	export default {
		'name': 'order', 
        data() {
            return {
                formVisible: false
            }
        },
        methods: {
            ...mapMutations(['setConfirmationMsg']),
            showForm: function(event){
                event.preventDefault();
                this.formVisible = ! this.formVisible;
            },
            showMessage: function(){
                this.setConfirmationMsg(true)
            }
        }
    }
</script>