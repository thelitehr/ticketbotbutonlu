const chalk = require('chalk');
const moment = require('moment');


module.exports = client => {//Main Development
var oyun = [
        `Main Development Tarafından Geliştirildi`
    ];

    setInterval(function() {//main development

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "" );
        }, 2 * 4000 );
  
  client.user.setStatus("dnd");
}; 