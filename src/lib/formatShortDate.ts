import { format, isThisYear } from "date-fns"

export const formatShortDate = (date: number) => {
    const _date = new Date(date)

    return isThisYear(_date) ? format(_date, "d MMM YYY") : format(_date, "MMM d, y")
}