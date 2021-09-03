export const calculateAndFormatPrice = (price, servings, mealsPerWeek) => {
  let multiplier = 1;
  if (Number(mealsPerWeek) > 2) {
    multiplier = .9;
  }
  const total = price * servings * multiplier * mealsPerWeek;
  const usCurrencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return usCurrencyFormatter.format(total);
};
