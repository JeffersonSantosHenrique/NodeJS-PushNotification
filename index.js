var FCM = require('fcm-node');

var serverKey = '';
var fcm = new FCM(serverKey);

var message = {
    to: '', 
    collapse_key: 'your_collapse_key',
    
    notification: {
        title: 'Title Jeh', 
        body: 'Body' 
    },
    
    data: {
        my_key: 'my value',
        my_another_key: 'my another value'
    }
};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});