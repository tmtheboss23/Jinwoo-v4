import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

import dotenv from 'dotenv'
dotenv.config()

const defaultOwner = '27764054171';


// Check for the OWNERS environment variable; if not found, use the default
const ownervb = process.env.OWNERS || process.env.OWNER_NUMBER || '27764054171' ; // put your number here

const ownerlist = ownervb.split(';');

global.owner = [];
for (let i = 0; i < ownerlist.length; i++) {
    global.owner.push([ownerlist[i], true]);
}
//
global.botname = process.env.BOTNAME || 'ᴊɪɴᴡᴏᴏ ᴠ4';
global.pairingNumber = process.env.BOT_NUMBER || '27764054171' ;  // put your number here
global.SESSION_ID = process.env.SESSION_ID || '' ;  // put your session id here

global.mods = []
global.prems = []
global.allowed = ['263714757857', '263780934873']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [
  '29d4b59a4aa687ca',
  '5LTV57azwaid7dXfz5fzJu',
  'cb15ed422c71a2fb',
  '5bd33b276d41d6b4',
  'HIRO',
  'kurrxd09',
  'ebb6251cc00f9c63',
]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.canal = 'https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A'


global.APIs = {
  // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz',
}
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api.fgmods.xyz': 'm2XBbNvz',
}

// Sticker WM
global.premium = 'true'
global.packname = 'ᴊɪɴᴡᴏᴏ ᴠ4'
global.author = 'ᴍᴀʟᴠɪɴ ᴋɪɴɢ'
global.menuvid = 'https://i.imgur.com/2Sp3cqD.mp4'
global.igfg = ' Follow on Instagram\nhttps://www.instagram.com/Techlord01'
global.dygp = 'https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A'
global.fgsc = 'https://github.com/XdKing2/Jinwoo-v4'
global.fgyt = 'https://youtube.com/@malvintech2'
global.fgpyp = 'https://github.com/XdKing2'
global.fglog = 'https://files.catbox.moe/bqs70b.jpg'
global.thumb = fs.readFileSync('./assets/jin.jpg')

global.wait = '⏳'
global.rwait = '⏳'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🤩'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
