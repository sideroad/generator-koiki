
const LOAD_START = '<%= reducer %>/LOAD_START';
const LOAD_SUCCESS = '<%= reducer %>/LOAD_SUCCESS';
const LOAD_FAIL = '<%= reducer %>/LOAD_FAIL';

const initialState = {
  items: [],
  loaded: false,
  loading: false
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.res.body.items
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}
