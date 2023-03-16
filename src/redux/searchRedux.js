

// actions
const createActionName = actionName => `app/lists/${actionName}`;

const SEARCH_CARD = createActionName('SEARCH_CARD');


// action creators

export const searchCard = payload => ({ type: SEARCH_CARD, payload });
;

const searchStringReducer = (statePart = {}, action) => {
  switch(action.type) {
    case SEARCH_CARD:
      return action.payload
    default:
      return statePart;
  }
}
export default searchStringReducer;