<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from "@better-scroll/core"
    import ObserveDOM from '@better-scroll/observe-dom'
    BScroll.use(ObserveDOM)
    export default {
        name: "Scroll",
        data(){
            return{
                scroll:null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper,{
                observeDOM:true
            })
        }
    }
</script>

<style scoped>
    /*.wrapper{*/
    /*    height: 614px;*/
    /*    overflow: scroll;*/
    /*}*/
</style>