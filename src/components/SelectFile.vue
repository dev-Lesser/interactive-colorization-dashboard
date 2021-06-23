<template>
<div>
    <v-file-input
    v-model="selected"
    @change="preview"
    accept="image/*"
    label="Upload Image file"
  ></v-file-input>
  <v-btn @click="uploadFile">predict</v-btn>
  
</div>
  
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            selected: null,
            image: null,
            url: null,
        }
    },
    mounted(){
    },
    computed:{
        previewFile(){
            return this.$store.state.originalImg;
        }
    },
    
    methods:{
        async preview(){
            this.$store.state.originalImg= URL.createObjectURL(this.selected)
        },
        async uploadFile(){
            this.$store.state.loading = true;
            var form = new FormData();
            form.append('file', this.selected);
            var res = await axios.post('http://localhost:8000/api/v1/colorize', form,)

            this.$store.state.convertedImg = 'data:image/png;base64,'+res.data
            this.$store.state.loading = false;
            this.$store.state.editedImgList.push('data:image/png;base64,'+res.data)
            this.$store.state.showDrawer = true;
        }
    }
}
</script>