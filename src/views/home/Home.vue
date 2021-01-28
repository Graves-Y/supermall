<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>首页</template>
        </nav-bar>
        <scroll class="content"
                ref="wrapper"
                :probe-type="3"
                @scroll="controlScroll"
                @pullingUp="loadMore"
                :pull-up-load="true">
            <yd-slider autoplay="3000">
                <yd-slider-item v-for="(item,index) in results.banners" :key="index">
                    <a :href="item.link">
                        <img :src="item.image">
                    </a>
                </yd-slider-item>
            </yd-slider>
            <div class="recommend">
                <div class="recommend-item" v-for="(item,index) in results.recommends" :key="index">
                    <a :href="item.link">
                        <img :src="item.image">
                    </a>
                    <div>{{item.title}}</div>
                </div>
            </div>
            <a href="https://act.mogujie.com/zzlx67">
                <img class="reimg" src="../../assets/img/home/recommend_bg.jpg">
            </a>
            <TabControl class="tab-control"
                    :titles="titles"
                    @tabControlClick="tabCClick"
                    ref="tabControl"/>
            <goods-list :goods="showGoods"/>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import GoodsList from "../../components/common/goods/GoodsList"
    import Scroll from "../../components/common/scroll/Scroll";
    import BackTop from "../../components/common/backtop/BackTop";

    import TabControl from "../../components/content/tabcontrol/TabControl";

    import {
        getHomeMutidata,
        getNpsData
    } from "../../network/Home";

    export default {
        name: "Home",
        data(){
            return {
                results:{
                    banners:[],
                    recommends:[],
                    dKeyWords:[],
                    keywords:[],
                    goods:{
                        pop:{page:0,list:[]},
                        sell:{page:0,list:[]},
                        new:{page:0,list:[]}
                    }
                },
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
                currentType:'pop',
                isShowBackTop:false,
                tabOffSetTop:0,
                saveY:0,
                titles:['流行','热销','新款']
            }
        },
        computed:{
          showGoods(){
              return this.results.goods[this.currentType].list
          }
        },
        created() {
            this.getHomeMutidata()
            this.getNPSData('pop')
            this.getNPSData('new')
            this.getNPSData('sell')


        },
        mounted() {
            //1.加载图片
            const refresh = this.debounce(this.$refs.wrapper.refresh,50)
            this.$bus.$on("imgItemLoad",() => {
                refresh()
            })
            //2.tabcontrol吸顶效果，获取tabcontrol的offsettop
            //所有的组件都有一个属性$el：用于获取组件中的元素
        },
        methods:{
            debounce(func,delay){
                let timer = null
                return function (...args) {
                    if(timer) clearTimeout(timer)
                    timer = setTimeout((
                        func.apply(this,args)
                    ),delay)
                }
            },
            tabCClick(index){
                switch (index) {
                    case 0:
                        this.currentType = "pop"
                        break
                    case 1:
                        this.currentType = "new"
                        break
                    case 2:
                        this.currentType = "sell"
                        break
                }
            },
            controlScroll(position){
                this.isShowBackTop = position.y < -1000
            },
            loadMore(){
                this.getNPSData(this.currentType)

            },
            getHomeMutidata(){
                getHomeMutidata().then(res => {
                    this.results.banners = res.data.data.banner.list
                    this.results.recommends = res.data.data.recommend.list
                    // console.log(res);
                })
            },
            getNPSData(type){
                const page = this.results.goods[type].page + 1
                getNpsData(type,page).then(res => {
                    this.results.goods[type].list.push(...res.data.data.list)
                    this.results.goods[type].page += 1
                    this.$refs.wrapper.scroll.finishPullUp()
                })
            },
            backClick(){
                this.$refs.wrapper.scroll.scrollTo(0,0,500)
            }
        },
        components:{
            NavBar,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        activated() {
            this.$refs.wrapper.refresh()
            this.$refs.wrapper.scroll.scrollTo(0,this.saveY,0)

        },
        deactivated() {
            this.saveY = this.$refs.wrapper.getY()
        }

    }
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 16px;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
        background-color: white;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 80px;
        height: 80px;
        margin-top: 10px;
    }
    .reimg{
        width: 100%;
    }
    #home {
        position: relative;
        /*padding-top: 44px;*/
        height: 100vh;
    }
    /*
        吸顶
    */
    /*.tab-control{*/
    /*    position: sticky;*/
    /*    top: 44px;*/
    /*    z-index: 9;*/
    /*}*/
    .tab-control{
        height: 40px;
        line-height: 40px;
    }
    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    /*.content {*/
    /*    height: calc(100% - 93px);*/
    /*    overflow: hidden;*/
    /*    margin-top: 44px;*/

    /*}*/

</style>