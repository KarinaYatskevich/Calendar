var date = new Date();

var renderCalendar = () => {
    date.setDate(1);

    var monthDays = document.getElementById("days");

//порядковый номер первого числа месяца
    var firstDayIndex = date.getDay();

//последний день текущего месяца
    var lastDay = new Date( 
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
    
//последний день предыдыдущего месяца 
    var prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

//индекс последнего дня текущего месяца
    var lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

//количество дней следующего месяца
    var nextDays = 7 - lastDayIndex - 1;

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.getElementById("month").innerHTML = months[date.getMonth()];

    document.getElementById("year").innerHTML = date.getFullYear();

    var days = "";

    for (var x = firstDayIndex; x > 0; x--) { //Декремент -- уменьшает переменную на 1. Работает как counter = counter - 1
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (var i = 1; i <= lastDay; i++) { //i++ -это постинкремент, который возвращает исходное значение.
        if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
        ) {
        days += `<div class="today">${i}</div>`;
        } else {
        days += `<div>${i}</div>`;
        }
    }

    for (var j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
    };

    document.getElementById("prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
    });

    document.getElementById("next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
    });

    renderCalendar();