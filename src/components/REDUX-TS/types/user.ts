export interface userState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// можно использовать typeof или enum

export enum actions {
  fetch = "FETCH",
  succes = "SUCCES",
  error = "ERROR",
}

interface fetch {
  type: actions.fetch;
}

interface succes {
  type: actions.succes;
  payload: any[];
}

interface error {
  type: actions.error;
  payload: string;
}

export type userAction = fetch | succes | error;
// interface userAction {
//   type: string;
//   payload?: any;
// }
