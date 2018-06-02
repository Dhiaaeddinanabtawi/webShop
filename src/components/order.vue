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
<<<<<<< HEAD
        <input type="submit" value="Skicka" @click="showMessage">
=======
        <input type="submit" value="Skicka" @click.prevent="showMessage">
>>>>>>> 96d7b68870c8f8da3a904de33fe3d1ea0cfa5f32
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
                this.formVisible = ! this.formVisible;
            },
            showMessage: function(){
                this.setConfirmationMsg(true)
            }
        }
    }
</script>