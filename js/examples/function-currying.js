var checkForSlang = function(listOfSlang, dialogue) {
  var hasSlang = false;

  for (var i = 0; i < listOfSlang.length; i++) {
    if (dialogue.indexOf(listOfSlang[i]) !== -1) {
      hasSlang = true;
      break;
    }
  }

  return hasSlang;
}.bind(this, ['idiot', 'dumb', 'silly']);

var hasSlang = checkForSlang('You are too smart to be dumb');

if (hasSlang) {
  console.log('1 --> This dialogue has a slang');
}

hasSlang = checkForSlang('You are too retard to be smart');

if (hasSlang) {
  console.log('2 --> This dialogue has a slang');
}
