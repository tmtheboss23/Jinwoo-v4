
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/bqs70b.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://files.catbox.moe/bqs70b.jpg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://files.catbox.moe/bqs70b.jpg', sourceUrl: 'https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://files.catbox.moe/bqs70b.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'INSTAGRAM', body: 'Keep bot alive', thumbnailUrl: 'https://files.catbox.moe/bqs70b.jpg', sourceUrl: 'https://instagram.com/Techlord01' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://files.catbox.moe/bqs70b.jpg', mediaType: 'VIDEO', description: 'SUBSCRIBE : YT CHANNEL', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://files.catbox.moe/bqs70b.jpg', sourceUrl: 'https://youtube.com/@malvintech2' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://files.catbox.moe/bqs70b.jpg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'FOLLOW CHANNEL', body: '© TOHID TECH', thumbnailUrl: 'https://files.catbox.moe/bqs70b.jpg.jpg', sourceUrl: 'https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z' }}}
    
} 
export default handler
