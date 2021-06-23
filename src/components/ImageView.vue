<template>
<v-navigation-drawer
    v-model="$store.state.showDrawer"
    app
    right
    hide-overlay
    dark

    >
    <div style="color:white;font-size:20px;padding:20px;">My files</div>
    <div v-for="img,key in editedImgList" :key="key">
    <v-card class="ma-3" >
        <v-card-subtitle>Converted Img {{key+1}}</v-card-subtitle>
        
        <v-img :src='img' />
    
    </v-card>
    <v-divider />
    </div>


</v-navigation-drawer>
</template>
<script>
export default {
    computed:{
        showDrawer(){
            return this.$store.state.showDrawer;
        },
        convertedImg(){
            return this.$store.state.convertedImg;
        },
        editedImgList(){
            return this.$store.state.editedImgList;
        }
    }
}
</script>