import { ADD_ITEM,REMOVE_ITEM ,SHOW_CART,REMOVE_QTY } from "../Constant/Action_type"
const initialState={
          show_cart:false,
          cart:[]
}
export const set=(state=initialState,action)=>{
  console.log("reducer",action.payload)
switch(action.type){
          case SHOW_CART:
                    return{
                      ...state, 
                      show_cart:action.payload
                    }
               
          case ADD_ITEM:
                 const itemindex=state.cart.findIndex((e)=>e.id===action.payload.id)
                 if(itemindex>=0){
                  state.cart[itemindex].qty+=1;
                  return{
                    ...state,
                    cart:[...state.cart]
                  }
                 }
                 else{
                  const temp={...action.payload,qty:1}
                  return{
                    ...state,cart:[...state.cart,temp]
                  }
                 }

          case REMOVE_QTY:
            const item_dec=state.cart.findIndex((e)=>e.id===action.payload.id)
            console.log("id",item_dec)
            if(state.cart[item_dec].qty>1){
              state.cart[item_dec].qty-=1
              return{
                ...state,cart:[...state.cart]
              }
            }
            else if(state.cart[item_dec].qty===1){
              const data=state.cart.filter((e)=>e.id!==action.payload.id)
            return{
              ...state,cart:data
            }
            }

            case REMOVE_ITEM:
           
              const data=state.cart.filter((e)=>e.id!==action.payload)
            return{
              ...state,cart:data
            }
            
                   
          
          default:
                    return state          
}
}