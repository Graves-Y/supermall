<template>
    <div id="detail">
        <nav-bar class="detail-nav-bar">
            <template v-slot:left>
                <img src="../../assets/img/common/back.svg">
            </template>
            <template v-slot:center>
                <tab-control :titles=titles></tab-control>
            </template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import TabControl from "../../components/content/tabcontrol/TabControl"
    export default {
        name: "Detail",
        data(){
          return{
              iid:null,
              detailResults:{},
              titles:['商品','详情','评价','其他']
          }
        },
        created() {
            this.iid = this.$route.params.iid
        },
        components:{
            NavBar,
            TabControl
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
</style>