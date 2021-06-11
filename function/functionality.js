function matchingDays(){
    var dayOne = ''
    var dayTwo = ''
    function setDays(day1, day2){
        dayOne = new Date(day1);
        dayTwo = new Date(day2);
    }
    function getDayOne(){
        console.log(dayOne.getDay())
        return dayOne.getDay()
    }
    function getDayTwo(){
        console.log(dayTwo.getDay())
        return dayTwo.getDay()
    }
    function matchTwoDay(){
        if(getDayOne() === getDayTwo()){
            return "green"
        }
        return "red"

    }
    return{
        setDays,
        getDayOne,
        getDayTwo,
        matchTwoDay
    }
}

// function sameWeekday(date1,date2){
  
//     //console.log(date2);
//         var myDate1 = new Date(date1);
//         var myDate2 =new Date(date2);
//       console.log(myDate1);
      
    
//     if(myDate1.getDay() == myDate2.getDay()){
//          return true;
//       }
//     return false
//   }