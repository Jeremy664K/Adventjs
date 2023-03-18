function getGiftsToRefill(a1, a2, a3) {
  const giftsToRefill = [];
  const giftsFilters = [];
  const totalGifts = [a1, a2, a3];

  totalGifts.flat().forEach((gift) => {
    if (!giftsFilters.includes(gift)) {
      giftsFilters.push(gift);
    }
  });

  giftsFilters.forEach((gift) => {
    const storeIncludes = totalGifts.filter((store) => store.includes(gift));
    const isStockGift = storeIncludes.length !== 1;

    if (!isStockGift) giftsToRefill.push(gift);
  });

  return giftsToRefill;
}
