<template>
	<form id="order">
        <button id="open-order">Beställ</button>
        <input type="hidden" name="price" id="price" value="0">
        <input type="text" id="first-name" placeholder="Förnamn">
        <input type="text" id="last-name" placeholder="Efternamn">
        <input type="tel" id="phone" placeholder="Telefonnr">
        <input type="email" id="email" placeholder="E-postadress">
        <input type="text" id="street"  placeholder="Gatuadress">  
        <input type="text" id="zip"  placeholder="Postnr">  
        <input type="text" id="city"  placeholder="Ort">  
        <input type="submit" value="Skicka">
      </form>
</template>

<script>
	export default {
		'name': 'order'
	}
</script>