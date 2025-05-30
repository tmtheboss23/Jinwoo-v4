import _0x357291 from 'node-fetch';
const fetchWithRetry = async (_0x1b5780, _0x84289e, _0x2f743b = 3, _0x5818e3 = 1000) => {
  for (let _0x2a0f07 = 0; _0x2a0f07 < _0x2f743b; _0x2a0f07++) {
    const _0x149d72 = await _0x357291(_0x1b5780, _0x84289e);
    if (_0x149d72.ok) {
      return _0x149d72;
    }
    console.log("Retrying... (" + (_0x2a0f07 + 1) + ')');
    await new Promise(_0x49201a => setTimeout(_0x49201a, _0x5818e3));
  }
  throw new Error("Failed to fetch media content after retries");
};
const handler = async (_0x2db88a, {
  args: _0x2053d7,
  conn: _0x5373ae
}) => {
  if (!_0x2053d7.length) {
    await _0x2db88a.reply("Please provide a valid URL.");
    return;
  }
  const _0x3be7ec = _0x2053d7.join(" ");
  await _0x2db88a.react('⏳');
  try {
    const _0x11ef70 = "https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted-md&url=" + encodeURIComponent(_0x3be7ec);
    const _0x4363e2 = await fetchWithRetry(_0x11ef70, {
      'method': "GET",
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        'Accept': "application/json, text/plain, */*"
      }
    });
    const _0x220508 = await _0x4363e2.json();
    if (!_0x220508.success) {
      throw new Error("Failed to retrieve video details from the API.");
    }
    const _0x337e4d = _0x220508.result;
    const _0x305674 = _0x337e4d.download_url;
    const _0x19f3f7 = _0x337e4d.title || "Unknown Title";
    const _0x4b9ae6 = _0x337e4d.quality || "Unknown Quality";
    const _0x3e7874 = _0x337e4d.thumbail || '';
    const _0xd9dc23 = "*Media Details*\n\n" + ("*Title:* " + _0x19f3f7 + "\n") + ("*Quality:* " + _0x4b9ae6 + "\n\n") + "*𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 © ᴊɪɴᴡᴏᴏ-𝙰𝙸*";
    const _0x25f11a = await fetchWithRetry(_0x305674, {
      'headers': {
        'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        'Accept': "application/json, text/plain, */*"
      }
    });
    const _0x307eb0 = _0x25f11a.headers.get("content-type");
    if (!_0x307eb0 || !_0x307eb0.includes("video")) {
      throw new Error("Invalid content type received");
    }
    const _0xc8e09 = await _0x25f11a.arrayBuffer();
    const _0x1bf640 = Buffer.from(_0xc8e09);
    if (_0x1bf640.length === 0) {
      throw new Error("Downloaded file is empty");
    }
    await _0x5373ae.sendFile(_0x2db88a.chat, _0x1bf640, _0x19f3f7 + ".mp4", _0xd9dc23, _0x2db88a, false, {
      'mimetype': "video/mp4",
      'thumbnail': _0x3e7874
    });
    await _0x2db88a.react('✅');
  } catch (_0x3e008d) {
    console.error("Error fetching video:", _0x3e008d.message, _0x3e008d.stack);
    if (_0x3e008d.message !== "Downloaded file is empty") {
      await _0x2db88a.reply("An error occurred while fetching the video. Please try again later.");
      await _0x2db88a.react('❌');
    }
  }
};
handler.help = ["video", "mp4"];
handler.tags = ['dl'];
handler.command = ["video", "mp4"];
export default handler;