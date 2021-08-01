function prettify (number) {
  const integral = Number.parseInt(number);
  const digitCount = countDigits(integral);

  if (digitCount < 7) {
    return `${number}`;
  } else if (digitCount < 10) {
    return `${truncateNumber(integral)}M`
  } else if (digitCount < 13) {
    return `${truncateNumber(integral)}B`
  } else if (digitCount < 16) {
    return `${truncateNumber(integral)}T`
  } else {
    return "Number too high; unsupported"
  }
}

function countDigits(num) {
  return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}

function truncateNumber(number) {
  const leading = `${number}`.substring(0, 3);
  const truncated = (Number.parseInt(leading) / 100.0).toFixed(1);
  return parseFloat(truncated);
}

module.exports = {
  countDigits,
  prettify,
  truncateNumber
}