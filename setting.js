/*
BASE : HW MODS
RECODE : AKMAL MODS 🔥
WA REKBER : 62859162612719
*/

const fs = require('fs')
const chalk = require('chalk')

global.owner = "6282194946235"
global.namabot = "BotpepaXv4"
global.botname = "BotpepaXv4"
global.autoJoin = true
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.thumb = fs.readFileSync("./thumb.png")
global.sessionName = 'zhirasession' //Gausah Juga
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "PepaxJB"

global.namastore = "PepaxJB"
global.nodana = "085729415703"
global.nogopay = "Belum Ada"
global.noovo = "Belum Ada"
global.qris = "Minta Saja Jika ingin Qris"

global.youtubehamxzz = "----"
global.instagramzhamxz = "-----"
global.tiktokzhir = "TIDAK PUNYA YA"
global.grupjbzhir = "https://whatsapp.com/channel/0029VaZjmLq2v1IyjGKp6P0U"
const mess = {
   wait: "Sabar Pex lagi proses",
   success: "sukses✅ Pex",
   save: "DONE SV✅",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Pex?",
       link: "Link Nya Mana Pex?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Tolol Fitur Khusus Didalam Grup!",
       private: "Fitur Khusus Private!",
       owner: "Pepex Fitur Khusus Owner!",
       admin: "Fitur Khusus Admin Grup!",
       badmin: "Bot Bukan Admin Grup!",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})