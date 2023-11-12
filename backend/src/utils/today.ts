export const WhichToday = (day: number) => {
    const weekdays = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES']
    return weekdays[todayBoundary(day)]
}


const todayBoundary = (today: number) => {
    if (today <= 0 || today >= 6) return 0
    return today - 1
}
