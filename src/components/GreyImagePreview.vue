<template>
<v-card class="ma-3">
    <v-card-title>
        Colorization
    </v-card-title>
    <v-img :src="greylImg" ></v-img>
</v-card>
</template>
<script>
export default {
    computed: {
        greyImg(){
            return this.$store.state.greyImg;
        }
        
    },
}
</script>