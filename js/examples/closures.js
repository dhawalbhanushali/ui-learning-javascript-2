function printArrayItems() {
  var items = ['I', 'love', 'javascript', 'sometimes'];

  var allFunctions = [];

  for (var i = 0; i < items.length; i++) {
    var fun = function() {
      console.log(items[i]);
    }

    allFunctions.push(fun);
  }

  return allFunctions;
}

var returnFunctionsArray = printArrayItems();

// console.log(returnFunctionsArray);

returnFunctionsArray[0]();
returnFunctionsArray[1]();
returnFunctionsArray[2]();
returnFunctionsArray[3]();
