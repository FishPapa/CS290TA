function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
    		console.log('item' + list[i]);
        var item = 'item' + list[i];

        result.push( function(x) {
        					return function(){
        					 alert(item + ' ' + list[x]);
                  }
        }(i));
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
Output: item3 1
        item3 2
        item3 3

Question: Why the number in the item name doesn't get changed here while Version 2 works?

*/
