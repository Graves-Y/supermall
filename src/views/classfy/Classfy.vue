<template>
    <div id="classify">
        <nav-bar class="home-nav">
            <template v-slot:center>分类</template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    export default {
        name: "Classfy",
        components:{
            NavBar
        }
    }
</script>

<style scoped>

</style>