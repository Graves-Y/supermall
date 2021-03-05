export default {
    addCart(context, payload) {
        // 判断state.carLists中是否已经存在payload
        // 方法一：for循环
        // let oldProduct = null
        // for (let item of state.cartList) {
        //     if(item.iid === payload.iid) {
        //         oldProduct = item
        //     }
        // }
        // 方法二：find方法
        let oldProduct = context.state.cartLists.find(item => item.iid === payload.iid)
        if (oldProduct) {
            context.commit('addCartCount', oldProduct)
        } else {
            context.commit('addCartType', payload)
        }
    }
}