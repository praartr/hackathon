//var twilio = require('twilio');
 
// Create a new REST API client to make authenticated requests against the
// twilio back end
//var client = require('twilio')('ACd0722f1dd60dab2383adc133f95d471e','d799b5d454f467e4ec4d6525241fd418');

var client = require('twilio')('AC3f8fbe215a5705f5bdc551476dc28cbd', 'f25099c27851a141330cec94ef0218cb');

var numbers = ['+19254445058','+18646439346'];

// Pass in parameters to the REST API using an object literal notation. The
// REST client will handle authentication and response serialzation for you.
function SendMessage(elem, index, numbers)
{
client.sendSms({
	
    to: elem,
    from:'+12035833786',
    body:'This is an incoming message'
}, function(error, message) {
    // The HTTP request to Twilio will run asynchronously. This callback
    // function will be called when a response is received from Twilio
    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "falsy"
    if (!error) {
        // The second argument to the callback will contain the information
        // sent back by Twilio for the request. In this case, it is the
        // information about the text messsage you just sent:
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
 
        console.log('Message sent on:'+message.dateCreated+'to:' + elem);
       // console.log();
    } else {
        console.log('Oops! There was an error.',error);
    }
});
}
numbers.forEach(SendMessage);
/*client.messages("SM1385fea29472f4ab04a2e9831e58fb1c").get(function(err, message) {
    console.log(message.body);
});
/*client.messages("SM75c19807ca7671e2136aa8d7f7ef9c9e").post({
    body: ""
}, function(err, message) {
    // will be an empty string
	
	 if (!err) {
		 console.log(message.body);
    process.stdout.write(message.body);
	 }
	 else {
		  console.log('Oops! There was an error.',err);
	 }
});
*/