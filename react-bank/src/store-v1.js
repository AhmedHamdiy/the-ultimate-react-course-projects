import { combineReducers, createStore } from "redux";

const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};
const initalStateCustomer = {
  fullName: "",
  NationalID: "",
};

function accountReducer(state = initalStateAccount, action) {
  switch (action.type) {
    case "convertingCurrency":
      return { ...state, isLoading: true };
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan) return state;
      else
        return {
          ...state,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
    case "account/payLoan":
      if (state.balance < state.loan) return state;
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}
function customerReducer(state = initalStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        NationalID: action.payload.NationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export function convertingCurrency() {
  return { type: "account/convertingCurrency" };
}

export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

export function payLoan() {
  return { type: "account/payLoan" };
}

export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

export function createCustomer(fullName, NationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      NationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

export default store;
