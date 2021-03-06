var test = require('tape');
var sortedInsert = require('./sorted-insert');


test('amp-sorted-insert', function (t) {
    var numbers = [1,3,5,7];
    sortedInsert(numbers, 2);
    t.equal(numbers.length, 5);
    t.equal(numbers[1], 2);

    var robert = {name: 'Robert', rank: 2};
    var sally = {name: 'Sally', rank: 4};
    var pat = {name: 'Pat', rank: 1};
    var people = [robert, sally];
    
    sortedInsert(people, pat, 'rank');
    t.deepEqual(people, [pat, robert, sally]);

    people = [pat, robert];
    sortedInsert(people, sally, function (person) { return person.name.length; });
    t.deepEqual(people, [pat, sally, robert]);

    var arrayLike = {
        0: 'a',
        1: 'b',
        length: 2
    };
    var index = sortedInsert(arrayLike, 'c');
    t.equal(index, 2, 'should be inserted at 2');
    t.deepEqual(arrayLike, {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    }, 'should modify array-like object');

    t.end();
});
