const FCM = require('fcm-node');

let serverKey = '';
const fcm = new FCM(serverKey);

const message = {
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

fcm.send(message, (err, res) => {
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", res);
    }
});
