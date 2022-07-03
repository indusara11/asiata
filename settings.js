//════════════code═by═Alexa═════════════════════════════════════════//
//Don't change,copy
//© 2022 Alexa team.
//(ChamodKeshan)-(Tornymark)-(En-cuzier)
//═════════════Alexa═══════════════//

const fs = require('fs')
const chalk = require('chalk')

whatsalexa.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
whatsalexa.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', 
}
/*Add your details
change with my details,
add you details*/

whatsalexa.owner = ['947']
whatsalexa.premium = ['947']
whatsalexa.ownernomer = '947'
whatsalexa.ownername = 'NEUTROX'
whatsalexa.botname = 'Queen-Alexa-MD'
whatsalexa.footer = 'Alexa.'
whatsalexa.ig = 'https://github.com/En-cuzier'
whatsalexa.region = 'Sri Lanka, Colombo'
whatsalexa.sc = 'https://github.com/En-cuzier/Queen-Alexa-MD'
whatsalexa.myweb = 'https://youtu.com'
whatsalexa.packname = 'Queen-Alexa'
whatsalexa.author = 'NEUTROX'
whatsalexa.sessionName = 'session'
whatsalexa.prefa = ['','!','.','🐦','🐤','🗿']
whatsalexa.sp = '⭔'
whatsalexa.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In Process...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    whatsalexa.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   whatsalexa.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
whatsalexa.thumb = fs.readFileSync('./media/Alexa.jpg')
whatsalexa.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
whatsalexa.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
whatsalexa.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
whatsalexa.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
