import { userState, actions, userAction } from "../../types/user";

const initialState: userState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: userAction) => {
  switch (action.type) {
    case actions.fetch:
      return { loading: true, error: null, users: [] };
    case actions.succes:
      return { loading: false, error: null, users: action.payload };
    case actions.error:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
