import _0x4d1d03 from 'fs';
import _0x5378e7 from 'path';
import _0x42a341 from 'axios';
import _0x384324 from 'adm-zip';
import 'child_process';
let handler = async (_0x4bf81a, {
  conn: _0x4a093a,
  command: _0x2f6a16
}) => {
  console.log("Command received:", _0x2f6a16);
  try {
    await _0x4a093a.loadingMsg(_0x4bf81a.chat, "🔍 Checking for Jinwoo-v4 updates...", "Starting update process...", ['▬▭▭▭▭▭', "▬▬▭▭▭▭", "▬▬▬▭▭▭", '▬▬▬▬▭▭', "▬▬▬▬▬▭", "▬▬▬▬▬▬"], _0x4bf81a);
    const _0x49f181 = _0x5378e7.join(process.cwd(), "package.json");
    const _0x2d75bc = JSON.parse(_0x4d1d03.readFileSync(_0x49f181, "utf-8"));
    console.log("package.json loaded:", _0x2d75bc);
    const {
      data: _0x3c4887
    } = await _0x42a341.get("https://api.github.com/repos/XdKing2/Jinwoo-v4/commits/main");
    const _0x2d77f1 = _0x3c4887.sha;
    console.log("Latest commit hash:", _0x2d77f1);
    const _0x55cc26 = _0x2d75bc.commitHash || "unknown";
    console.log("Current commit hash:", _0x55cc26);
    if (_0x2d77f1 === _0x55cc26) {
      return _0x4bf81a.reply("```✅ Your Jinwoo-v4 bot is already up-to-date!```");
    }
    const _0x1a3be7 = ["Jinwoo-v4 Bot Updating...🚀", "📦 Downloading the latest code...", "📦 Extracting the latest code...", "🔄 Replacing files...", "🔄 Restarting the bot to apply updates..."];
    await _0x4a093a.loadingMsg(_0x4bf81a.chat, _0x1a3be7[0], "Downloading...", ['▬▭▭▭▭▭', "▬▬▭▭▭▭", "▬▬▬▭▭▭", '▬▬▬▬▭▭', "▬▬▬▬▬▭", '▬▬▬▬▬▬'], _0x4bf81a);
    const _0x3e4181 = _0x5378e7.join(process.cwd(), "latest.zip");
    const {
      data: _0xaf7662
    } = await _0x42a341.get("https://github.com/XdKing2/Jinwoo-v4/archive/main.zip", {
      'responseType': "arraybuffer"
    });
    _0x4d1d03.writeFileSync(_0x3e4181, _0xaf7662);
    console.log("Downloaded ZIP file.");
    await _0x4a093a.loadingMsg(_0x4bf81a.chat, _0x1a3be7[1], "✅ Download completed", ['▬▭▭▭▭▭', "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", '▬▬▬▬▬▬'], _0x4bf81a);
    const _0x2adf29 = _0x5378e7.join(process.cwd(), "latest");
    const _0x4ecbdc = new _0x384324(_0x3e4181);
    _0x4ecbdc.extractAllTo(_0x2adf29, true);
    console.log("ZIP extracted.");
    await _0x4a093a.loadingMsg(_0x4bf81a.chat, _0x1a3be7[2], "✅ Extraction complete", ['▬▭▭▭▭▭', "▬▬▭▭▭▭", "▬▬▬▭▭▭", '▬▬▬▬▭▭', "▬▬▬▬▬▭", '▬▬▬▬▬▬'], _0x4bf81a);
    const _0x1ce39f = _0x5378e7.join(_0x2adf29, 'Jinwoo-v4-main');
    copyFolderSync(_0x1ce39f, process.cwd());
    console.log("Files replaced.");
    await _0x4a093a.loadingMsg(_0x4bf81a.chat, _0x1a3be7[3], "✅ Files replaced", ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", '▬▬▬▬▭▭', "▬▬▬▬▬▭", '▬▬▬▬▬▬'], _0x4bf81a);
    _0x4d1d03.unlinkSync(_0x3e4181);
    const _0x16548b = {
      recursive: true,
      force: true
    };
    _0x4d1d03.rmSync(_0x2adf29, _0x16548b);
    console.log("Cleaned up temporary files.");
    await _0x4a093a.loadingMsg(_0x4bf81a.chat, _0x1a3be7[4], "✅ Restarting bot", ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", '▬▬▬▬▭▭', "▬▬▬▬▬▭", '▬▬▬▬▬▬'], _0x4bf81a);
    process.send("reset");
    _0x4bf81a.reply("```✅ Bot updated and restarted successfully!```");
  } catch (_0x4eb531) {
    console.error("Update error:", _0x4eb531);
    _0x4bf81a.reply("❌ Update failed. Please try manually.");
  }
};
function copyFolderSync(_0x5bd61a, _0x4d536f) {
  if (!_0x4d1d03.existsSync(_0x4d536f)) {
    const _0x5c1b4f = {
      'recursive': true
    };
    _0x4d1d03.mkdirSync(_0x4d536f, _0x5c1b4f);
  }
  const _0x2dda33 = _0x4d1d03.readdirSync(_0x5bd61a);
  for (const _0x1a09b3 of _0x2dda33) {
    const _0x50a74a = _0x5378e7.join(_0x5bd61a, _0x1a09b3);
    const _0x5e01fa = _0x5378e7.join(_0x4d536f, _0x1a09b3);
    if (_0x4d1d03.lstatSync(_0x50a74a).isDirectory()) {
      copyFolderSync(_0x50a74a, _0x5e01fa);
    } else {
      _0x4d1d03.copyFileSync(_0x50a74a, _0x5e01fa);
    }
  }
}
handler.help = ['update'];
handler.tags = ["owner"];
handler.command = /^(update|upgrade|up)$/i;
handler.rowner = true;
export default handler;