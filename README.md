## Raw Handler. Commands, events, and boots generator. For discord API

### hello world
create file 'main.js' and put this code there
```js
    const Discord = require("discord.js");
    const client = new Discord.Client();
    const fs = require("fs");

    let RH=require(`./raw.js`);

    client.on("raw", (...args) => {try{
        RH.run(client,...args);
    }catch(err){console.log(err);}; });

   client.login(process.env.TOKEN_BOT);
```
create dir 'rh_modules' ,and put file 'hello_world.js' add there following code
```js
module.exports.commands = {};

module.exports.commands.printHelloWorld={aliase:'hello', run:async(client,message,args)=>{try{
    
        message.channel.send('Hello World!!!');

}catch(err){console.log(err);};}};//
```
run main.js file and send '!hello' 

## extended
```js

    const Discord = require("discord.js");
    const client = new Discord.Client();
    const fs = require("fs");
    client.SERVER_ID='111111111111111';//<-------PUT ID SERVER HERE

    let RH=require(`./raw.js`);


    RH.folder_name='rh_modules';//<-----NAME OF FOLDER THERE YOUR MODULES ARE
    //name of folder there are modules for build RH event handler;  default value:'rh_modules'

     RH.server_id=client.SERVER_ID;
   //set main server id, needed be set for fetching members and messages; default value:client.SERVER_ID;

    RH.prefix='!';
   //prefix for commands; default value: '!'

   RH.fetch_members=true;
   //true- fetching members from main server;false-not; default value:true;
 
    RH.fetch_messages=true;
   //true - fetching last 100 messages from each channel main server; default value:true;

    RH.log=true;
   //true-console log feedback on;false-console log feedback off; default value:'true'

    RH.dm_commands=false; 
   //true - allowed executing commands sending by DM generated by RH event handler; false - this commands not allowed; default value:false;

    
    let some_module = require(`./some_module_name.js`);
    RH.external_module.push(some_module);
    //including some external modules in building RH event handler proccess
   
   client.on("raw", (...args) => {try{
     RH.run(client,...args);
   }catch(err){console.log(err);}; });

   client.login(process.env.TOKEN_BOT);
```

## simple module example

```js

//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
     //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};


//_________________PART MANAGER (OPCIONAL)
//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
//exports.RH_IGNORE_COMMANDS=true;//add this line to ignore all commands from this module
//module.exports.RH_BOOTS=true;//add this line to ignore all boots from this module
//module.exports.RH_IGNORE_EVENTS=true;//add this line to ignore all events from this module
//module.exports.RH_IGNORE_EVENTS_PRIMITIVE=true;//add this line to ignore all events_primitive from this module


//___________________________ETERNAL_VARIABLE_PART
module.exports.e={};
   e.test="test";
//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//module.exports.boots.someBoot.RH_IGNORE=true;//add this line to ignore this command
//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};

module.exports.commands.someCommand={aliase:'aliase_for_command', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command
// ...


//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

module.exports.events.someEvent={ run:async(client,event_parametrs)=>{try{
    //code to execut then event occurs
}catch(err){console.log(err);};}};//
//module.exports.events.someEvent.RH_IGNORE=true;//add this line to ignore this event trigger
// ...
//_________________________________________EVENTS_PART_END__________________________________________

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};

module.exports.events_primitive.SOME_EVENT_NAME={run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//module.exports.events_primitive.SOME_EVENT_NAME.RH_IGNORE = true;//add this line to ignore this primitive event trigger

```
```ini
   EVENTS:
channelCreate
channelDelete
channelPinsUpdate
channelUpdate
clientUserGuildSettingsUpdate
clientUserSettingsUpdate
debug
disconnect
emojiCreate
emojiDelete
emojiUpdate
error
guildBanAdd
guildBanRemove
guildCreate
guildDelete
guildMemberAdd
guildMemberAvailable
guildMemberRemove
guildMembersChunk
guildMemberSpeaking
guildMemberUpdate
guildUnavailable
guildUpdate
message
messageDelete
messageDeleteBulk
messageReactionAdd
messageReactionRemove
messageReactionRemoveAll
messageUpdate
presenceUpdate
rateLimit
ready
reconnecting
resume
roleCreate
roleDelete
roleUpdate
typingStart
typingStop
userNoteUpdate
userUpdate
voiceStateUpdate
warn
Properties
//_________
EVENTS PRIMITIVE:(WSEvent)
READY
RESUMED
GUILD_SYNC
GUILD_CREATE
GUILD_DELETE
GUILD_UPDATE
GUILD_MEMBER_ADD
GUILD_MEMBER_REMOVE
GUILD_MEMBER_UPDATE
GUILD_MEMBERS_CHUNK
GUILD_ROLE_CREATE
GUILD_ROLE_DELETE
GUILD_ROLE_UPDATE
GUILD_BAN_ADD
GUILD_BAN_REMOVE
CHANNEL_CREATE
CHANNEL_DELETE
CHANNEL_UPDATE
CHANNEL_PINS_UPDATE
MESSAGE_CREATE
MESSAGE_DELETE
MESSAGE_UPDATE
MESSAGE_DELETE_BULK
MESSAGE_REACTION_ADD
MESSAGE_REACTION_REMOVE
MESSAGE_REACTION_REMOVE_ALL
USER_UPDATE
USER_NOTE_UPDATE
USER_SETTINGS_UPDATE
PRESENCE_UPDATE
VOICE_STATE_UPDATE
TYPING_START
VOICE_SERVER_UPDATE
RELATIONSHIP_ADD
RELATIONSHIP_REMOVE
```
//
read more about events,websocet events and client methods :https://discord.js.org

