function matchingDays() {
    var dayOne = ''
    var dayTwo = ''
    const  week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    function setDays(day1, day2) {
        dayOne = new Date(day1);
        dayTwo = new Date(day2);
    }
    function getDayOne() {

        return Number(dayOne.getDay())
    }
    function getDayTwo() {
        return Number(dayTwo.getDay())
    }
    function matchTwoDay() {
        if (getDayOne() === getDayTwo()) {
            return "green"
        }
        else if (getDayOne() !== getDayTwo()){
            if (getDayOne()){
                return 'yellow'
            }
            if (getDayTwo()){
                return 'red'
            }
        }
    }
    function weekDays(){
        return week
    }
    function notMatch() {
        console.log(week[getDayOne()])
        return week[getDayOne(), getDayTwo()]
    }
    function weekdayList(){
        return week
    }
    return {
        setDays,
        getDayOne,
        getDayTwo,
        matchTwoDay,
        notMatch,
        weekDays,
        weekdayList
    }
}