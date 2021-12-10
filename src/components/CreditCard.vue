<template>
<div class="wrapper">
    <button size="sm" class="show-btn" @click="showCardNo = !showCardNo">
      <b-icon icon="eye" aria-hidden="true"></b-icon> {{showCardNo ? "Hide" : "Show"}} card number
    </button>
  <section class="credit-card">
      <div class="header mb-0" > <img src="../assets/logo-white.png" />aspire</div>
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
            return JSON.parse(JSON.stringify(this.card))
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

    @media only screen and (max-width: 800px) {
    .number{
        margin: 0 2rem;
         word-spacing: 5px;
         letter-spacing: 2px;
    }
}

</style>