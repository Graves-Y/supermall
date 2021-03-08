<template>
    <div id="shopcar">
        <nav-bar class="home-nav">
            <template v-slot:center>购物车<span v-show="length > 0">({{length}})</span></template>
        </nav-bar>
        <scroll class="content" ref="scroll">
            <cart-list :cart-list="list"/>
        </scroll>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import Scroll from "../../components/common/scroll/Scroll";
    import CartList from "../../components/content/cartlist/CartList";
    import {mapGetters} from 'vuex'
    export default {
        name: "ShopCar",
        data(){
            return{

            }
        },
        components:{
            NavBar,
            Scroll,
            CartList
        },
        computed:{
            // 两种语法 语法一
            // ...mapGetters['getCartListLength','getCartLists']
            // 语法二
            ...mapGetters({
                length: 'getCartListLength',
                list:'getCartLists'
            })
        },
        mounted() {
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
#shopcar {
    position: relative;
    height: 100vh;
}
.content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>