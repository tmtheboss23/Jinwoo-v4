import 'dotenv';
import _0xdfe138 from 'chalk';
import { spawn } from 'child_process';
import _0x4e2459 from 'express';
import _0x33bfc1 from 'figlet';
import _0x2c2902 from 'fs';
import _0xbc5b8f from 'node-fetch';
import _0x4ab337 from 'path';
import { fileURLToPath } from 'url';
_0x33bfc1("Jinwoo", {
  'font': "Ghost",
  'horizontalLayout': "default",
  'verticalLayout': "default"
}, (_0x9cbe7f, _0x4f0550) => {
  if (_0x9cbe7f) {
    console.error(_0xdfe138.red("Figlet error:", _0x9cbe7f));
    return;
  }
  console.log(_0xdfe138.yellow(_0x4f0550));
});
_0x33bfc1("WHATSAPP", {
  'horizontalLayout': "default",
  'verticalLayout': "default"
}, (_0x5465d5, _0x817d55) => {
  if (_0x5465d5) {
    console.error(_0xdfe138.red("Figlet error:", _0x5465d5));
    return;
  }
  console.log(_0xdfe138.magenta(_0x817d55));
});
const app = _0x4e2459();
const port = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = _0x4ab337.dirname(__filename);
app.use(_0x4e2459["static"](_0x4ab337.join(__dirname, "assets")));
app.get('/', (_0x195e46, _0x26bce0) => {
  _0x26bce0.redirect("/jin.html");
});
app.listen(port, () => {
  console.log(_0xdfe138.green("Port " + port + " is open"));
});
let isRunning = false;
async function start(_0xe2639d) {
  if (isRunning) {
    return;
  }
  isRunning = true;
  const _0x30400a = new URL(import.meta.url).pathname;
  const _0x4cfad5 = [_0x4ab337.join(_0x4ab337.dirname(_0x30400a), _0xe2639d), ...process.argv.slice(2)];
  const _0x474ae3 = spawn(process.argv[0], _0x4cfad5, {
    'stdio': ["inherit", "inherit", "inherit", "ipc"]
  });
  _0x474ae3.on("message", _0x50bf6f => {
    console.log(_0xdfe138.cyan("✔️RECEIVED " + _0x50bf6f));
    switch (_0x50bf6f) {
      case "reset":
        _0x474ae3.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case "uptime":
        _0x474ae3.send(process.uptime());
        break;
    }
  });
  _0x474ae3.on("exit", _0x3bbca7 => {
    isRunning = false;
    console.error(_0xdfe138.red("❌Exited with code: " + _0x3bbca7));
    if (_0x3bbca7 === 0) {
      return;
    }
    _0x2c2902.watchFile(_0x4cfad5[0], () => {
      _0x2c2902.unwatchFile(_0x4cfad5[0]);
      start("global.js");
    });
  });
  _0x474ae3.on("error", _0x30638b => {
    console.error(_0xdfe138.red("Error: " + _0x30638b));
    _0x474ae3.kill();
    isRunning = false;
    start("global.js");
  });
  const _0x62aa13 = _0x4ab337.join(_0x4ab337.dirname(_0x30400a), "plugins");
  _0x2c2902.readdir(_0x62aa13, async (_0x2c99b3, _0xe6a9b) => {
    if (_0x2c99b3) {
      console.error(_0xdfe138.red("Error reading plugins folder: " + _0x2c99b3));
      return;
    }
    console.log(_0xdfe138.yellow("Installed " + _0xe6a9b.length + " plugins"));
    try {
      const {
        default: _0x36d340
      } = await import("@whiskeysockets/baileys");
      const _0x261b46 = (await _0x36d340.fetchLatestBaileysVersion()).version;
      console.log(_0xdfe138.yellow("Using Baileys version " + _0x261b46));
    } catch (_0x4fe6a5) {
      console.error(_0xdfe138.red(" Baileys library is not installed"));
    }
  });
}
start("global.js");
process.on("unhandledRejection", () => {
  console.error(_0xdfe138.red("Unhandled promise rejection. Bot will restart..."));
  start("global.js");
});
process.on("exit", _0x527b55 => {
  console.error(_0xdfe138.red("Exited with code: " + _0x527b55));
  console.error(_0xdfe138.red("Bot will restart..."));
  start("global.js");
});
function keepAlive() {
  const _0x2beaa7 = process.env.APP_URL;
  if (!_0x2beaa7) {
    console.log("No APP_URL provided, skipping keepAlive...");
    return;
  }
  if (/(\/\/|\.)undefined\./.test(_0x2beaa7)) {
    console.log("Invalid APP_URL format, skipping keepAlive...");
    return;
  }
  setInterval(() => {
    _0xbc5b8f(_0x2beaa7)["catch"](console.error);
  }, 300000);
}