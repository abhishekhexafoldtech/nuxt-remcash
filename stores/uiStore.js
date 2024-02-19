import {defineStore} from 'pinia'
export const useUIStore = defineStore('UI',{
  state:()=>({
    showFilterBar: false,
  }),
  actions:{
    updateStateValue(stateKey, value){
      this[stateKey] = value
    },
  }
})