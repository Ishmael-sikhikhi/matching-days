'use strict';
var firstDay = document.querySelector('.day1')
var secondDay = document.querySelector('.day2')
var dates = document.querySelector('.dates')

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let theDay = matchingDays()
var weekdays = document.getElementById('days')
// var number = []
// var numValue = [0,1,2,3,4,5,6]
var templateSource = document.querySelector(".userTemplate").innerHTML;

// compile the template         
var userTemplate = Handlebars.compile(templateSource);


weekdays.innerHTML = userTemplate({ myWeek: week})
function matchDom() {
    
    
    var day1 = firstDay.value
    var day2 = secondDay.value
    
    weekdays.innerHTML = userTemplate({ myWeek: week })
    var weekDay = document.querySelectorAll('.weekDay')
   
    console.log(weekDay)
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