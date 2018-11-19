var $ = {};

(function($, str) {
  var name = 'blabla';
  var greeting = 'Hello' + ' ' + str;

  $.greeting = greeting;
})($, 'there');
