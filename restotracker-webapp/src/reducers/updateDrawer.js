export default function updateDrawer(
  state = {
    value: false,
  }, action) {
  switch (action.type) {
    case 'DRAWER_UPDATE_SUCCEEDED': {
      return {
        ...state,
        value: action.payload.value,
      };
    }

    default:
      return state;
  }
}
