const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featureData = action.payload.filter((item) => item.featured === true);

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case "SET_LOADING":
        return {
          ...state,
          isSINGLELoading: true,
        };

        case "SET_SINGLE_PRODUCT":
          return {
            ...state,
            isSINGLELoading: false,
            singleProduct: action.payload
          };

          case  "SET_SINGLE_ERROR":
            return {
              ...state,
              isLoading: false,
              isError: true,
            };

    default:
      return state;
  }
};

export default ProductReducer;
