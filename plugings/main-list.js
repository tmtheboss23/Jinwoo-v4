let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

  let pp = './assets/A.jpg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)

  let lkr
  switch (command) {
    case 'listmenu':
    case 'menulist':
      lkr ='*Get ready for the ride, here are your ticket options:*\n\n' +
        '🌅 *' +
        usedPrefix +
        "botmenu* - The Bot's secret control panel.\n\n" +
        '🖲️ *' +
        usedPrefix +
        "ownermenu* - Yep, that's for you, Boss!\n\n" +
        '🛫 *' +
        usedPrefix +
        'groupmenu* - Groups to unite people.\n\n' +
        '🗂️ *' +
        usedPrefix +
        "dlmenu* - 'DL' stands for 'Delicious Loot'.\n\n" +
        '🎭 *' +
        usedPrefix +
        "funmenu* - The bot's party hat. Games, jokes and instant ROFLs.\n\n" +
        '💵 *' +
        usedPrefix +
        'economy* - Your personal vault of virtual economy.\n\n' +
        '🎮 *' +
        usedPrefix +
        'gamemenu* - Enter the gaming arena.\n\n' +
        '🫐 *' +
        usedPrefix +
        'stickermenu* - A rainbow of stickers.\n\n' +
        '🪙 *' +
        usedPrefix +
        "toolsmenu* - Your handy-dandy toolkit.\n\n" +
        '🧲 *' +
        usedPrefix +
        'logomenu* - Create a logo that screams You.\n\n' +
        '💟 *' +
        usedPrefix +
        'nsfwmenu* - The After Dark menu.\n\n' +
        '🌀 *' +
        usedPrefix +
        'aimenu* - Your Personal Artificial Intelligence Copilots.\n\n' +
        '🎧 *' +
        usedPrefix +
        'aeditor* - Tune The Mp3/Audio As You Wish.\n\n' +
         '🎉 *' +
        usedPrefix +
        'animemenu* - Animated Images,Stickers and Videos.\n\n' +
         '🍒 *' +
        usedPrefix +
        'reactions* - Anime reactions menu for group.\n\n' +
        '🪁 *' +
        usedPrefix +
        'infoanime* - Full Information About Animes Like imdb.\n\n' +
        '💡 *' +
        usedPrefix +
        'imagen* - Create Images and designs based on your thoughts/prompts.\n\n' +
        '🃏 *' +
        usedPrefix +
        'randompic* - Random Images you might like and love.\n\n' +
        '🏖️ *' +
        usedPrefix +
        'textpro* - Generate Beautiful Logos Using Text Of Your Choice.\n\n' +
        '🎥 *' +
        usedPrefix +
        'randomvid* - Random Videos you might like and love.\n\n' +
        '🖍️ *' +
        usedPrefix +
        'fancy* - Fancy text generator Menu.' 
        break

    case 'botmenu':
      lkr = `
╭──❍ [ʙᴏᴛ ᴍᴇɴᴜ] ❍
┊ • *allmenu*
┊ • *alive*
┊ • *autoreact*
┇ • *blocklist*
┇ • *botinfo*
┇ • *donate*
┇ • *gita*
┇ • *groups*
┇ • *language*
┇ • *listmenu*
┇ • *listprem*
┇ • *listrent*
┇ • *menu*
┇ • *menu2*
┇ • *menu3*
┇ • *menu4*
┇ • *mrcs*
┇ • *owner*
┇ • *ping*
┇ • *quran*
┇ • *rentbot*
┇ • *runtime*
┇ • *server*
┇ • *speedtest*
┇ • *stoprent*
┇ • *uptime*
╰──『 *ᴊɪɴᴡᴏᴏ-ᴠ4* 』─❍` //   
 break

 case 'logosmaker':
 case 'ephoto':
 case 'textpro':
      lkr=`
╭───『 *TEXTPRO* 』─❍
┇ • *3dsilver*
┇ • *balon*
┇ • *blackpink*
┇ • *color*
┇ • *circle*
┇ • *cubic*
┇ • *foggy*
┇ • *galaxy*
┇ • *galaxy2*
┇ • *gaming*
┇ • *gold*
┇ • *golden*
┇ • *gsilver*
┇ • *hacker*
┇ • *jewel*
┇ • *logomaker*
┇ • *matrix*
┇ • *metal*
┇ • *metallic*
┇ • *mascot*
┇ • *nigeria*
┇ • *papercut*
┇ • *sand*
┇ • *splat*
┇ • *snake*
┇ • *star*
┇ • *typo*
┇ • *wgalaxy*
┇ • *wings*
╰──『 *ᴊɪɴᴡᴏᴏ-ᴠ4* 』─❍` //
 break
      case 'imagen':
      case 'imagenai':
      lkr=`
╭───『 *IMAGEN* 』─❍
┇ • *animefy*
┇ • *cartoon*
┇ • *dalle*
┇ • *hercai-lexica*
┇ • *imagev3*
┇ • *lexica*
┇ • *prodia*
┇ • *raava*
┇ • *shonin*
┇ • *simurg*
┇ • *v2beta*
╰──『 *ᴊɪɴᴡᴏᴏ-ᴠ4* 』─❍` //
 break
    case 'ownermenu':
      lkr = `
╭───『 *OWNER* 』─❍
┇ • *addowner*
┇ • *addprem*
┇ • *addsudo*
┇ • *afk*
┇ • *allow*
┇ • *allvars*
┇ • *autoeract*
┇ • *banchat*
┇ • *ban*
┇ • *banuser*
┇ • *broadcast*
┇ • *broadcastgc*
┇ • *clearchat*
┇ • *cleartmp*
┇ • *delcmd*
┇ • *delowner*
┇ • *delprem*
┇ • *delsudo*
┇ • *enable*
┇ • *fakereply*
┇ • *fullpp*
┇ • *getfile*
┇ • *getmsg*
┇ • *getplugin*
┇ • *intro*
┇ • *inspect*
┇ • *join*
┇ • *listban*
┇ • *listcmd*
┇ • *listplugins*
┇ • *logout*
┇ • *readviewonce*
┇ • *remove*
┇ • *restart*
┇ • *save*
┇ • *savecontact*
┇ • *savefile*
┇ • *setppbot*
┇ • *setprefix*
┇ • *setprivacy*
┇ • *unban*
┇ • *unbanuser*
┇ • *unbanchat*
┇ • *update*
┇ • *var*
┇ • *resetprefix*
╰──『 *ᴊɪɴᴡᴏɪ ᴠ4* 』─❍` //
      break
      case 'randompic':
      lkr = `
╭───『 *RandomPic* 』─❍
┇ • *aesthetic*
┇ • *antiwork*
┇ • *bike*
┇ • *blackpink3*
┇ • *boneka*
┇ • *car*
┇ • *cat*
┇ • *chinese*
┇ • *cosplay2*
┇ • *doggo*
┇ • *girl*
┇ • *hijab*
┇ • *indo*
┇ • *japanese*
┇ • *justina*
┇ • *kayes*
┇ • *korean*
┇ • *kpop*
┇ • *malay*
┇ • *malaysia*
┇ • *notnot*
┇ • *person*
┇ • *profile2*
┇ • *pubg*
┇ • *random*
┇ • *random2*
┇ • *ryujin*
┇ • *thai*
┇ • *ulzzanggirl*
┇ • *ulzzangboy*
┇ • *vietnamese*
┇ • *wallhp*
┇ • *wallml*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //  
      break
      case 'randomvid':
      lkr = `
╭───『 *RandomVid* 』─❍
┇ • *tiktokbocil*
┇ • *tiktokgirl*
┇ • *tiktokghea*
┇ • *tiktokkayes*
┇ • *tiktoknukhty*
┇ • *tiktoknotnot*
┇ • *tiktokpanrika*
┇ • *tiktoksantuy*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'groupmenu':
      lkr = `
╭───『 *GROUP* 』─❍
┇ • *add*
┇ • *admins*
┇ • *antilink*
┇ • *delete*
┇ • *demote*
┇ • *disable*
┇ • *enable*
┇ • *group*
┇ • *groupinfo*
┇ • *kick*
┇ • *link*
┇ • *mysn*
┇ • *notify*
┇ • *poll*
┇ • *promote*
┇ • *register*
┇ • *resetlink*
┇ • *setbye*
┇ • *setdesc*
┇ • *setname*
┇ • *setpp*
┇ • *setwelcome*
┇ • *ship*
┇ • *tagall*
┇ • *totag*
┇ • *warn*
┇ • *warns*
┇ • *unreg*
┇ • *unwarn*
┇ • *wyr*
┇ • *toxic*
┇ • *delwarn*
┇ • *hidetag*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'downloadermenu':
    case 'dlmenu':
    case 'downloads':
      lkr = `
╭───『 *DOWNLOAD* 』─❍
┇ • *apkdl*
┇ • *apksearch*
┇ • *audio*
┇ • *capcut*
┇ • *dlstatus*
┇ • *facebook*
┇ • *gdrive*
┇ • *gimage*
┇ • *gitclone*
┇ • *githubdl*
┇ • *githubstalk*
┇ • *igstory*
┇ • *igstalk*
┇ • *insta*
┇ • *itunes*
┇ • *likee*
┇ • *mediafire*
┇ • *mega*
┇ • *npmstalk*
┇ • *pinterest*
┇ • *pinterest2*
┇ • *play*
┇ • *play2*
┇ • *play5*
┇ • *playstore*
┇ • *playvid*
┇ • *ringtone*
┇ • *rnekos*
┇ • *rwall*
┇ • *swdl*
┇ • *threads*
┇ • *tiktok*
┇ • *ttstalk*
┇ • *twitter*
┇ • *video*
┇ • *wallpapers*
┇ • *ytmp3*
┇ • *ytmp4*
┇ • *ytsearch*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'economymenu':
    case 'economy':
      lkr = `
╭───『 *ECONOMY* 』─❍
┇ • *addgold*
┇ • *addxp*
┇ • *adventure*
┇ • *balance*
┇ • *bank*
┇ • *bet*
┇ • *buyall*
┇ • *buych*
┇ • *claim/daily*
┇ • *craft*
┇ • *deposit*
┇ • *give*
┇ • *heal*
┇ • *leaderboard*
┇ • *levelup*
┇ • *mine*
┇ • *monthly*
┇ • *opencrate*
┇ • *rob*
┇ • *sell*
┇ • *shop*
┇ • *todiamond*
┇ • *tomoney*
┇ • *transfer*
┇ • *wallet*
┇ • *weekly*
┇ • *withdraw*
╰────────❍` // 
      break
    case 'funmenu':
      lkr = `
╭───『 *FUN* 』─❍
┇ • *alexa*
┇ • *character*
┇ • *dare*
┇ • *flirt*
┇ • *gay*
┇ • *hack*
┇ • *hornycard*
┇ • *lolicon*
┇ • *shayeri*
┇ • *simpcard*
┇ • *ship*
┇ • *stupid*
┇ • *truth*
┇ • *waste*
┇ • *ytcomment*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
      case 'animereactions':
case 'reactions':
lkr=`
╭───『 *REACTIONS* 』─❍
┇ • *awoo*
┇ • *bite*
┇ • *blush*
┇ • *bonk*
┇ • *bully*
┇ • *cringe*
┇ • *cry*
┇ • *cuddle*
┇ • *dance*
┇ • *glomp*
┇ • *happy*
┇ • *handhold*
┇ • *highfive*
┇ • *hug*
┇ • *kill*
┇ • *kiss*
┇ • *lick*
┇ • *nom*
┇ • *poke*
┇ • *pat*
┇ • *smug*
┇ • *slap*
┇ • *wave*
┇ • *wink*
┇ • *yeet*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'animemenu':
      lkr = `
╭───『 *ANIME* 』─❍
┇ • *akira*
┇ • *akiyama*
┇ • *anna*
┇ • *asuna*
┇ • *ayuzawa*
┇ • *boruto*
┇ • *chiho*
┇ • *chitoge*
┇ • *couplepp*
┇ • *deidara*
┇ • *elaina*
┇ • *emilia*
┇ • *erza*
┇ • *hestia*
┇ • *hinata*
┇ • *hornycard*
┇ • *inori*
┇ • *itachi*
┇ • *kagura*
┇ • *kaori*
┇ • *keneki*
┇ • *kotori*
┇ • *loli*
┇ • *madara*
┇ • *mikasa*
┇ • *minato*
┇ • *miku*
┇ • *naruto*
┇ • *neko*
┇ • *nezuko*
┇ • *sagiri*
┇ • *sakura*
┇ • *sasuke*
┇ • *toanime*
┇ • *waifu*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
      case 'infoanime':
      lkr = `
╭───『 *INFO ANIME* 』─❍
┇ • *anime akira*
┇ • *anime akiyama*
┇ • *anime anna*
┇ • *anime asuna*
┇ • *anime ayuzawa*
┇ • *anime boruto*
┇ • *anime chiho*
┇ • *anime chitoge*
┇ • *anime deidara*
┇ • *anime elaina*
┇ • *anime emilia*
┇ • *anime erza*
┇ • *anime hestia*
┇ • *anime hinata*
┇ • *anime inori*
┇ • *anime isuzu*
┇ • *anime itachi*
┇ • *anime kagura*
┇ • *anime kaori*
┇ • *anime keneki*
┇ • *anime kotori*
┇ • *anime loli*
┇ • *anime madara*
┇ • *anime mikasa*
┇ • *anime minato*
┇ • *anime miku*
┇ • *anime naruto*
┇ • *anime neko*
┇ • *anime nezuko*
┇ • *anime sakura*
┇ • *anime sagiri*
┇ • *anime sasuke*
┇ • *anime waifu*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'gamemenu':
    case 'gamesmenu':
      lkr = `
╭───『 *GAME* 』─❍
┇ • *casino*
┇ • *chess*
┇ • *cock-fight*
┇ • *delttt*
┇ • *fhint*
┇ • *guessflag*
┇ • *math*
┇ • *math answer*
┇ • *ppt*
┇ • *roulette*
┇ • *slot*
┇ • *tictactoe*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'stickermenu':
      lkr = `
╭───『 *STICKER* 』─❍
┇ • *attp*
┇ • *attp2*
┇ • *attp3*
┇ • *emojimix*
┇ • *getsticker*
┇ • *quote*
┇ • *quoted*
┇ • *rc*
┇ • *scircle*
┇ • *s*
┇ • *smaker*
┇ • *smeme*
┇ • *stickers*
┇ • *take*
┇ • *tenor*
┇ • *tgsticker*
┇ • *toimg*
┇ • *tovid*
┇ • *trigger*
┇ • *ttp*
┇ • *ttp2*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'toolmenu':
    case 'toolsmenu':
      lkr = `
╭───『 *TOOLS* 』─❍
┇ • *android*
┇ • *autosticker*
┇ • *base64*
┇ • *calc*
┇ • *carbon*
┇ • *checkmail*
┇ • *course*
┇ • *define*
┇ • *element*
┇ • *enhance*
┇ • *fancy*
┇ • *filelength*
┇ • *google*
┇ • *googleit*
┇ • *happymod*
┇ • *imdb*
┇ • *itunes*
┇ • *linux*
┇ • *lyrics*
┇ • *nowa*
┇ • *pokedex*
┇ • *qrmaker*
┇ • *quote*
┇ • *readmore*
┇ • *readqr*
┇ • *readvo*
┇ • *reddit*
┇ • *removebg*
┇ • *remini*
┇ • *ssweb*
┇ • *styletext*
┇ • *technews*
┇ • *tinyurl*
┇ • *tocartoon*
┇ • *topdf*
┇ • *tourl*
┇ • *trace*
┇ • *translate*
┇ • *true*
┇ • *wa*
┇ • *weather*
┇ • *whatmusic*
┇ • *wattpad*
┇ • *wikipedia*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
break
case 'aeditor':
case 'audioeditor':
lkr=`
╭───『 *AUDIOS* 』─❍
┇ • *bass*
┇ • *blown*
┇ • *chipmunk*
┇ • *deep*
┇ • *earrape*
┇ • *fast*
┇ • *nightcore*
┇ • *reverse*
┇ • *robot*
┇ • *slow*
┇ • *smooth*
┇ • *squirrel*
┇ • *tupai*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'nsfwmenu': 
      lkr = `
╭───『 *NSFW* 』─❍
┇ • *genshin*
┇ • *swimsuit*
┇ • *schoolswimsuit*
┇ • *white*
┇ • *barefoot*
┇ • *touhou*
┇ • *gamecg*
┇ • *hololive*
┇ • *uncensored*
┇ • *sunglasses*
┇ • *glasses*
┇ • *weapon*
┇ • *shirtlift*
┇ • *chain*
┇ • *fingering*
┇ • *flatchest*
┇ • *torncloth*
┇ • *bondage*
┇ • *demon*
┇ • *wet*
┇ • *pantypull*
┇ • *headdress*
┇ • *headphone*
┇ • *tie*
┇ • *anusview*
┇ • *shorts*
┇ • *stokings*
┇ • *topless*
┇ • *beach*
┇ • *bunnygirl*
┇ • *bunnyear*
┇ • *idol*
┇ • *vampire*
┇ • *gun*
┇ • *maid*
┇ • *bra*
┇ • *nobra*
┇ • *bikini*
┇ • *whitehair*
┇ • *blonde*
┇ • *pinkhair*
┇ • *bed*
┇ • *ponytail*
┇ • *nude*
┇ • *dress*
┇ • *underwear*
┇ • *foxgirl*
┇ • *uniform*
┇ • *skirt*
┇ • *sex*
┇ • *sex2*
┇ • *sex3*
┇ • *breast*
┇ • *twintail*
┇ • *spreadpussy*
┇ • *tears*
┇ • *seethrough*
┇ • *breasthold*
┇ • *drunk*
┇ • *fateseries*
┇ • *spreadlegs*
┇ • *openshirt*
┇ • *headband*
┇ • *food*
┇ • *close*
┇ • *tree*
┇ • *nipples*
┇ • *erectnipples*
┇ • *horns*
┇ • *greenhair*
┇ • *wolfgirl*
┇ • *catgirl*
┇ • *nsfw*
┇ • *ass*
┇ • *boobs*
┇ • *lesbian*
┇ • *pussy*
┇ • *pack*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    case 'logomenu':
    case 'makermenu':
      lkr = `
╭───『 *MAKER* 』─❍
┇ • *blur*
┇ • *difuminar2*
┇ • *enhance*
┇ • *gfx1*
┇ • *gfx10*
┇ • *gfx11*
┇ • *gfx12*
┇ • *gfx2*
┇ • *gfx3*
┇ • *gfx4*
┇ • *gfx5*
┇ • *gfx6*
┇ • *gfx7*
┇ • *gfx8*
┇ • *gfx9*
┇ • *hornylicense*
┇ • *itssostupid*
┇ • *iss*
┇ • *lolicon*
┇ • *logololi*
┇ • *simpcard*
┇ • *stupid*
┇ • *tweet <comment>*
┇ • *ytcomment <comment>*
╰──『 *ᴊɪɴᴡᴏᴏ ᴠ4* 』─❍` //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`
  }

  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })

  let done = '👍'
  m.react(done)
}

handler.help = [
  'listmenu',
  'menulist',
  'aimenu',
  'animereactions',
  'reactions',
  'imagen',
  'textpro',
  'textmaker',
  'logosmaker',
  'imagenai',
  'animemenu',
  'aeditor',
  'audioeditor',
  'infoanime',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloads',
  'downloadermenu',
  'economymenu',
  'economy',
  'funmenu',
  'gamemenu',
  'gamesmenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'makermenu',
  'randompic',
  'randomvid',
  'toolsmenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'listmenu',
  'menulist',
  'aimenu',
  'animereactions',
  'reactions',
  'imagen',
  'textpro',
  'textmaker',
  'logosmaker',
  'imagenai',
  'animemenu',
  'aeditor',
  'audioeditor',
  'infoanime',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloads',
  'downloadermenu',
  'economymenu',
  'economy',
  'funmenu',
  'gamemenu',
  'gamesmenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'makermenu',
  'randompic',
  'randomvid',
  'toolsmenu',
  'toolmenu',
]

export default handler
