<template>
<v-card class="ma-3" width="400" height="100%" flat>
        <v-card-subtitle>
            {{ title }}
        </v-card-subtitle>

        <v-layout wrap class="pa-2" style="width:100%;">
            <v-card v-if="originalImg==null" height="400" width="100%" style="display:flex;justify-content:center;align-items:center;">
                <v-card-subtitle>Please upload your image</v-card-subtitle>
            </v-card>
            <img :src="originalImg" 
            style="border-radius: 10px;"
            v-else-if="$store.state.originalX > $store.state.originalY"
            width="100%" 
            :height="400*$store.state.originalY/$store.state.originalX" 
            />
            <img :src="originalImg"  
            style="border-radius: 10px;"
            v-else
            width="100%"
            height="100%" 
            />
        </v-layout>
    </v-card>
</template>
<script>
export default {
    props:[
        'originalImg', 'title'
    ],
    computed: {
        // originalImg(){
        //     return this.$store.state.originalImg;
        // }
        
    },
}
</script>