<template>
    <div id="profileContent">
        <div class="ceontentItem" v-for="(item,index) in contents" :key="index">
            <img :src="item.icon">
            <div class="title">{{item.title}}</div>
        </div>
        <div class="set">
            <img src="../../../assets/img/profile/set.jpeg">
            <div class="title">设置</div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { List } from 'vant';

    Vue.use(List);
    export default {
        name: "ProfileContent",
        data(){
            return {
                contents:[
                    {
                        icon:require('../../../assets/img/profile/message.svg'),
                        title:'我的消息',
                        link:''
                    },
                    {
                        icon:require('../../../assets/img/profile/pointer.svg'),
                        title:'积分商城',
                        link:''
                    },
                    {
                        icon:require('../../../assets/img/profile/vip.svg'),
                        title:'会员卡',
                        link:''
                    },
                    {
                        icon:require('../../../assets/img/profile/cart.svg'),
                        title:'我的购物车',
                        link:''
                    },
                    {
                        icon:require('../../../assets/img/profile/shopping.svg'),
                        title:'下载购物APP',
                        link:''
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #profileContent {
        color: gray;
    }
    .ceontentItem img {
        width: 37px;
        height: 44px;
    }
    .ceontentItem{
        display: flex;
        padding: 4px;
        border-bottom: 1px solid gray;
    }
    .set img{
        width: 37px;
        height: 37px;
    }
    .set{
        display: flex;
        padding: 4px;
        border-top: 20px solid #eee;
        color: gray;
    }
    .title{
        height: 44px;
        line-height: 44px;
        font-size: 18px;
        margin-left: 6px;
    }
</style>