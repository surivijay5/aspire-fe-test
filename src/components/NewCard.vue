<template>
  <div class="new-card">
    <button class="new-card-btn" @click="showModal">
      <b-icon icon="plus-circle-fill" aria-hidden="true"></b-icon> &nbsp;New card
    </button>
    <b-modal ref="my-modal" title="Add New Card">
      <div class="form">
        <div class="form-group" v-for="(info,index) in cardDetailsCopy" :key="index">
          <label :for="info.key">{{info.description}}</label>
          <b-form-datepicker
            v-if="info.type == 'datepicker'"
            :type="info.type"
            v-model="info.bindedValue"
            v-bind:class="{'form-control':true, 'is-invalid' : info.isBlurred && !validate(index) }"
            v-on:blur="info.isBlurred = true"></b-form-datepicker>
          <b-form-input
            v-else-if="info.type == 'expiry'"
            type="text"
            v-model="info.bindedValue"
            v-bind:class="{'form-control':true, 'is-invalid' : info.isBlurred && !validate(index) }"
            v-on:blur="info.isBlurred = true"
            :formatter="formatExpiry"
            />
          <b-form-input
            v-else
            :type="info.type"
            v-model="info.bindedValue"
            v-bind:class="{'form-control':true, 'is-invalid' : info.isBlurred && !validate(index) }"
            v-on:blur="info.isBlurred = true" />
          <div class="invalid-feedback">{{info.feedBack}}</div>
        </div>
          <b-alert :show="showError" variant="danger" class="my-2">{{errorMessage}}</b-alert>
      </div>
      <template #modal-footer>
          <b-button variant="success" size="sm" @click="addCard()"> Add Card </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>

import {BModal, BFormDatepicker, BFormInput, BAlert} from 'bootstrap-vue'

export default {
  name: 'NewCard',
  props: {
    msg: String
  },
  components:{
    // BButton,
    BAlert,
    BModal,
    BFormDatepicker,
    BFormInput
  },
  computed:{
    showError(){
      return this.errorMessage != ""
    }
  },
  methods: {
    resetData(){
      this.cardDetailsCopy = JSON.parse(JSON.stringify(this.cardDetails))
    },
    showModal() {
      this.resetData()
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.resetData()
      this.$refs['my-modal'].hide()
    },
    formatExpiry(value) {
      let temp = value.replace(/\//g,"")
      if (!temp || temp.trim() == "" || temp.length <=2) return temp
      return `${temp.substring(0,2)}/${temp.substring(2,4)}`
    },
    validateCVV(data){
      return data.length == 3
    },
    validateCardNo(data){
      return data.length == 16
    },
    validate(index){
      const info = this.cardDetailsCopy[index]
      if(info.bindedValue.trim() == "") return false
      else if(info.id == 'cvv') return this.validateCVV(info.bindedValue)
      else if (info.id == 'cardNo') return this.validateCardNo(info.bindedValue)
      return true
    },
    addCard(){
      const validatedArr = this.cardDetailsCopy.map((_, index) => this.validate(index))
      if(validatedArr.some(p => !p)){
        this.errorMessage = "please enter all details"
        return
      }
      const newcard = this.cardDetailsCopy.reduce((a,c) => { a[c.id] = c.bindedValue; return a }, {})
      this.resetData()
      this.hideModal()
      this.$emit('addCard', newcard)
    }
  },
  data(){
      return {
          email : "",
          emailBlured : false,
          valid : false,
          submitted : false,
          errorMessage: "",
          cardDetails: [{
            id : 'name',
            description : "Name on the Card",
            feedBack: 'A Valid Name is required',
            type: 'text',
            bindedValue : '',
            isBlurred: false
          },{
            id : 'cardNo',
            description : "Card Number",
            feedBack: 'A Valid Card Number is required',
            type: 'number',
            bindedValue : '',
            isBlurred: false
          },{
            id : 'expiry',
            description : "Expiration (mm/yy)",
            feedBack: 'A valid expiration date is required',
            type: 'expiry',
            bindedValue : '',
            isBlurred: false
          },{
            id : 'cvv',
            type: 'password',
            feedBack: 'A valid CVV is required',
            description : "CVV",
            bindedValue : '',
            isBlurred: false
          }],
          cardDetailsCopy : []
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  height: 100%;
}
.new-card-btn{
  outline: none;
  background-color: inherit;
  color:rgb(63, 178, 217);
  cursor: pointer;
}

.new-card-btn:focus,
.new-card-btn:hover {
  filter: brightness(120%);
}
</style>
