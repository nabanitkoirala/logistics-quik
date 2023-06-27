

export const DateConverter = (date) => {

    const dateTime = new Date(date);
    const formattedDate = dateTime.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    console.log("This is formatted data", formattedDate)
    return formattedDate
}


export const DateTimeDayConverter = (date) => {
    const d = new Date(date)
    const month = '' + (d.getMonth() + 1)
    const day = '' + d.getDate()
    const year = d.getFullYear();
    const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const weekDay = d.toLocaleDateString('en-US', { weekday: 'short' });
    const finalOutput = `${time} ${weekDay} ${day}/${month}/${year}`
    return finalOutput
}