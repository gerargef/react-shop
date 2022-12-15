export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload.data,
        currentGoods: payload.data,
        loading: false,
      };
    case "SET_IS_CART_OPEN":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case "SET_IS_CATEGORY_OPEN":
      return {
        ...state,
        isCategoryOpen: !state.isCategoryOpen,
      };
    case "SET_ORDER": {
      const itemIndex = state.orders.findIndex(
        (item) => payload.id === item.id
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newOrderItem = {
          name: payload.name,
          price: payload.price,
          id: payload.id,
          quantity: 1,
        };
        newOrder = [...state.orders, newOrderItem];
      } else {
        newOrder = state.orders.map((orderItem, index) => {
          if (itemIndex === index) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        orders: newOrder,
        alertName: payload.name,
      };
    }
    case "DELETE_ORDER":
      return {
        ...state,
        orders: state.orders.filter((order) => order.id !== payload.id),
      };
    case "DECREMENT": {
      return {
        ...state,
        orders: state.orders.map((orderItem) => {
          if (orderItem.id === payload.id) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        }),
      };
    }
    case "INCREMENT": {
      return {
        ...state,
        orders: state.orders.map((orderItem) => {
          if (orderItem.id === payload.id && orderItem.quantity > 1) {
            return {
              ...orderItem,
              quantity: orderItem.quantity - 1,
            };
          } else {
            return orderItem;
          }
        }),
      };
    }

    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "SEARCH_GOODS": {
      console.log(payload.searchValue, payload, "ef");
      if (payload.searchValue === "") {
        console.log('p');
        return {
          ...state,
          currentGoods: state.goods,
          isCategoryOpen : false,
        };
      } else {
        console.log('wfe');
        return {
          ...state,
          currentGoods: state.goods.filter((good) =>
            good.displayName
              .toLowerCase()
              .startsWith(payload.searchValue.toLowerCase())
          ),
          isCategoryOpen : false,
        };
      }
    }
    case "FILTER_GOODS": {
      if (payload.filterCategory === "") {
        return {
          ...state,
          currentGoods: state.goods,
        };
      }
      if (payload.filterCategory === "Комплект") {
        return {
          ...state,
          currentGoods: state.goods.filter(
            (good) =>
              good.displayType.startsWith("Предметы в комплекте") ||
              good.displayType === "Комплект предметов"
          ),
        };
      }
      if (payload.filterCategory === "Экипировка") {
        return {
          ...state,
          currentGoods: state.goods.filter(
            (good) =>
              good.displayType === payload.filterCategory ||
              good.displayType.toLowerCase().includes("украшен")
          ),
        };
      }
      return {
        ...state,
        currentGoods: state.goods.filter(
          (good) => good.displayType === payload.filterCategory
        ),
      };
    }

    default:
      return state;
  }
};
