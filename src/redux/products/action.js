import { ADDPRODUCT } from "./actionType"


export const productAdded = (productInfo) => {
    return {
        type: ADDPRODUCT,
        payload: productInfo
    }
}