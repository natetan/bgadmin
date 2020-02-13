const toMoneyDisplay = money => {
  money = String(money);
  if (!money.includes('.')) {
    return '$' + money + '.00';
  }
  let parts = money.split('.');
  return '$' + (parts[1].length === 1 ? money + '0' : money);
}

const toTitleCase = string => {
  if (!string || !string.length) {
    return '';
  }
  return string[0].toUpperCase() + string.substring(1);
}

module.exports = {
  toMoneyDisplay,
  toTitleCase
}