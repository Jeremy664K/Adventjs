function fitsInOneBox(boxes) {
    const ordenateBoxes = boxes.sort((a, b) => {
      const actualBox = Math.max(...Object.values(a));
      const nextBox = Math.max(...Object.values(b));
      
      return actualBox - nextBox;
    });
  
    const fields = ordenateBoxes.map((box, i) => {
      const nextBox = ordenateBoxes[i + 1] || true;
      const { l, w, h } = box;
      
      return (nextBox.l > l && nextBox.w > w && nextBox.h > h) || nextBox;
    });
    
    const isAllFieldCorrect = fields.every(field => field === true);
    return isAllFieldCorrect;
}