'use strict';
var firstDay = document.querySelector('.day1')
var secondDay = document.querySelector('.day2')
var dates = document.querySelector('.dates')

let theDay = matchingDays()
var weekdays = document.getElementById('days')

var templateSource = document.querySelector(".userTemplate").innerHTML;

// compile the template         
var userTemplate = Handlebars.compile(templateSource);


weekdays.innerHTML = userTemplate({ myWeek: theDay.weekdayList()})
function matchDom() {
    
    
    var day1 = firstDay.value
    var day2 = secondDay.value
    
    weekdays.innerHTML = userTemplate({ myWeek: theDay.weekdayList() })
    var weekDay = document.querySelectorAll('.weekDay')
   
        theDay.setDays(day1, day2)

        if (theDay.getDayOne() === theDay.getDayTwo()) {
            weekDay[theDay.getDayOne()].classList.add('green')
        }
        else if (theDay.getDayOne() !== theDay.getDayTwo()) {
            if (theDay.getDayOne()) {
                weekDay[theDay.getDayOne()].classList.add('yellow')
            }
            if (theDay.getDayTwo()) {
                weekDay[theDay.getDayTwo()].classList.add('red')
            }
            if (theDay.getDayOne() === 0 && theDay.getDayTwo() !== 0){
                weekDay[theDay.getDayOne()].classList.add('yellow')
            }
            if (theDay.getDayTwo() === 0 && theDay.getDayOne() !== 0 ){
                weekDay[theDay.getDayTwo()].classList.add('red')
            }
        }
    
    

}

dates.addEventListener('change', matchDom)