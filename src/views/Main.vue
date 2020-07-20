<template>
  <div class="main-view w-screen h-screen">
    <page-title title="Expense Tracker"></page-title>
    <div class="main-container">
      <div class="status p-5">
        <div class="total-income-container flex justify-between">
          <p class="total-income-label">Income</p>
          <p class="amount text-green-600">&#8377; {{totalIncome}}</p>
        </div>
        <div class="total-expense-container flex justify-between">
          <p class="total-expense-label">Expense</p>
          <p class="amount text-red-500">&#8377; {{totalExpense}}</p>
        </div>
        <div class="expense-detail">
          <div
            v-for="(expenseItem, index) in expenseList"
            :key="index"
            class="expense-item flex ml-4 text-sm justify-between"
          >
            <p class="expense-item-name">{{expenseItem.category}}</p>
            <p class="expense-item-amount">{{expenseItem.amount}}</p>
          </div>
        </div>
        <div
          class="final-balance flex justify-between mt-3 border-t-2 border-solid border-gray-500"
        >
          <p class="balance-label">Balance</p>
          <p class="balance-amount">&#8377; {{balanceAmount}}</p>
        </div>
      </div>
      <div class="show-spending h-10 bg-gray-300 w-full flex justify-evenly items-center">
        <div class="daily br-px">
          <p>Daily</p>
        </div>
        <div class="daily">
          <p>Weekly</p>
        </div>
        <div class="daily">
          <p class="font-semibold">Monthly</p>
        </div>
        <div class="daily">
          <p>Yearly</p>
        </div>
      </div>
      <div class="menu_options_container flex flex-wrap w-full">
        <div
          class="menu_option add_income flex items-center justify-center w-1/2 border border-solid border-gray-300 bg-gray-800 text-gray-200"
          @click="goTo('AddIncome')"
        >
          <p>Add Income</p>
        </div>
        <div
          class="menu_option add_expense flex items-center justify-center w-1/2 border border-solid border-gray-300 bg-gray-800 text-gray-200"
          @click="goTo('AddExpense')"
        >
          <p>Add Expense</p>
        </div>
        <div
          class="menu_option all_transaction flex items-center justify-center w-1/2 border border-solid border-gray-300 bg-gray-800 text-gray-200"
          @click="goTo('AllTransactions')"
        >
          <p>All transaction</p>
        </div>
        <div
          class="menu_option settings flex items-center justify-center w-1/2 border border-solid border-gray-300 bg-gray-800 text-gray-200"
        >
          <p>Settings</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import PageTitle from "../components/PageTitle";
export default {
  name: "Main",
  data() {
    return {};
  },
  computed: {
    ...mapState(["totalIncome", "totalExpense", "expenseList"]),
    balanceAmount() {
      let _this = this;
      return _this.totalIncome - _this.totalExpense;
    }
  },
  methods: {
    goTo(pageName) {
      let _this = this;
      _this.$router.push({ name: pageName });
    }
  },
  components: {
    PageTitle
  }
};
</script>
<style lang="scss">
.status {
  height: calc(80vh - 90px);
}
.menu_options_container {
  height: 20vh;
}
</style>