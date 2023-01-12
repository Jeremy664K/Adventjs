function wrapping(gifts) {
  return gifts.map(gift => {
    const asteriskNumbers = gift.length;
    const asterisk = "*".repeat(asteriskNumbers + 2);

    return asterisk + `\n*${gift}*\n` + asterisk;
  })
}