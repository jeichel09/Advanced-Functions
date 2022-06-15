function solution() {
    let myString = '';

    function append(str) {
        myString += str;
    }

    function removeStart(n) {
        myString = myString.slice(n);
    }

    function removeEnd(n) {
        myString = myString.slice(0, -n);
    }

    function print() {
        console.log(myString);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
