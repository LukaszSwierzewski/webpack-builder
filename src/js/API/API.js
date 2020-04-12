export default {
  async fetchData() {
    const response = await fetch(
      "https://recruitment.hal.skygate.io/companies"
    );
    const data = await response.json();
    return data;
  },
  async fetchIncome(id) {
    const response = await fetch(
      ` https://recruitment.hal.skygate.io/incomes/${id}`
    );
    const data = await response.json();
    return data;
  },
};
