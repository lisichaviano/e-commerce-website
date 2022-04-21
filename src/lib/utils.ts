export const formatMoney = (money: number) => {
  const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  });
  return formatter.format(money);
};
