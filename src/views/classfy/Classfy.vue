<template>
    <div id="classify">
<!--        <nav-bar class="home-nav">-->
<!--            <template v-slot:center>分类</template>-->
<!--        </nav-bar>-->
<!--        <div class="wrapper">-->
<!--        </div>-->
        <van-checkbox v-model="checked">复选框</van-checkbox>
    </div>
</template>

<script>
    // import NavBar from "../../components/common/navbar/NavBar";
    // import BScroll from "@better-scroll/core"
    import Vue from 'vue'
    import { Checkbox, CheckboxGroup } from 'vant';
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    export default {
        name: "Classfy",
        data(){
          return{
              // scroll:null
              checked:true,
              data:{
                  'hhh':'xxx'
              },
              array:[
                  '1','12','3','4'
              ]
          }
        },
        components:{
            // NavBar
        },
        mounted() {
            // this.scroll = new BScroll('.wrapper',{})
        }
    }
</script>

<style scoped>
    .wrapper{
        height: 150px;
        background-color: red;
        overflow: scroll;
    }
</style>