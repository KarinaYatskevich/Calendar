function renderMonth(date) {
    function getCurrentMonth(){
        const month = date.toLocaleString('default', { month: 'long' });
        return month;
    };

    function insertCurrentMonthInHTML(month){
        const monthElement = document.getElementById("month");
        monthElement.innerHTML = month;
    };
    const currentMonth = getCurrentMonth();
    insertCurrentMonthInHTML(currentMonth);
};

export default renderMonth;
