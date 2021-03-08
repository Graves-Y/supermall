<template>
    <div id="cart-list-item">
        <div class="checkbox">
            <van-checkbox v-model="checked">复选框</van-checkbox>
        </div>
        <div>{{cartListItem}}</div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import { Checkbox, CheckboxGroup } from 'vant';
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
    export default {
        name: "CartListItem",
        data(){
            return {
                checked:false
            }
        },
        props:{
            cartListItem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
.checkbox{

}
</style>