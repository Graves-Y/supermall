<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>首页</template>
        </nav-bar> <!-- style="width: 100%;height: 100px;background-color: red" -->
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
        <TabControl class="tab-control" :titles="['流行','精选','新款']"/>
        <ul>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
            <li>列表</li>
        </ul>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";

    import TabControl from "../../components/content/tabcontrol/TabControl";

    import {
        getHomeMutidata,
        getNPSData
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
                        'pop':{page:0,list:[]},
                        'new':{page:0,list:[]},
                        'sell':{page:0,list:[]}
                    }
                },
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
            }
        },
        created() {
            this.getHomeMutidata()
            this.getNPSData('pop')
            this.getNPSData('new')
            this.getNPSData('sell')
        },
        methods:{
            getHomeMutidata(){
                getHomeMutidata().then(res => {
                    this.results.banners = res.data.data.banner.list
                    this.results.recommends = res.data.data.recommend.list
                    console.log(res);
                })
            },
            getNPSData(type){
                const page = this.results.goods[type].page + 1
                getNPSData(type,page).then(res => {
                    this.results.goods[type].list.push(...res.list)
                    this.results.goods[type].page += 1
                })
            }
        },
        components:{
            NavBar,
            TabControl
        },

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
        padding-top: 44px;
    }
    .tab-control{
        position: sticky;
        top: 44px;
    }

</style>