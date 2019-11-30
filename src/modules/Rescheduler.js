export default class Rescheduler {
    isConnection = false;
    timerID;
    constructor(store, interval = 1000) {
        this.state = store;
        this.interval = interval;
    }

    init() {
        this.clearTimer();
        this.checkConnection();
    }
    checkConnection = () => {
        this.isConnection = navigator.onLine;
        this.timerID = setInterval(this.checkInternet, this.interval, navigator.onLine);
    };

    checkInternet(online) {
        if (!online) {
            // todo::make or add el in queue
        }
    }

    clearTimer() {
        clearInterval(this.timerID);
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }

    reducer(state, action) {}
}
