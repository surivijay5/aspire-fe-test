<template>
 <div class="carousal w-100">
    <div>
      <credit-card :card="cards[slide]"></credit-card>
    </div>
    <div class="nav-indicator">
      <div v-for="(card,index) in cards" :key="index" :class="{ active: index == slide, 'indicator': true }" @click="selectSlide(index)"></div>
    </div>
    <section class="card-actions app-item">
      <card-actions :isFrozen="isFrozen" @toggleFreeze="toggleFreeze" @deleteCard="deleteCard"></card-actions>
    </section>
</div>
</template>

<script>
import CreditCard from './CreditCard.vue'
import CardActions from './CardActions.vue'

export default {
  name: 'Carousal',
  props: ['cards'],
  components:{
      // BCarousel,
      // BCarouselSlide,
      CreditCard,
      CardActions,
  },
  computed:{
    isFrozen(){
      return this.cards[this.slide]?.isFrozen
    }
  },
  methods: {
      selectSlide(index){
        this.slide = index
      },
      deleteCard(isToBeDeleted){
        if(isToBeDeleted){
          this.$emit('deleteCard', this.cards[this.slide]["id"])
          this.slide= 0
        }
      },
      toggleFreeze(){
        this.$emit('toggleFreeze', this.slide)
      }
    },
  data() {
      return {
        slide: 0
      }
    },
}
</script>

<style scoped>
  .nav-indicator {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .indicator {
    width: 10px;
    height: 10px;
    background-color: #0b445c;
    border-radius:  50%;
    margin: 0 10px;
    cursor: pointer;
  }
  .indicator.active {
    background-color: #01d167;
    width: 15px;
    height: 10px;
    border-radius:  30px;
  }

</style>