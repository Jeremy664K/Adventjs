function distributeGifts(packOfGifts, reindeers) {
    let weightGift = 0;
    let weightReindeers = 0;
  
    packOfGifts.map(gift => weightGift += gift.length);
    reindeers.map(reindeer => weightReindeers += reindeer.length * 2);
    
    const division = parseInt(weightReindeers / weightGift);
    return division;
}