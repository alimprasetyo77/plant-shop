import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers : {
        addToCart : (state, action) => {
            const newItem = action.payload
            console.log(typeof newItem.qty)
            const exsitingItem = state.items.find(item => item.id === newItem.id)
            if(exsitingItem ) {
                const totalQty = exsitingItem.qty + newItem.qty
                exsitingItem.qty = totalQty
            }else{
                state.items.push(newItem)
            }
    
        },
        updateCartItem: (state, action) => {
            const itemsToUpdate = action.payload; 
            const updatedItemsMap = {} // object baru yang key nya di ambil dari id itemToUpdate(data dari payload) dan value nya isi dari payload yaitu {id dan qty}
            itemsToUpdate.forEach(updatedItems => {
                updatedItemsMap[updatedItems.id] = updatedItems
            })
            state.items = state.items.map(item => {
                const updatedItem = updatedItemsMap[item.id]; 
                if (updatedItem) {
                  return { ...item, qty: updatedItem.qty };
                }
                return item;
              });
            // 1
            // const { productId, updatedQuantity } = action.payload;
            // const itemIndex = state.items.findIndex(item => item.id === productId);
            // if(itemIndex !== -1 && updatedQuantity > 0){
            //     state.items[itemIndex].qty = updatedQuantity
            // }

            // 2
            //   state.items = state.items.map(item => {
            //     if (item.id === productId) {
            //       return { ...item, qty: updatedQuantity };
            //     }
            //     return item;
            //   });
          },
        removeFromCart: (state, action) => {
            const itemId = action.payload
            state.items = state.items.filter(item => item.id !== itemId);
        }
    }
})
export const  {addToCart, updateCartItem, removeFromCart } = cartSlice.actions
export default cartSlice.reducer