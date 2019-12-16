const parseDate = (backDate) => {
  const date = [];

  for (let i = 0; i < 10; i++) {
    date.push(backDate[i]);
  }

  return date.join('');
}

export default parseDate;