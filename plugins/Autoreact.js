const emojis = ['💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', "❤️‍", '♥️', '🎈', '🎁', '💌', '💐', '😘', '🤗', '🌸', '🌹', '🥀', '🌺', '🌼', '🌷', '🍁', '⭐️', '🌟', '😊', '🥰', '😍', '🤩', '☺️'];
let AUTO_REACT = false;
let lastReactedTime = null;
const isOwner = (_0x56ae2c, _0x299888) => {
  const _0x51e878 = [_0x299888.decodeJid(global.conn.user.id), ...global.owner.map(([_0x5b785c]) => _0x5b785c)].map(_0xb55cc9 => _0xb55cc9.replace(/[^0-9]/g, '') + "@s.whatsapp.net");
  return _0x51e878.includes(_0x56ae2c.sender) || _0x56ae2c.fromMe;
};
async function doReact(_0x15df11, _0x46bbf4, _0x2cf009) {
  try {
    console.log("Reacting with emoji: " + _0x15df11);
    const _0x2218a5 = {
      'react': {
        'text': _0x15df11,
        'key': _0x46bbf4.key
      }
    };
    await _0x2cf009.sendMessage(_0x46bbf4.key.remoteJid, _0x2218a5);
  } catch (_0x2963f9) {
    console.error("Error during Auto Reaction", _0x2963f9);
  }
}
const handler = async (_0x237d2b, {
  conn: _0x3371ad,
  args: _0x39b493,
  command: _0x332c9d
}) => {
  try {
    if (_0x332c9d === "autoreact") {
      if (_0x39b493[0] === 'on') {
        AUTO_REACT = true;
        lastReactedTime = Date.now();
        await _0x3371ad.sendMessage(_0x237d2b.key.remoteJid, {
          'text': "Auto-react enabled ✅\n\n*𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ᴊɪɴᴡᴏᴏ-ᴠ4*"
        }, {
          'quoted': _0x237d2b
        });
        console.log("Auto-react enabled ✅\n\n𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © 𝚃𝙾𝙷𝙸𝙳-v4");
      } else if (_0x39b493[0] === "off") {
        AUTO_REACT = false;
        await _0x3371ad.sendMessage(_0x237d2b.key.remoteJid, {
          'text': "Auto-react disabled ❌\n\n*𝙿𝙾𝚆𝙴𝚁𝙴𝙰𝙽 𝙱𝚈 © jinᴏᴏ-ᴠ4*"
        }, {
          'quoted': _0x237d2b
        });
        console.log("Auto-react disabled ❌\n\n𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ᴊɪɴᴡᴏᴏᴊɪɴ-ᴠ4");
      } else {
        await _0x3371ad.sendMessage(_0x237d2b.key.remoteJid, {
          'text': "Usage:\n- autoreact on\n- autoreact off\n\n*𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ᴍᴀʟᴠɪɴ-𝙺ᴠ4*"
        }, {
          'quoted': _0x237d2b
        });
      }
      return;
    }
    if (AUTO_REACT && !isOwner(_0x237d2b, _0x3371ad)) {
      const _0x1a8371 = Date.now();
      if (!lastReactedTime || _0x1a8371 - lastReactedTime > 2000) {
        const _0x37b078 = /^[!#.$%^&*+=?<>]/.test(_0x237d2b.body || '');
        if (!_0x37b078) {
          const _0x20bc9f = emojis[Math.floor(Math.random() * emojis.length)];
          await doReact(_0x20bc9f, _0x237d2b, _0x3371ad);
          lastReactedTime = _0x1a8371;
        }
      }
    }
  } catch (_0x3b190d) {
    console.error("Handler error:", _0x3b190d);
  }
};
handler.help = ["autoreact"];
handler.tags = ["main"];
handler.command = /^(autoreact)$/i;
conn.ev.on("messages.upsert", async _0x466d76 => {
  if (_0x466d76.type === "notify") {
    for (let _0x299510 of _0x466d76.messages) {
      await handler(_0x299510, {
        'conn': conn
      });
    }
  }
});
export default handler;