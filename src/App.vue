<template>
  <div id="app">
    <section class="header"></section>
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
    }
  },
  data(){
    return {
      cards: []
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
  width : 40vw;
  margin: 0 30vw;
  background-color: rgb(12, 55, 90);
}

section{
  display: flex;
  margin: 1em;
}

.new-card{
  justify-content: end;
}

@media only screen and (max-width: 600px) {
#app{
  width: 100vw;
  margin: 0;
}
}
</style>
