<template>
    <v-container fluid grid-list-md>
        <v-layout wrap>
            <v-flex xs12 sm3 md3>
              <select-file />
            </v-flex>
        </v-layout>

          <v-card-title>Interactive Colorization</v-card-title>
          <v-divider/>

        <v-layout wrap style="display:flex;justify-content:center;">
            <v-flex xs12 sm3 md3>
              <image-preview />
            </v-flex>
            <v-flex xs12 sm3 md3>
              <grey-image-preview />
            </v-flex>
            <v-flex xs12 sm9 md3>
              
              <color-picker />
            </v-flex>
            
        </v-layout>
        <image-view />

      </v-container>
</template>
<script>
import SelectFile from '@/components/SelectFile'
import ImagePreview from '@/components/ImagePreview'
import GreyImagePreview from '@/components/GreyImagePreview'
import ImageView from '@/components/ImageView'
import ColorPicker from '@/components/ColorPicker'

export default {
    components:{
        SelectFile,
        GreyImagePreview,
        ImagePreview,
        ImageView,
        ColorPicker


    },
    setup() {
        
    },
    
}
</script>