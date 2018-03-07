const gcm = require('node-gcm');

module.exports = {
    sendAndroid: function(device_id, manager, employee, branch, branch_location, duty)
    {
        var registrationTokens = [];
        registrationTokens.push(device_id);
        let message = new gcm.Message(
        {
            notification:
            {
                title: 'New duty completed!!',
                body: 'Hello ' + manager + ', ' + employee + ' has completed the duty ' + duty + ' in the branch: ' + branch + ' and location: ' + branch_location,
                sound: 'default',
                vibrationPattern: [300, 150, 300],
                contentAvailable: true,
                collapseKey: 'notify',
                summaryText: 'Hello ' + manager + ', ' + employee + ' has completed the duty ' + duty + ' in the branch: ' + branch + ' and location: ' + branch_location,
                notId: parseInt(Math.random() * new Date().getSeconds(), 10)
            }
        });
        let sender = new gcm.Sender('AIzaSyDwfGV7UqGf_Y-v2_HPNcJNO3cEtciNPCs');
        sender.send(message,
            {
                registrationTokens: registrationTokens
            },
            2,
            function(err, response)
            {
                if (err) console.error(err);
                else console.log(response);
            });
    },
    sendIos: function()
    {
        //aqui va el codigo para Andres!
    }
};