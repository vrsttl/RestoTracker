export default function getTables(
  state = {
    tables: [],
  }, action) {
  switch (action.type) {
    case 'TABLES_OK': {
      return {
        ...state,
        tables: action.payload,
      };
    }
    default:
      return state;
  }
}
