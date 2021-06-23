<template>
<v-layout>
    <v-file-input
    v-model="selected"
    accept="image/*"
    label="Upload Image file"
  ></v-file-input>
  <v-btn @click="uploadFile">predict</v-btn>
</v-layout>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            selected: null
        }
    },
    mounted(){
    },
    computed:{
        selectedFile(){
            return this.$store.state.selectedFile;
        }
    },
    watch:{
        selected(){
            console.log(this.selectedFile)
            this.$store.state.selectedFile = this.selected;
        }
    },
    methods:{
        async uploadFile(){
            var form = new FormData();
            form.append('file', this.selected);
            console.log(form)
            var res = await axios.post('http://localhost:8000/api/v1/colorize', form, {'Content-Type':'multipart/form-data'})
            console.log(res.data)
        }
    }
}
</script>