<template>
<div style="display:flex;align-items:center;">
    <v-file-input
    v-model="selected"
    @change="preview"
    accept="image/*"
    label="Upload Image file"
    id="image"
  ></v-file-input>
  
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
            this.$store.state.selectedFile= null;
            this.$store.state.originalImg= null,
            this.$store.state.convertedImg= null,
            this.$store.state.grayImg= null,
            this.$store.state.loading = true;
            if (this.selected ===undefined || this.selected === null){
                this.$store.state.loading = false;
                return false
            }
            await axios.get('http://localhost:8000/api/v1/clear')
            
            var form = new FormData();
            form.append('file', this.selected);
            var res = await axios.post('http://localhost:8000/api/v1/colorize', form,)

            this.$store.state.convertedImg = 'data:image/png;base64,'+res.data
            this.$store.state.loading = false;
            this.$store.state.editedImgList.push('data:image/png;base64,'+res.data)
            this.$store.state.showDrawer = true;
            
            this.$store.state.originalImg= URL.createObjectURL(this.selected)
            var img = new Image()
            let self = this;
            img.onload = function(){
                self.$store.state.originalX = img.width;
                self.$store.state.originalY = img.height;
            };
            img.src = this.$store.state.originalImg
        },
     
    }
}
</script>