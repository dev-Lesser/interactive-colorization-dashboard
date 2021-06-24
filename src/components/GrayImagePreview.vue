<template>
    <v-card class="ma-3" id="container" width="400" height="100%" flat>
        <v-card-subtitle >
            Colorization
            <v-spacer/>
            <!-- <v-btn color="red" @click="addMarker(cnt)">Add</v-btn> -->
            
        </v-card-subtitle>
        <!-- <div  v-for="i,key in $store.state.markers" :key="key"> -->
                
        
        
        <!-- </div> -->
        <v-layout wrap class="pa-2" style="width:100%">
            <div id="palette" style="z-index:3;">
            
            </div>
            <v-card v-if="originalImg===null" height="400" width="100%" style="display:flex;justify-content:center;align-items:center;">
                <v-card-subtitle>Please upload your image</v-card-subtitle>
            </v-card>
            <img :src="originalImg"     
            v-else-if="$store.state.originalX > $store.state.originalY"
             class="gray-img"
            width="100%" 
            id="img"
            :height="400*$store.state.originalY/$store.state.originalX" 
            />
            <img :src="originalImg" 
                class="gray-img"
                id="img"
                v-else
                width="100%"
                height="100%" 
                />
                    
        </v-layout>
        <v-layout style="justify-content:center;display:flex;">
            <v-btn 
            :color="setColor" style="z-index:6;" id="color-btn" 
            block
            dark
            small @click="userColorize">Colorize!</v-btn>
        </v-layout>
    </v-card>
</template>
<script>
import axios from 'axios'
    export default {
        data() {
            return {
                dragItem: null,
                container: null,
                active : false,
                currentX: null,
                currentY: null,
                initialX: null,
                initialY: null,
                xOffset: 0,
                yOffset: 0,
                cnt: 0
            }
        },
        computed: {
            originalImg() {
                return this.$store.state.originalImg;
            },
            setColor(){
                return this.$store.state.setColor;
            },
            timestamp(){
                return this.$store.state.timestamp;
            }
            
        },
        mounted() {
            this.dragItem = document.querySelector("#palette")
   

            this.container = document.querySelector("#container")
            this.container.addEventListener("touchstart", this.dragStart, false);
            this.container.addEventListener("touchend", this.dragEnd, false);
            this.container.addEventListener("touchmove", this.drag, false);
            this.container.addEventListener("mousedown", this.dragStart, false);
            this.container.addEventListener("mouseup", this.dragEnd, false);
            this.container.addEventListener("mousemove", this.drag, false);
        
        },
        methods: {
            async userColorize(){
                if (this.originalImg == null){
                    alert('please upload image file ')
                    return
                }
                else if (this.initialX==null || this.initialY==null ){
                    alert('please move points ')
                    return 
                }
                else if (this.setColor==null ){
                    alert('please set color from palette ')
                    return 
                }
                
                var divHeight = document.getElementById('img').clientHeight;
                var divWidth = document.getElementById('img').clientWidth;
                this.$store.state.loading=true;
                var form = new FormData();
                form.append('pointsX', parseInt(this.initialY*256 / divHeight));
                form.append('pointsY', parseInt(this.initialX*256 / divWidth));
                form.append('colors', this.setColor);
        
                var res = await axios.post(`http://localhost:8000/api/v1/colorize/point?timestamp=${this.timestamp}`, form,)
                this.$store.state.convertedImg = 'data:image/png;base64,'+res.data
                this.$store.state.loading = false;
                if (this.$store.state.editedImgList.length>=6){
                    this.$store.state.editedImgList.shift()
                }
                this.$store.state.editedImgList.push('data:image/png;base64,'+res.data)


            },
            dragStart(e) {
                if (e.type === "touchstart") {
                    this.initialX = e.touches[0].clientX - this.xOffset;
                    this.initialY = e.touches[0].clientY - this.yOffset;
                } else {
                    this.initialX = e.clientX - this.xOffset;
                    this.initialY = e.clientY - this.yOffset;
                }
                if (e.target === this.dragItem) {
                    this.active = true;
                }
            },
            dragEnd() {
                this.initialX = this.currentX;
                this.initialY = this.currentY;
                this.active = false;
            },
            drag(e) {
                if (this.active) {
                    e.preventDefault();
                    if (e.type === "touchmove") {
                        this.currentX = e.touches[0].clientX - this.initialX;
                        this.currentY = e.touches[0].clientY - this.initialY;
                    } else {
                        this.currentX = e.clientX - this.initialX;
                        this.currentY = e.clientY - this.initialY;
                    }
                    this.xOffset = this.currentX;
                    this.yOffset = this.currentY;
                    this.setTranslate(this.currentX, this.currentY, this.dragItem);
                }
            },
            setTranslate(xPos, yPos, el) {
                el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
            }
        }
    }
</script>
<style scoped>

    .gray-img {
        filter: saturate(0.2);
        border-radius: 10px;
    }

    @keyframes blink {
    from {
        opacity: 1;
    }
    to {
        opacity: 0.5;
    }
    }
    #palette {
        animation-duration: 500ms;
        animation-name: blink;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      width: 35px;
      height: 35px;
      position: absolute;
      border: 2px solid rgba(136, 136, 136, .5);
      background-color: red;
      border-radius: 50%;
      touch-action: none;
      user-select: none;
    }
   #palette:active {
      background-color: rgba(168, 218, 220, 1.00);
    }
    #palette:hover {
      cursor: pointer;
      border-width: 5px;
    }
</style>