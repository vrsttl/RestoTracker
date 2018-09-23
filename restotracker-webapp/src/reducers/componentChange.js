export default function componentChange(
  state = {
    component: null,
  }, action) {
  switch (action.type) {
    case 'COMPONENT_CHANGE_OK': {
      return {
        ...state,
        component: action.payload,
      };
    }

    default:
      return state;
  }
}
