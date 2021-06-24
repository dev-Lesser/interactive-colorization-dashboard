<template>
    <v-bottom-sheet 
    v-model="$store.state.showDrawer" 
    scrollable 
    no-click-animation 
    hide-overlay 
    persistent 
    dark height="400" style="display:flex;">
        <v-card height="500">
            <v-btn class="mt-6" text color="error" @click="$store.state.showDrawer = !$store.state.showDrawer">
                close
            </v-btn>
            <v-card-text>
                <v-card-text style="color:white;font-size:15px;padding:10px;">My Files (Maximum = 6)</v-card-text>
                <v-layout wrap>
                    <v-flex xs12 sm3 md2 v-for="img,key in editedImgList" :key="key">
                        <v-card class="ma-3">
                            <v-card-subtitle>Converted Img {{key+1}}</v-card-subtitle>
                            <v-img :src='img' />
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
</template>
<script>
    export default {
        computed: {
            showDrawer() {
                return this.$store.state.showDrawer;
            },
            convertedImg() {
                return this.$store.state.convertedImg;
            },
            editedImgList() {
                return this.$store.state.editedImgList;
            }
        }
    }
</script>