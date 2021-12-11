<template>
    <section class="actions-wrapper">
        <div class = "action">
          <b-icon icon="flower2" font-scale="1.5" style="color: #3b64b6;" @click="toggleFreeze"></b-icon> <div class="text">{{isFrozen ? "UnFreeze":"Freeze"}}<br />card </div>
        </div>
          <div class = "action">
          <img src="../assets/speedometer.png" style="color: #3b64b6;" /> <div class="text">Set Speed <br/> limit</div>
        </div>
          <div class = "action">
          <b-icon icon="google" font-scale="1.5" style="color: #3b64b6;" ></b-icon> <div class="text">Add to<br /> Gpay</div>
        </div>
          <div class = "action">
         <img src="https://img.icons8.com/material-two-tone/24/000000/synchronize.png"  style="color: #3b64b6;"/><div class="text">Replace <br /> card</div>
        </div>
            <div class = "action">
          <b-icon icon="trash-fill" font-scale="1.5"  style="color: #3b64b6;" @click="deleteCard"></b-icon> <div class="text">Cancel <br /> card</div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CardActions',
    props:{
      isFrozen: {
        default: false,
        type: Boolean
      }
    },
    methods:{
      deleteCard(){
        this.boxOne = ''
        this.$bvModal.msgBoxConfirm('Are you sure?')
          .then(value => {
            this.$emit('deleteCard', value)
          })
          .catch(err => {
            console.log(err)
          })
      },
      toggleFreeze(){
        this.$emit('toggleFreeze')
      }
    }
}
</script>

<style scoped>

.actions-wrapper{
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #edf3ff;
  padding: 0.5rem;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

</style>