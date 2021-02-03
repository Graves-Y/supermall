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
        <scroll class="content" @scroll="controlScroll" ref="scroll" :probe-type="3">
            <yd-slider autoplay="3000" class="ydslider">
                <yd-slider-item v-for="(item,index) in detailResults.detailSwipperImg" :key="index">
                    <img :src="item">
                </yd-slider-item>
            </yd-slider>
            <detail-base-info :goods="detailResults.goodsInfo"/>
            <detail-shop-info :shop="detailResults.shopInfo"/>
            <detail-goods-info :detail-info="detailResults.detailInfo"/>
            <detail-param-info :paramInfo="detailResults.paramInfo"/>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop" @imagesLoad="imagesLoad"/>
        <tab-bar class="detail-tab-bar">
            <tab-bar-item active-color="hotpink" path="">
                <template v-slot:icon-text>客服</template>
            </tab-bar-item>
            <tab-bar-item active-color="black" path="">
                <template v-slot:icon-text>店铺</template>
            </tab-bar-item>
            <tab-bar-item active-color="black" path="">
                <template v-slot:icon-text>收藏</template>
            </tab-bar-item>
            <tab-bar-item active-color="white" path="">
                <template v-slot:icon-text>加入购物车</template>
            </tab-bar-item>
            <tab-bar-item active-color="white" path="">
                <template v-slot:icon-text>购买</template>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabControl from "../../components/content/tabcontrol/TabControl"
    import DetailShopInfo from "./detailChildren/DetailShopInfo";
    import DetailBaseInfo from "./detailChildren/DetailBaseInfo";
    import DetailParamInfo from "./detailChildren/DetailParamInfo";
    import TabBar from "../../components/common/tabbar/TabBar";
    import TabBarItem from "../../components/common/tabbar/TabBarItem";

    import DetailGoodsInfo from "./detailChildren/DetailGoodsInfo";

    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/common/backtop/BackTop";

    import {getDetail} from "../../network/Detail";

    import {Goods ,Shop,GoodsParam} from "../../network/Detail";

    export default {
        name: "Detail",
        data(){
          return{
              iid:null,
              detailResults:{
                  detailSwipperImg:[],
                  shopInfo:{},
                  goodsInfo:{},
                  detailInfo:{},
                  paramInfo:{}
              },
              titles:['商品','参数','评价','推荐'],
              isShowBackTop:false
          }
        },
        created() {
            this.iid = this.$route.params.iid
            console.log(this.iid);
            getDetail(this.iid).then(res => {
                this.detailResults.detailSwipperImg = res.data.result.itemInfo.topImages
                console.log(res.data.result);
                this.detailResults.shopInfo = new Shop(res.data.result.shopInfo)
                this.detailResults.goodsInfo = new Goods(
                    res.data.result.itemInfo,
                    res.data.result.columns,
                    res.data.result.shopInfo.services)
                this.detailResults.detailInfo = res.data.result.detailInfo
                this.detailResults.paramInfo = new GoodsParam(
                    res.data.result.itemParams.info,
                    res.data.result.itemParams.rule)
            })
        },
        components:{
            TabBar,
            NavBar,
            TabBarItem,
            TabControl,
            DetailShopInfo,
            DetailBaseInfo,
            Scroll,
            DetailGoodsInfo,
            BackTop,
            DetailParamInfo
        },
        methods:{
            btnBack(){
                this.$router.back()
            },
            backClick(){
                this.$refs.scroll.scroll.scrollTo(0,0,500)
            },
            controlScroll(position){
                this.isShowBackTop = position.y < -1000
            },
            imagesLoad(){
                this.refs.scroll.refresh()
            }
        }
    }
</script>

<style scoped>
    .detail-tab-bar{
        height: 66px;
    }
    .detail-tab-bar tab-bar-item {
        margin-top: 10px;
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
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
    #detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
        height: 100vh;
    }
</style>