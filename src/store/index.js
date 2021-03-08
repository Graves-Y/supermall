import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from "./actions"
import getters from "./getters";
Vue.use(Vuex)

const state = {
    cartLists:[{count:1,
        desc:"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装",
        iid:"1m70y5k",
        image:"//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg",
        price:"59.00",
        title:"2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装"
    }]
}

const store = new Vuex.Store ({
    state,
    mutations,
    actions,
    getters

})

export default store