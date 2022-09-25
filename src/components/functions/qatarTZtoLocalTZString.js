export const monthName = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
}

export default function qatarTZtoLocalTZString(dateString) {
    /* Changes the dates of Qatar timezone to your local zone */
    const wrongLocalTime = new Date(dateString);
    const wrongQatarTime = new Date(wrongLocalTime.toLocaleString('en-US', { timeZone: 'Asia/Qatar' }));
    const offset = wrongQatarTime.getTime() - wrongLocalTime.getTime();

    const localTime = new Date(wrongLocalTime.getTime() - offset);
    const day = localTime.getDate();
    const month = monthName[localTime.getMonth()];
    const year = localTime.getFullYear();
    const hours = localTime.getHours();
    let minutes = localTime.getMinutes();
    
    if (minutes < 10) {minutes = '0' + minutes.toString()};

    return (`${day} ${month} ${year} ${hours}:${minutes}`);
}
