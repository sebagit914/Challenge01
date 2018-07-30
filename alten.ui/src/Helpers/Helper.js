
// return string date value
export default class Helper{
    static dateToLocaleString(dateValue) {
        return new Date(dateValue).toLocaleString();
    }
}