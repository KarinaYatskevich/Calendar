function renderYear(date) {
    function getCurrentYear(){
        const year = date.getFullYear();
        return year;
    };

    function insertCurrentYearInHTML(year){
        const yearElement = document.getElementById("year");
        yearElement.innerHTML = year;
    };
    const currentYear = getCurrentYear();
    insertCurrentYearInHTML(currentYear);
};

export default renderYear;