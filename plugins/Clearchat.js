async function handler(m, { conn }) {



  conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)

  let a = await m.reply("Successfully deleted this chat!") 



}

handler.help = ['deletechat','cchat'],

handler.tags = ['owner'],

handler.command = /^(deletechat|delchat|dchat|clearchat|cleanchat)$/i

handler.owner = true

export default handler

  
