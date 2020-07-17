import * as MUTATION_TYPES from "./mutation_types"

export default {
    [MUTATION_TYPES.ADD_INCOME](state, payload) {
        state.totalIncome = payload ;
    },
    [MUTATION_TYPES.ADD_EXPENSE](state, payload) {
        state.totalExpense = payload ;
    },
    [MUTATION_TYPES.UPDATE_EXPENSE_LIST](state, payload){
        state.expenseList = [...state.expenseList, payload]
    },
    [MUTATION_TYPES.UPDATE_INCOME_LIST](state, payload){
        state.incomeList = [...state.incomeList, payload]
    }
}