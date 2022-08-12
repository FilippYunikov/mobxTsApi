export const API = {
  getQuotes: async () => {
    try {
      const response = await fetch(
        'https://poloniex.com/public?command=returnTicker',
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  },
};
