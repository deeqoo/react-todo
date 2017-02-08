var moment = require('moment');
console.log(moment().format());

// Unix time stamp time
// January 1st 1970 @12:00 -> 0;

var now = moment();

console.log('current time stamp', now.unix());
var timeStamp = now.unix();
var currentMoment = moment.unix(timeStamp);
// console.log('current moment', currentMoment.format('MMM D, YY @ hh:mm a'));
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
