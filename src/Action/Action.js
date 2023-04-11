
import { SHOW_CART,ADD_ITEM,REMOVE_ITEM,REMOVE_QTY } from "../Constant/Action_type"

export const show=(toggle)=>{
return{
          type:SHOW_CART,
          payload:toggle
}
}
export const add_items=(product)=>{
         
          return{
                    type:ADD_ITEM,
                    payload:product
          }
          }
export const remove_items=(product)=>{
         
                    return{
                              type:REMOVE_ITEM,
                              payload:product
                    }
                    } 
export const remove_qty=(product)=>{
         
return{
          type:REMOVE_QTY,
          payload:product
}
}                              