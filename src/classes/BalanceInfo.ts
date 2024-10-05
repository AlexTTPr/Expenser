export default class BalanceInfo{
    date: Date;
    sum: number;

    /**
     *
     */
    constructor(date: Date, sum: number) {
        this.date = date;
        this.sum = sum; 
    }
}