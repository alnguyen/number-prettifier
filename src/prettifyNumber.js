function prettify (number) {
  const integral = Number.parseInt(number);
  const digitCount = countDigits(integral);

  if (digitCount < 4) {
    return `${number}`;
  } else {
    return `${truncateNumber(integral)}${unit(digitCount)}`;
  }
}

function unit(digitCount) {
  if (digitCount < 4) {
    return '';
  } else if (digitCount < 7) {
    return 'K';
  } else if (digitCount < 10) {
    return 'M';
  } else if (digitCount < 13) {
    return 'B';
  } else if (digitCount < 16) {
    return 'T';
  } else {
    return 'ಠ_ಠ';
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