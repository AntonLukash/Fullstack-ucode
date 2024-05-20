function getFormattedDate(dateObject) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeek = days[dateObject.getDay()];
    const dayOfMonth = dateObject.getDate();
    const year = dateObject.getFullYear();
    const hours = ('0' + dateObject.getHours()).slice(-2);
    const minutes = ('0' + dateObject.getMinutes()).slice(-2);

    return `${dayOfMonth}.${('0' + (dateObject.getMonth() + 1)).slice(-2)}.${year} ${hours}:${minutes} ${dayOfWeek}`;
}

