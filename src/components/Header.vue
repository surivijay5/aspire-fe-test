<template>
  <section class="header-wrapper">
    <div class="img-wrapper">
        <img src="../assets/logo.png"  />
    </div>
    <div class="info-wrapper">
        <div>
            Account Balance<br/>
            <div style="display:flex;align-items:center;font-weight:bold;letter-spacing:1px">
                <img src="../assets/dollar.png"/>
                <div>3,000</div>
            </div>
        </div>
        <new-card @addCard="addCard" class="new-card-comp"></new-card>
    </div>
    <div class="tabs">
        <div class="flex-item active">My Debit Cards </div>
        <div class="flex-item"> All Company Cards </div>
    </div>
  </section>
</template>

<script>
import NewCard from './NewCard.vue'
export default {
    name: 'Header',
    components:{
        NewCard
    },
    methods:{
        addCard(data){
            this.$emit('addCard', data)
        }
    }
}
</script>

<style scoped>
.header-wrapper{
  display:flex;
  flex-direction: column;
  margin: 1rem;
}
.new-card-comp{
    align-self: flex-end;
}
.img-wrapper{
    text-align: right;
}
.header-wrapper{
    color: white;
}
.info-wrapper{
    display: flex;
    justify-content: space-between;
}
.tabs{
    display: flex;
    margin-top: 1em;
}
.flex-item{
    padding: 0 1em;
    cursor: pointer;
    filter: brightness(50%);
}

.active{
    filter: brightness(100%);
    font-weight: bold;
    border-bottom: 2px solid #1ca1cd;
}
</style>