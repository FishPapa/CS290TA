function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
    		console.log('item' + list[i]);
        var item = 'item' + list[i];
				var notify = function(x) {
        					return function(){
        					 alert(item + ' ' + list[x]);
                  };
        }(i);
        result.push(notify(i));
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList()


/*
Output: item1 1
        item2 2
        item3 3

Question 1: Why the number in the item name gets changed here while Version 3 doesn't work?

Question 2: Why there is an error?(See the screenshot)

*/
