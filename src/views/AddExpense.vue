<template>
  <div class="add-expense-view">
    <page-title :backArrowVisiblity="true" title="Add Expense"></page-title>
    <div class="add-expense-container p-3">
      <input class="w-full h-10 rounded-md border border-solid border-gray-400"  id="amount" type="number" v-model="amount" placeholder="Amount" required/>
      <select class="w-full h-10 my-3 rounded-md border border-solid border-gray-400" id="category" v-model="category" required>
        <option value="general">General</option>
        <option value="clothing">Clothing</option>
        <option value="grocery">Grocery</option>
        <option value="drinks">Drinks</option>
        <option value="education">Education</option>
        <option value="food">Food</option>
        <option value="fuel">Fuel</option>
        <option value="fun">Fun</option>
        <option value="hospital">Hospital</option>
        <option value="hotel">Hotel</option>
        <option value="medical">Medical</option>
        <option value="movie">Movie</option>
        <option value="other">Other</option>
      </select>
      <input v-model="date" class="w-full h-10 rounded-md my-3 border border-solid border-gray-400" id="date" type="date" placeholder="Date" />
      <input v-model="time" class="w-full h-10 rounded-md my-3 border border-solid border-gray-400" id="time" type="time" placeholder="Time" />
      <select v-model="paymentMode" id="mode" class="w-full h-10 rounded-md my-3 border border-solid border-gray-400">
        <option value="cash">Cash</option>
        <option value="credit_card">Credit Card</option>
        <option value="debit_card">Debit Card</option>
        <option value="net_banking">Net Banking</option>
      </select>
      <textarea v-model="notes" class="w-full rounded-md my-3 border border-solid border-gray-400" placeholder="Notes" id cols="30" rows="5"></textarea>
      <button class="flex absolute left-0 bottom-0 w-full justify-center items-center text-gray-200 h-12 bg-gray-800" @click="saveExpense">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PageTitle from "../components/PageTitle";
export default {
  data() {
    return {
      amount: null,
      category: "general",
      date: "",
      time: "",
      paymentMode: "cash",
      notes: ""
    };
  },
  methods: {
    ...mapActions(["addExpense","updateExpenseList"]),
    saveExpense() {
      let _this = this;
      if(!_this.amount){
        alert("Amount is mandetory")
        return;
      }
      _this.addExpense(_this.amount);
      _this.updateExpenseList({category: _this.category, amount: _this.amount, date: _this.date, time: _this.time, paymentMode: _this.paymentMode, notes: _this.notes})
      _this.$router.push({name: "Main"});
    }
  },
  components: {
    PageTitle
  }
};
</script>

<style scoped lang="scss">

</style>