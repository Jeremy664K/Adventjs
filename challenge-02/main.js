function countHours(year, holidays) {
    let extraHours = 0;
  
    holidays.map(holiday => {
      const dateHoliday = new Date(`${holiday} ${year}`);
      const holidayNumber = dateHoliday.getDay();
      
      if(holidayNumber > 0 && holidayNumber < 6) 
        extraHours += 2;
    });
  
    return extraHours;
}