<template>
<v-card class="ma-3">
    <v-card-title>
        Image Preview
    </v-card-title>
    <v-img :src="originalImg" ></v-img>
</v-card>
</template>
<script>
export default {
    computed: {
        originalImg(){
            return this.$store.state.originalImg;
        }
        
    },
}
</script>