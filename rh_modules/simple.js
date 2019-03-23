//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};


//_________________PART MANAGER (OPCIONAL)
exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
exports.RH_IGNORE_COMMANDS=false;//add this line to ignore all commands from this module
module.exports.RH_BOOTS=false;//add this line to ignore all boots from this module
module.exports.RH_IGNORE_EVENTS=false;//add this line to ignore all events from this module
module.exports.RH_IGNORE_EVENTS_PRIMITIVE=false;//add this line to ignore all events_primitive from this module



//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//

//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};

module.exports.commands.someCommand={aliase:'aliase_for_command', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
}catch(err){console.log(err);};}};//

// ...


//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

module.exports.events.someEvent={ run:async(client,event_parametrs)=>{try{
    //code to execut then event occurs
}catch(err){console.log(err);};}};//

// ...
//_________________________________________EVENTS_PART_END__________________________________________

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};

module.exports.events_primitive.SOME_EVENT_NAME={run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
