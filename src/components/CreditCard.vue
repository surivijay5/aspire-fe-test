<template>
<div class="wrapper" v-if="cardCopy">
    <button size="sm" class="show-btn" @click="showCardNo = !showCardNo">
      <b-icon icon="eye" aria-hidden="true"></b-icon> {{showCardNo ? "Hide" : "Show"}} card number
    </button>
  <section :class="{'credit-card':true, 'isFrozen' : cardCopy.isFrozen }">
      <div class="header mb-0" > <img :src="imgSrc" :class="{'isFrozenImg' : cardCopy.isFrozen }"/>aspire</div>
      <div class="name">{{cardCopy.name}}</div>
      <div class="number">{{cardNo | VMask('XXXX XXXX XXXX XXXX') }}</div>
      <div class="more_info_wrapper">
          <section class="thru">Thru:&nbsp; {{cardCopy.expiry}}</section>
          <section class="cvv">CVV:&nbsp; * * *</section>
      </div>
      <div class="footer">
          {{getCardType(cardCopy.cardNo)}}
      </div>
  </section>
</div>
<div v-else>
    <section class="credit-card d-flex justify-content-center align-items-center" >
        <div> No Cards Available. Add a new Card</div>
    </section>
</div>
</template>

<script>
// import {BButton} from 'bootstrap-vue'
import creditCardType from '../utils/creditCardType.js'

export default {
    name: 'HelloWorld',
    props: ['card'],
    components:{
        // BButton
    },
    computed:{
        cardNo(){
            let cardNo = this.card.cardNo
            if(this.showCardNo){
                return cardNo
            }
            return '************' + cardNo.substring(12,16)
        },
        cardCopy(){
            if(!this.card) return null
            return JSON.parse(JSON.stringify(this.card))
        },
        imgSrc(){
            var images = require.context('../assets/', false, /\.png$/)
            let imageSrc = this.card.isFrozen ? "logo-frozen.png" : "logo-white.png"
            return images('./' + imageSrc)
        }
    },
    methods:{
        getCardType(no){
            return creditCardType(no)
        },
    },
    data(){
        return {
            showCardNo : false
        }
    }
}
</script>

<style scoped>
    .credit-card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #01d167;
        margin: 0 1rem;
        height: 16rem;
        border-radius: 10px;
        color: white;
    }

    .wrapper{
        display: flex;
        flex-direction: column;
    }
    .more_info_wrapper{
        display: flex;
        align-items: flex-start;
        margin: 1rem;
    }

    .more_info_wrapper > section{
        margin: 0 1rem;
    }

    .footer,.header{
        align-self: flex-end;
        margin: 1rem;
    }

    .name{
        font-size: 1.5rem;
        letter-spacing: 1px;
        margin: 1rem 2rem;
    }

    .number{
        margin: 0 2rem;
         word-spacing: 20px;
         letter-spacing: 8px;
    }
    .show-btn{
    /* width: rem;; */
        outline: none;
        align-self: flex-end;
        background-color: white;
        color: #01d167;
        margin: 0 1rem;
        font-weight: bold;
        font-size: small;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    .show-btn:hover {
        filter: brightness(120%);
        background-color: white;
        color: #01d167;
    }

    .isFrozen{
        background-color: #01d16780;
        color: rgb(255, 255, 255,0.5);
    }

    .isFrozenImg{
        opacity: 0.2;
    }

    @media only screen and (max-width: 800px) {
    .number{
        margin: 0 2rem;
         word-spacing: 5px;
         letter-spacing: 2px;
    }
}

</style>