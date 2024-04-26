import { defineStore } from "pinia";
import { useToast } from 'vue-toastification'
const toast = useToast();
export const useCounter = defineStore("counter", {

  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment(value) {
      this.count += value;
      toast.success("incremented!")
    },
    decrement(value) {
      this.count -= value;
      toast.success("decremented!")
    },
  },
});
