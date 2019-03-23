module.exports.commands = {};

module.exports.commands.printHelloWorld={aliase:'hello', run:async(client,message,args)=>{try{
    
        message.channel.send('Hello World!!!');

}catch(err){console.log(err);};}};//
