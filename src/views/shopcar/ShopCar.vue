<template>
    <div id="shopcar">
        <nav-bar class="home-nav">
            <template v-slot:center>购物车</template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "ShopCar",
        components:{
            NavBar
        }
    }
</script>

<style scoped>

</style>