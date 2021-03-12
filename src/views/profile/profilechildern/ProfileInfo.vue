<template>
    <div id="profileInfo">
        <van-grid :column-num="3" class="van-grid">
            <van-grid-item v-for="(item,index) in profileInfo" :key="index">
                <van-text class="textNum">{{item.num + ' ' + item.unit}}</van-text>
                <van-text class="textTile">{{item.title}}</van-text>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Grid, GridItem } from 'vant';
    import {mapGetters} from 'vuex'
    Vue.use(Grid);
    Vue.use(GridItem);
    export default {
        name: "ProfileInfo",
        computed:{
            ...mapGetters(['getProfileInfo']),
            profileInfo(){

                return this.getProfileInfo
            }
        }
    }
</script>

<style scoped>
    .van-grid {
        border-bottom: 20px solid #eee;
        color: gray;
    }
    .textNum {
        font-size: 18px;
        color: orange;
    }
    .textTile {
        font-size: 20px;
        margin-top: 5px;
    }
</style>