function timer(id) {
    // Timer 23 days

    const day23 = 23.45 * 24 * 1000 * 60 * 60,
          deadline = Date.parse(new Date()) + day23;

    function getDifferenceInTime (endTime) {
        const t = endTime - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 24)) % 24),
                minutes = Math.floor((t / (1000 * 60)) % 60),
                seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function setZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimer(endTime) {
        const timer = document.querySelector(id),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            const timeResult = getDifferenceInTime (endTime);

            days.innerHTML = setZero(timeResult.days);
            hours.innerHTML = setZero(timeResult.hours);
            minutes.innerHTML = setZero(timeResult.minutes);
            seconds.innerHTML = setZero(timeResult.seconds);

            if (timeResult.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            }
        }
    }

    setTimer(deadline);
}

export default timer;