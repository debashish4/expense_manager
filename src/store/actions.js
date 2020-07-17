import * as MUTATION_TYPES from "./mutation_types"


export default {
    addIncome({ commit, state }, payload) {
        let amount = null;
        if (state.totalIncome !== null) {
            amount = parseInt(state.totalIncome) + parseInt(payload)
            commit(MUTATION_TYPES.ADD_INCOME, amount);
            return;
        }
        commit(MUTATION_TYPES.ADD_INCOME, payload)
    },
    addExpense({ commit, state }, payload) {
        let amount = null;
        if (state.totalExpense !== null) {
            amount = parseInt(state.totalExpense) + parseInt(payload)
            console.log("amount is", amount)
            commit(MUTATION_TYPES.ADD_EXPENSE, amount);
            return;
        }
        commit(MUTATION_TYPES.ADD_EXPENSE, payload)
    },
    updateIncomeList({commit}, payload){
        commit(MUTATION_TYPES.UPDATE_INCOME_LIST, payload)
    },
    updateExpenseList({commit}, payload){
        commit(MUTATION_TYPES.UPDATE_EXPENSE_LIST, payload)
    }
}