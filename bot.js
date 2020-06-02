
const { Telegraf } = require('telegraf')

var Jimp = require("jimp");
//var fontManager = require('font-manager');


const bot = new Telegraf('1190510743:AAHaYn4mrzuZJzdTI7u8zoW8FDl3NA_LNko')
//bot.start((ctx) => ctx.reply('Welcome!'))

//bot.help((ctx) => ctx.reply('Send me a sticker'))
//bot.on('sticker', (ctx) => ctx.reply('👍'))
//bot.hears('hi', (ctx) => ctx.reply('Hey there'))
/*
bot.command(['mycommand', 'MyCommand', 'MYCOMMAND'], (ctx) => {
    ctx.reply('MY CUSTOM COMMAND!!')
})

bot.hears('computer', (ctx) => {
    ctx.reply('Hola soy tu computadora....!!')
})
*/
/*
bot.on('text', (ctx) => {
    ctx.reply('Estas testeando....!!')
})

bot.on('sticker', (ctx) => {
    ctx.reply('Te gustan los stickers....!!')
})
*/
/*
bot.command('stream', (ctx) => {
    var fs = require('fs');
    var filename = 'Arturo.png';

    var text = fs.readFileSync(filename, 'utf8');
    ctx.replyWithPhoto({ source: fs.createReadStream('Arturo.png') })
})
*/




bot.mention('@stream', (ctx) => {
    var fs = require('fs');
    var filename = 'https://www.jotdown.es/wp-content/uploads/2015/12/Arturo-P%C3%A9rez-Reverte-para-Jot-Down.jpg';



    console.log('Aqui el contexto');
    var loquehadicho = ctx.update.message.text;
    var res = loquehadicho.split(" ");
    console.log(res);
    var loadedImage;

   
    res.shift();
    var respuesta = '';
    res.forEach(x => {

        respuesta = respuesta.concat(x);
        respuesta = respuesta.concat(' ');

    });


    console.log('La respuesta es: ');
    console.log(respuesta);

    //respuesta = respuesta.concat('Arturo Peréz Reverte')
  
    Jimp.read(filename)
    .then(function (image) {
        loadedImage = image;
        image.getBuffer(Jimp.PNG_FILTER_AUTO, function(err, buffer){
            if(err){
                console.log(err)
            } else {
                console.log('buffer: ', buffer)
            }
        })
        return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    })
    .then(function (font) {
        loadedImage.print(font, 10, 10, respuesta, 500)
                   .write(filename);
    })
    .catch(function (err) {
        console.error(err);
    });

    
    Jimp.read(filename)
    .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    })
    .then(function (font) {
        loadedImage.print(font, 10, 450, 'Arturo Peréz Reverte', 700)
                   .write(filename);
    })
    .catch(function (err) {
        console.error(err);
    });

    

    var text = fs.readFileSync(filename, 'utf8');
    ctx.replyWithPhoto({ source: fs.createReadStream('https://www.jotdown.es/wp-content/uploads/2015/12/Arturo-P%C3%A9rez-Reverte-para-Jot-Down.jpg') })

})
 

bot.launch()