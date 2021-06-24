<template>
  <v-container fluid grid-list-md >
    <v-layout wrap style="display:flex;justify-content:center;align-items:center;">
      <v-flex xs12 sm6 md4>
        <select-file />
      </v-flex>
        <v-flex xs12 sm6 md8  style="display:flex;justify-content:center;">
          <color-picker />
        </v-flex>
    </v-layout>
    <v-progress-linear
      indeterminate
      color="black"
      v-if='loading'
      ></v-progress-linear>
    <v-divider/>
    <v-layout wrap style="display:flex;justify-content:center;">
      <v-flex xs12 sm12 md3>
        <image-preview :originalImg="originalImg" :title="'Original'"/>
      </v-flex>
      <v-flex xs12 sm12 md3>
        <gray-image-preview />
      </v-flex>
      
      <v-flex xs12 sm12 md3>
        <image-preview :originalImg="convertedImg" :title="'Converted Image'"/>
      </v-flex>
    </v-layout>
    <v-divider style="z-index: 3;position: relative;"/>
    <v-layout style="display:flex;justify-content:center;">
      <v-btn color="blue-grey darken-3" dark small @click.stop="$store.state.showDrawer = !$store.state.showDrawer">
        <v-icon small class="mr-3" color="red">mdi-triangle</v-icon> Check your files</v-btn>
    </v-layout>
    <image-view />
  </v-container>
</template>
<script>
  import SelectFile from '@/components/SelectFile'
  import ImagePreview from '@/components/ImagePreview'
  import GrayImagePreview from '@/components/GrayImagePreview'
  import ImageView from '@/components/ImageView'
  import ColorPicker from '@/components/ColorPicker'
  export default {
    components: {
      SelectFile,
      GrayImagePreview,
      ImagePreview,
      ImageView,
      ColorPicker
    },
    setup() {
    },
    computed:{
      loading(){
            return this.$store.state.loading;
        },
      originalImg(){
        return this.$store.state.originalImg;
      },
      convertedImg(){
        return this.$store.state.convertedImg;
      }
    }
  }
</script>