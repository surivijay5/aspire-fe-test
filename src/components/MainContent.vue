.<template>
  <div class="content-wrapper">
      <div class="menu-wrapper">
        <b-icon icon="menu-down" class="menu-wrapper-item" variant="success"></b-icon>
        <div class="name menu-wrapper-item">Card details</div>
      </div>
      <div>
        <b-icon class="item down-icon" icon="arrow-down-circle"></b-icon>
      </div>
  </div>
</template>

<script>
import {BIcon} from 'bootstrap-vue'
export default {
    name: 'MainContent',
    components:{
        BIcon
    }
}
</script>

<style scoped>
    .content-wrapper{
        display: flex;
        margin: 2em;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        padding: 2em;
        background-color: whitesmoke;
        justify-content: space-between;
    }

    .menu-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .name{
        margin-left: 5px;
    }
</style>