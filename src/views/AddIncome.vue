<template>
  <div class="add-income-view">
    <page-title :backArrowVisiblity="true" title="Add Income"></page-title>
    <div class="add-income-container p-3">
      <input
        class="w-full h-10 rounded-md border border-solid border-gray-400"
        id="amount"
        type="number"
        v-model="amount"
        placeholder="Amount"
      />
      <select
        class="w-full h-10 my-3 rounded-md border border-solid border-gray-400"
        id="category"
        v-model="category"
      >
        <option value="bonus">Bonus</option>
        <option value="salary">Salary</option>
        <option value="others">Others</option>
      </select>
      <input
        v-model="date"
        class="w-full h-10 rounded-md my-3 border border-solid border-gray-400"
        id="date"
        type="date"
        placeholder="Date"
      />
      <input
        v-model="time"
        class="w-full h-10 rounded-md my-3 border border-solid border-gray-400"
        id="time"
        type="time"
        placeholder="Time"
      />
      <select
        v-model="paymentMode"
        id="mode"
        class="w-full h-10 rounded-md my-3 border border-solid border-gray-400"
      >
        <option value="cash">Cash</option>
        <option value="credit card">Credit Card</option>
        <option value="debit card">Debit Card</option>
        <option value="net banking">Net Banking</option>
      </select>
      <textarea
        v-model="notes"
        class="w-full rounded-md my-3 border border-solid border-gray-400"
        id
        cols="30"
        rows="5"
      ></textarea>
      <button
        class="flex absolute left-0 bottom-0 w-full justify-center items-center text-gray-200 h-12 bg-gray-800"
        @click="saveIncome"
      >Save</button>
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
      category: "salary",
      date: "",
      time: "",
      paymentMode: "cash",
      notes: ""
    };
  },
  methods: {
    ...mapActions(["addIncome", "updateIncomeList"]),
    saveIncome() {
      let _this = this;
      _this.updateIncomeList({
        category: _this.category,
        amount: _this.amount,
        date: _this.date,
        time: _this.time,
        paymentMode: _this.paymentMode,
        notes: _this.notes
      });
      _this.addIncome(_this.amount);
      _this.$router.push({ name: "Main" });
    }
  },
  components: {
    PageTitle
  }
};
</script>

<style scoped lang="scss">
</style>