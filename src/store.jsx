/*
import { createStore } from "redux"

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ''
}

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case "account/requestLoan":
            if (state.loan > 0) return;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            }
        case "account/payLoan":
            if (state.loan > 0) return;
            return {
                ...state,
                loan: 0,
                balance: state.balance - state.loan,
                loanPurpose: ""
            }
        default:
            return state
    }
}

const store = createStore(accountReducer);

function diposit(amount){
    return {
        type: "account/deposit",
        payload: amount
    }
}

store.dispatch(diposit(1000));
console.log(store.getState())

function requestLoan(amount, purpose){
    return {
        type: "account/requestLoan", payload: {
            amount,
            purpose
        }
    }
}

store.dispatch(requestLoan(6000,"Russian"));
console.log(store.getState())

function payLoan(){
    return{
        type: "account/payLoan"
    }
}
*/
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./components/decrement/todoSlice"

const store = configureStore({
    reducer:{
        todo: todoSlice
    }
});

export default store;