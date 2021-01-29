<template>
    <div id="detail">
        <nav-bar class="detail-nav-bar">
            <template v-slot:left >
                <img src="../../assets/img/common/back.svg" @click="btnBack">
            </template>
            <template v-slot:center>
                <tab-control :titles=titles></tab-control>
            </template>
        </nav-bar>
        <yd-slider autoplay="3000" class="ydslider">
            <yd-slider-item v-for="(item,index) in detailResults.detailSwipperImg" :key="index">
                    <img :src="item">
            </yd-slider-item>
        </yd-slider>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabControl from "../../components/content/tabcontrol/TabControl"

    import {getDetail} from "../../network/Detail";

    export default {
        name: "Detail",
        data(){
          return{
              iid:null,
              detailResults:{
                  detailSwipperImg:[]
              },
              titles:['商品','参数','评价','推荐']
          }
        },
        created() {
            this.iid = this.$route.params.iid
            console.log(this.iid);
            getDetail(this.iid).then(res => {
                this.detailResults.detailSwipperImg = res.data.result.itemInfo.topImages
            })
        },
        components:{
            NavBar,
            TabControl
        },
        methods:{
            btnBack(){
                this.$router.back()
            }
        }
    }
</script>

<style scoped>
    .detail-nav-bar{
        background-color: white;
        color: black;
        height: 47px;
        line-height: 47px;
    }
    .ydslider{
        height: 300px;
        overflow: hidden;
    }
</style>