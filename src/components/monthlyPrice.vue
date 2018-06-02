<template>
	<div class="price">
          <div class="numbers n-100">
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <div class="numbers n-10">
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <div class="numbers n-1">
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
          <div class="numbers">         <div>&nbsp;</div>
          </div>
          <div class="numbers">         <div>kr</div>
          </div>
        </div>
</template>

<script>
  import {mapState} from 'vuex'
	export default {
	  'name': 'monthlyPrice',
    computed: {
      ...mapState({
        totalPrice: state => state.totalPrice
      })
    },
    watch: {
      totalPrice(newVal) {
        this.showPrice(newVal)
      }
    },
    methods: {
      showPrice: function(price) {
        $('#price').val(price);
        price = '' + price;
        price = price.split('').reverse();
        let p_100 = price[2]?price[2]:0;
        let p_10 = price[1]?price[1]:0;
        let p_1 = price[0];
        let f = 30;
        $('.n-100').animate({'margin-top': p_100 * -f});
        $('.n-10').animate({'margin-top': p_10 * -f});
        $('.n-1').animate({'margin-top': p_1 * -f}); 
      }
    }
  }
</script>