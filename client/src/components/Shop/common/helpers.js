export const calculateAndFormatPrice = (price, servings, mealsPerWeek) => {
  let multiplier = 1;
  if (Number(mealsPerWeek) > 2) {
    multiplier = .85;
  }
  const result = Math.round(price * servings * multiplier * Number(mealsPerWeek) * 100) / 100;
  return `$${result}`
};
