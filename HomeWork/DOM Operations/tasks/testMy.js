// console.log('help');
Array.prototype.MyFunct = function (fun) {
    var i = 0;
    // console.log(this);
    while (i < this.length) {

        if (fun(this[i++])) {
            return false;
        };
    };

    return true;
};

var arr = [1, 2, 5, 7, 8, []];
console.log(arr.MyFunct(x => (typeof x !== 'number' && typeof x !== 'string')));
// arr.MyFunct(x => (typeof x !== 'number' && typeof x !== 'string'));