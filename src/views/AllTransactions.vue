<template>
  <div class="all-transaction-view">
    <page-title :backArrowVisiblity="true" title="All Transactions"></page-title>
    <div class="all-transcation-container p-3">
      <div class="earning-transactions">
        <div class="transaction">
          <div v-for="(income, index) in incomeList" :key="index" @click="showDetailedInfo(income)" class="border-b-2">
            <div class="info flex justify-between">
              <p class="total-income-label">{{income.category}}</p>
              <p class="amount text-green-600">&#8377; {{income.amount}}</p>
            </div>
            <p class="text-xs text-gray-500">{{income.date}}</p>
          </div>
        </div>
      </div>
      <div class="expense-transactions">
        <div class="transaction">
          <div v-for="(expense, index) in expenseList" :key="index" @click="showDetailedInfo(expense)" class="border-b-2">
            <div class="info flex justify-between">
              <p class="total-income-label">{{expense.category}}</p>
              <p class="amount text-red-600">&#8377; {{expense.amount}}</p>
            </div>
            <p class="text-xs text-gray-500">{{expense.date}}</p>
          </div>
        </div>
      </div>
      <div v-if="isModalVisible" class="modal fixed top-0 left-0 z-10 w-screen h-screen flex justify-center items-center">
            <div class="info-modal rounded-lg bg-gray-200 p-4">
                <div class="category-container flex justify-between item-center"><p class="label">Category:</p><p class="category-name">{{infoModalContent.category || "none"}}</p></div>
                <div class="category-container flex justify-between item-center"><p class="label">Amount:</p><p class="amount">{{infoModalContent.amount || "none"}}</p></div>
                <div class="category-container flex justify-between item-center"><p class="label">Date:</p><p class="date">{{infoModalContent.date || "none"}}</p></div>
                <div class="category-container flex justify-between item-center"><p class="label">Payment Mode:</p><p class="date">{{infoModalContent.paymentMode || "none"}}</p></div>
                <div class="category-container"><p class="label">Notes:</p><p class="notes">{{infoModalContent.notes || "none"}}</p></div>


                <button class="bg-gray-800 text-gray-200 p-2 mt-10 w-full rounded-lg" @click="changeModalVisibility(false)">Okay</button>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PageTitle from "../components/PageTitle";
export default {
  data(){
    return {
      isModalVisible: false,
      infoModalContent: {
        category: "",
        amount: "",
        date: "",
        paymentMode: "",
        notes: ""
      }
    }
  },
  computed: {
    ...mapState(["incomeList", "expenseList"])
  },
  methods: {
    showDetailedInfo(transactionData){
      let _this = this;
      _this.infoModalContent = {
        category: transactionData.category,
        amount: transactionData.amount,
        date: transactionData.date,
        paymentMode: transactionData.paymentMode,
        notes: transactionData.notes
      }
        _this.changeModalVisibility(true);
    },
    changeModalVisibility(status = false){
      let _this = this;
        _this.isModalVisible = status;
      console.log(_this.isModalVisible);

    }
  },
  components: {
    PageTitle
  }
};
</script>

<style scoped>
.modal{
  background: rgba(0, 0, 0, 0.7)
}
.info-modal {
  width: 80vw;
  min-height: 200px;
}
</style>