function humanReadable (seconds) {
    let sec, minutes, hours;
    hours = Math.floor(seconds / 60 / 60);
    minutes = Math.floor((seconds / 60) % 60);
    sec = Math.floor(seconds % 60);

    function addNull(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    hours = addNull(hours);
    minutes = addNull(minutes);
    sec = addNull(sec);

    const time = `${hours}:${minutes}:${sec}`;
    return time;
}

console.log(humanReadable(86400))

//'12:34:56'

//* перед заглавною літерою має бути _ та всі маленькі літери
function toUnderscore(string) {
    return string.replace(/(\w)([A-Z])/g, '$1_$2').toLowerCase();
}

console.log(toUnderscore("MoviesAndBooks"))
// movies_and_books



//* повернути шифр: букви +13 символів, все інше не змінювати
function rot13(message){
    let arr = message.split('');

    arr = arr.map(item => {
        if (/[a-z]/g.test(item)) {
            let num = item[0].charCodeAt(0);
            for (let i = 1; i <= 13; i++) {
                if (num === 122) {
                    num = 97;
                } else {
                    num++;
                }
            }
            return item = String.fromCharCode(num);
        } else if (/[A-Z]/g.test(item)) {
            let num = item[0].charCodeAt(0);
            for (let i = 1; i <= 13; i++) {
                if (num === 90) {
                    num = 65;
                } else {
                    num++;
                }
            } 
            return item = String.fromCharCode(num);
        } else {
            return item;
        }
    })
    return arr.join(''); 
}

console.log(rot13('test7#fdsADG'));
"test7#fdsADG", "grfg7#sqfNQT"