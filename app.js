require('./connection.js')();

// from website to webchat
bot.on('event', (event) => {
    // console.log(event);
    var msg = new builder.Message().address(event.address);
    msg.textLocale("en-us");
    if (event.name === "enterName") {
        msg.text("Hi! " + event.value);
    }
    bot.send(msg); // As session is absent,so bot is replying
});

// from webchat to website
bot.dialog('color', [(session) => {
    var reply = createEvent('changeHeader', session.message.text, session.message.address);
    session.endDialog(reply);
}]).triggerAction({
    matches: /setChange/i
})

// for creating event for webchat
function createEvent(eventName, value, address) {
    var msg = new builder.Message().address(address);
    msg.data.type = 'event';
    msg.data.name = eventName;
    msg.data.value = value;

    console.log('function check', msg);
    return msg;
}