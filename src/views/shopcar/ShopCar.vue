<template>
    <div id="shopcar">
        <nav-bar class="home-nav">
            <template v-slot:center>购物车<span v-show="length > 0">({{length}})</span></template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import {mapGetters} from 'vuex'
    export default {
        name: "ShopCar",
        data(){
            return{

            }
        },
        components:{
            NavBar
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
        }
    }
</script>

<style scoped>

</style>