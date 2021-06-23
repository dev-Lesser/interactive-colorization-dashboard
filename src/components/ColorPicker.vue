<template>

    <div>


        <Chrome v-model="colors"></Chrome>
        <swatches v-model="colors" ></swatches>
        <v-progress-circular
            indeterminate
            color="black"
            v-if='loading'
            ></v-progress-circular>
 

    </div>


</template>
<script>
import {Chrome, Swatches} from 'vue-color'
export default {
    components:{
        Chrome, Swatches
    },
    data() {
        return{
            colors:{
                hex: '#194d33',

            }
        }
        
    },
    computed:{
      loading(){
            return this.$store.state.loading;
        },
    }
}
</script>