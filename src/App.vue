<template>
  <div id="app">
    <section class="header">
      aspire
    </section>
    <section class="new-card">
      <new-card @addCard="addCard"></new-card>
    </section>
    <section class="cards-carousal">
      <carousal :cards="cards"></carousal>
    </section>
  </div>
</template>

<script>
import NewCard from './components/NewCard.vue'
import Carousal from './components/Carousal.vue'

export default {
  name: 'App',
  components: {
    NewCard,
    Carousal
  },
  methods:{
    addCard(data){
        this.cards.push(data)
        console.log(this.cards)
    }
  },
  data(){
    return {
      cards: [
          {
              "name": "Vijay Sai Krishna",
              "cardNo": "5431111111111111",
              "expiry": "12/12",
              "cvv": "111"
          },
          {
              "name": "Krishan",
              "cardNo": "4012888888881881",
              "expiry": "11/11",
              "cvv": "222"
          }
      ]
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  border: 0;
}

#app{
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  width : 30vw;
  margin: 0 35vw;
  background-color: rgb(12, 55, 90);
}

.new-card{
  display:flex;
  justify-content: flex-end;
  margin: 1em;
}

.cards-carousal{
  display: flex;
  margin: 0px 1.5em;
  height: 50%;
}

@media only screen and (max-width: 1200px) {
#app{
  width: 100vw;
  margin: 0;
}
}
</style>
