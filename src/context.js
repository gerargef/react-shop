import { createContext, useReducer} from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();


const initialState = {
    goods: [],
    currentGoods: [],
    loading: true,
    orders: [],
    isCartOpen: false,
    isCategoryOpen: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.setGoods = (data) => {
        dispatch({type:"SET_GOODS", payload:{data:data}});
    }
    value.handleSetIsCartOpen = () => {
        dispatch({type: "SET_IS_CART_OPEN"})
    }
    value.handleSetIsCategoryOpen = () => {
        dispatch({type: "SET_IS_CATEGORY_OPEN"})
    }
    value.setOrder = (name, price, id) => {
        dispatch({type: "SET_ORDER", payload: {name: name, price:price, id:id}})
    }
    value.deleteOrder = (id) => {
        dispatch({type: "DELETE_ORDER", payload: {id:id}})
    }
    value.decrement = (id) => {
        dispatch({type: "DECREMENT", payload:{id:id}})
    }
    value.increment = (id) => {
        dispatch({type: "INCREMENT", payload:{id:id}})
    }
    value.closeAlert = () => {
        dispatch({type: "CLOSE_ALERT"})
    }
    value.searchGoods = (searchValue) => {
        dispatch({type: "SEARCH_GOODS", payload: {searchValue: searchValue}})
    }
    value.filterGoods = (filterCategory) => {
        dispatch({type: "FILTER_GOODS", payload: {filterCategory:filterCategory}})
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}