export default {
    state: {
        goodsData: '',
        sellerData: '',
        ratingsData: ''
    },
    mutations:{
        UPDATE_STATE:(state, payload) => {
            state[payload.stateType] = payload.value
        },
        ADD:(state, payload)=>{
            state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].count += 1;
            state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].showBtn = true;
            state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].singleM = state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].count * Number(state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].price);
        },
        MINUS:(state, payload)=>{
            state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].count -= 1;
            if(state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].count <= 0){
                state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].count = 0;
                state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].showBtn = false;
            }
            state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].singleM = state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].count * Number(state.goodsData[payload.operateTool[0]].foods[payload.operateTool[1]].price);
        }
    },
    actions:{
        updateAction: (context, payload) => {
            context.commit(payload.type, payload)
        },
        getData:(context, payload)=>{
            // console.log(context, '--context--', payload, '--payload--')
            return new Promise((resolve, reject) => {
                payload.async.get('./mock/index.json').then(res => {
                    console.log("--data--", res)
                    if(res.status === 200){
                        for(let i = 0; i < res.data.goods.length; i++){
                          for(let j = 0; j < res.data.goods[i].foods.length; j++){
                            res.data.goods[i].foods[j].count = 0;
                            res.data.goods[i].foods[j].showBtn = false;
                            res.data.goods[i].foods[j].singleM = 0;
                          }
                        }
                        context.commit('UPDATE_STATE', {stateType:'goodsData', value: res.data.goods})
                        context.commit('UPDATE_STATE', {stateType:'sellerData', value: res.data.seller})
                        context.commit('UPDATE_STATE', {stateType:'ratingsData', value: res.data.ratings})
                    }
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
    }
}