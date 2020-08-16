export const state = () => ({
  id:"",
  filter:false
})

export const mutations = {
  regist(state,id,filter){
    state.id = id
    state.filter = filter
  }
}