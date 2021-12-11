<template>
<div class="app-wrapper">
  <div id="app">
    <section class="main-header app-item">
      <main-header @addCard="addCard"></main-header>
    </section>
    <section class="cards-carousal app-item">
      <carousal :cards="cards" @deleteCard="deleteCard" @toggleFreeze="toggleFreeze"></carousal>
    </section>
    <section class="main-content app-item">
      <main-content></main-content>
    </section>
    <section class="credit-card-footer">
      <main-footer></main-footer>
    </section>
  </div>
</div>
</template>

<script>
import MainHeader from './components/Header.vue'
import Carousal from './components/Carousal.vue'
import MainContent from './components/MainContent.vue'
import MainFooter from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    MainHeader,
    Carousal,
    MainFooter,
    MainContent
    // BButton
  },
  methods:{
    addCard(data){
        const ids = this.cards.map( p => p.id)
        const maxId = ids.length > 0 ? Math.max(...ids) : -1
        data["id"] = maxId + 1
        this.cards.push(data)
        console.log(this.cards)
    },
    deleteCard(cardId){
      const index = this.cards.findIndex(p => p.id == cardId)
      this.cards.splice(index,1)
    },
    toggleFreeze(index){
      this.cards[index].isFrozen = !this.cards[index].isFrozen
    }
  },
  data(){
    return {
      cards: [
          {
              "id": 0,
              "name": "Vijay Sai Krishna",
              "cardNo": "5431111111111111",
              "expiry": "12/12",
              "cvv": "111",
              "isFrozen" : false
          },
          {
              "id": 1,
              "name": "Krishan",
              "cardNo": "4012888888881881",
              "expiry": "11/11",
              "cvv": "222",
              "isFrozen" : false
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

.app-wrapper{
  background-color: whitesmoke;
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

.cards-carousal{
  display: flex;
}

.credit-card-footer{
  /* margin-top: auto; */
}
.footer-wrapper{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  padding: 0.5rem;
  box-shadow: 0px 0px 5px #888, 0px -2px 3px #888;
}


.action{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #597792;
  cursor: pointer;
}

.text{
  font-size: x-small;
  text-align: center;
}

.main-content{
  /* padding: 2.75em 0em; */
  flex-grow: 1;
  background-color: white;
}

@media only screen and (max-width: 1200px) {
#app{
  width: 100vw;
  margin: 0;
}
.main-content{
  flex-grow: 0;
}
}
</style>
