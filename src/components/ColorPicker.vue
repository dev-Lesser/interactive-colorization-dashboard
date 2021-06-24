<template>
    <div  width="320">
        <v-card-subtitle>
            ** Choose your custom color **
        </v-card-subtitle>
        
        <v-swatches v-model="color" inline></v-swatches>
        
        
    </div>
</template>
<script>
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'
export default {
    components:{
         VSwatches 
    },
    data() {
        return{
            color: null,
        }
        
    },
    computed:{
      
    },

    watch:{
        color: function(){
            document.getElementById("palette").style.background = this.color;
            this.$store.state.setColor = this.color;
        }
    }
}
</script>
<style scoped>
#palette{
    height: 100%;
    overflow-y: hidden;
}
</style>