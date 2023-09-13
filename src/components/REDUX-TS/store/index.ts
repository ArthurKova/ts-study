import { rootReducer } from "./reducers";

const store = createStore({ rootReducer }, applyMiddlewate(thukn));

export type RootState = ReturnType<typeof rootReducer>;
