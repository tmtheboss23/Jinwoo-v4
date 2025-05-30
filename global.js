process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
import './config.js';
import _0x542ddf from 'dotenv';
import { existsSync, readFileSync, readdirSync, unlinkSync, watch } from 'fs';
import { createRequire } from 'module';
import _0x8ad43b, { join } from 'path';
import { platform } from 'process';
import { fileURLToPath, pathToFileURL } from 'url';
import 'ws';
import _0x5a5d8a from './lib/socket.js';
import _0x1e6406 from './lib/tempclear.js';
global.__filename = function filename(_0x7abf67 = import.meta.url, _0x3bb5a5 = platform !== "win32") {
  return _0x3bb5a5 ? /file:\/\/\//.test(_0x7abf67) ? fileURLToPath(_0x7abf67) : _0x7abf67 : pathToFileURL(_0x7abf67).toString();
};
global.__dirname = function dirname(_0x4f31f0) {
  return _0x8ad43b.dirname(global.__filename(_0x4f31f0, true));
};
global.__require = function require(_0x138321 = import.meta.url) {
  return createRequire(_0x138321);
};
import _0x4797a8 from 'chalk';
import { spawn } from 'child_process';
import _0x4ef799 from 'lodash';
import { JSONFile, Low } from 'lowdb';
import _0x3c9f67 from 'node-cache';
import { default as _0x11bad7, default as _0x3a2aed } from 'pino';
import _0x6ae66e from 'syntax-error';
import { format } from 'util';
import _0x3dcaf8 from 'yargs';
import './lib/cloudDBAdapter.js';
import { mongoDB, mongoDBV2 } from './lib/mongoDB.js';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
const {
  DisconnectReason,
  useMultiFileAuthState,
  MessageRetryMap,
  fetchLatestWaWebVersion,
  makeCacheableSignalKeyStore,
  makeInMemoryStore,
  Browsers,
  proto,
  delay,
  jidNormalizedUser
} = await (await import("@whiskeysockets/baileys"))["default"];
import _0x1042b3 from 'readline';
_0x542ddf.config();
async function main() {
  const _0x54fede = global.SESSION_ID;
  if (!_0x54fede) {
    console.error("SESSION ID not found.");
    return;
  }
  try {
    await _0x5a5d8a(_0x54fede);
    console.log("Check Completed.");
  } catch (_0x752275) {
    console.error("Error:", _0x752275);
  }
}
main();
await delay(10000);
const pairingCode = !!global.pairingNumber || process.argv.includes("--pairing-code");
const useQr = process.argv.includes("--qr");
const MAIN_LOGGER = _0x3a2aed({
  'timestamp': () => ",\"time\":\"" + new Date().toJSON() + "\""
});
const logger = MAIN_LOGGER.child({});
logger.level = "fatal";
const store = makeInMemoryStore({
  'logger': logger
});
store?.["readFromFile"]("./session.json");
setInterval(() => {
  store?.["writeToFile"]("./session.json");
}, 60000);
const msgRetryCounterCache = new _0x3c9f67();
const rl = _0x1042b3.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const question = _0x4c050d => new Promise(_0x5e1077 => rl.question(_0x4c050d, _0x5e1077));
const {
  chain
} = _0x4ef799;
const PORT = process.env.PORT || process.env.SERVER_PORT || 8000;
protoType();
serialize();
global.API = (_0x50716c, _0x45d665 = '/', _0x4a967a = {}, _0x39c09f) => (_0x50716c in global.APIs ? global.APIs[_0x50716c] : _0x50716c) + _0x45d665 + (_0x4a967a || _0x39c09f ? '?' + new URLSearchParams(Object.entries({
  ..._0x4a967a,
  ...(_0x39c09f ? {
    [_0x39c09f]: global.APIKeys[_0x50716c in global.APIs ? global.APIs[_0x50716c] : _0x50716c]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x3dcaf8(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (process.env.PREFIX || "*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.opts.db = process.env.DATABASE_URL;
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? opts.mongodbv2 ? new mongoDBV2(opts.db) : new mongoDB(opts.db) : new JSONFile((opts._[0] ? opts._[0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise(_0x2c71bf => setInterval(async function () {
      if (!global.db.READ) {
        clearInterval(this);
        _0x2c71bf(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1000));
  }
  if (global.db.data !== null) {
    return;
  }
  global.db.READ = true;
  await global.db.read()["catch"](console.error);
  global.db.READ = null;
  global.db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(global.db.data || {})
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();
global.authFolder = "session";
const {
  state,
  saveCreds
} = await useMultiFileAuthState(global.authFolder);
const connectionOptions = {
  'version': [2, 3000, 1015901307],
  'logger': _0x11bad7({
    'level': "fatal"
  }),
  'printQRInTerminal': !pairingCode,
  'browser': Browsers.macOS("Safari"),
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x11bad7().child({
      'level': "fatal",
      'stream': "store"
    }))
  },
  'markOnlineOnConnect': true,
  'generateHighQualityLinkPreview': true,
  'getMessage': async _0x441031 => {
    let _0x5a4be7 = jidNormalizedUser(_0x441031.remoteJid);
    let _0x2d8fa9 = await store.loadMessage(_0x5a4be7, _0x441031.id);
    return _0x2d8fa9?.["message"] || '';
  },
  'patchMessageBeforeSending': _0x1b20cd => {
    const _0x390269 = !!(_0x1b20cd.buttonsMessage || _0x1b20cd.templateMessage || _0x1b20cd.listMessage);
    if (_0x390269) {
      _0x1b20cd = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadataVersion': 0x2,
              'deviceListMetadata': {}
            },
            ..._0x1b20cd
          }
        }
      };
    }
    return _0x1b20cd;
  },
  'msgRetryCounterCache': msgRetryCounterCache,
  'defaultQueryTimeoutMs': undefined,
  'syncFullHistory': false
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
store?.["bind"](conn.ev);
if (pairingCode && !conn.authState.creds.registered) {
  let phoneNumber;
  if (!!global.pairingNumber) {
    phoneNumber = global.pairingNumber.replace(/[^0-9]/g, '');
    const PHONENUMBER_MCC = {
      '93': "Afghanistan",
      '355': "Albania",
      '213': "Algeria",
      '376': "Andorra",
      '244': "Angola",
      '1': "Antigua and Barbuda",
      '54': "Argentina",
      '374': "Armenia",
      '297': "Aruba",
      '61': "Australia",
      '43': "Austria",
      '994': "Azerbaijan",
      '1': "Bahamas",
      '973': "Bahrain",
      '880': "Bangladesh",
      '1': "Barbados",
      '375': "Belarus",
      '32': "Belgium",
      '501': "Belize",
      '229': "Benin",
      '1': "Bermuda",
      '975': "Bhutan",
      '591': "Bolivia",
      '387': "Bosnia and Herzegovina",
      '267': "Botswana",
      '55': "Brazil",
      '673': "Brunei",
      '359': "Bulgaria",
      '226': "Burkina Faso",
      '257': "Burundi",
      '855': "Cambodia",
      '237': "Cameroon",
      '1': "Canada",
      '238': "Cape Verde",
      '345': "Cayman Islands",
      '61': "Central African Republic",
      '236': "Chad",
      '56': "Chile",
      '86': "China",
      '61': "Christmas Island",
      '57': "Colombia",
      '269': "Comoros",
      '682': "Cook Islands",
      '506': "Costa Rica",
      '225': "Ivory Coast",
      '385': "Croatia",
      '53': "Cuba",
      '357': "Cyprus",
      '420': "Czech Republic",
      '45': "Denmark",
      '253': "Djibouti",
      '1': "Dominica",
      '1809': "Dominican Republic",
      '593': "Ecuador",
      '20': "Egypt",
      '503': "El Salvador",
      '240': "Equatorial Guinea",
      '291': "Eritrea",
      '372': "Estonia",
      '251': "Ethiopia",
      '679': "Fiji",
      '358': "Finland",
      '33': "France",
      '241': "Gabon",
      '220': "Gambia",
      '995': "Georgia",
      '49': "Germany",
      '233': "Ghana",
      '350': "Gibraltar",
      '30': "Greece",
      '299': "Greenland",
      '1': "Grenada",
      '590': "Guadeloupe",
      '1': "Guam",
      '502': "Guatemala",
      '224': "Guinea",
      '245': "Guinea-Bissau",
      '592': "Guyana",
      '509': "Haiti",
      '504': "Honduras",
      '36': "Hungary",
      '354': "Iceland",
      '91': "India",
      '62': "Indonesia",
      '964': "Iraq",
      '98': "Iran",
      '354': "Iceland",
      '39': "Italy",
      '972': "Israel",
      '1': "Jamaica",
      '81': "Japan",
      '962': "Jordan",
      '7': "Kazakhstan",
      '254': "Kenya",
      '686': "Kiribati",
      '965': "Kuwait",
      '996': "Kyrgyzstan",
      '856': "Laos",
      '371': "Latvia",
      '961': "Lebanon",
      '266': "Lesotho",
      '231': "Liberia",
      '218': "Libya",
      '423': "Liechtenstein",
      '370': "Lithuania",
      '352': "Luxembourg",
      '853': "Macau",
      '389': "Macedonia",
      '261': "Madagascar",
      '265': "Malawi",
      '60': "Malaysia",
      '960': "Maldives",
      '223': "Mali",
      '356': "Malta",
      '692': "Marshall Islands",
      '596': "Martinique",
      '222': "Mauritania",
      '230': "Mauritius",
      '262': "Mayotte",
      '52': "Mexico",
      '691': "Micronesia",
      '373': "Moldova",
      '377': "Monaco",
      '976': "Mongolia",
      '382': "Montenegro",
      '1': "Montserrat",
      '212': "Morocco",
      '258': "Mozambique",
      '95': "Myanmar",
      '264': "Namibia",
      '674': "Nauru",
      '977': "Nepal",
      '31': "Netherlands",
      '687': "New Caledonia",
      '64': "New Zealand",
      '505': "Nicaragua",
      '227': "Niger",
      '234': "Nigeria",
      '683': "Niue",
      '850': "North Korea",
      '47': "Norway",
      '968': "Oman",
      '92': "Pakistan",
      '680': "Palau",
      '507': "Panama",
      '675': "Papua New Guinea",
      '595': "Paraguay",
      '51': "Peru",
      '63': "Philippines",
      '48': "Poland",
      '351': "Portugal",
      '1': "Puerto Rico",
      '974': "Qatar",
      '40': "Romania",
      '7': "Russia",
      '250': "Rwanda",
      '590': "Saint Barthélemy",
      '1': "Saint Helena",
      '758': "Saint Kitts and Nevis",
      '590': "Saint Martin",
      '1': "Saint Vincent and the Grenadines",
      '685': "Samoa",
      '378': "San Marino",
      '966': "Saudi Arabia",
      '221': "Senegal",
      '381': "Serbia",
      '248': "Seychelles",
      '232': "Sierra Leone",
      '65': "Singapore",
      '421': "Slovakia",
      '386': "Slovenia",
      '677': "Solomon Islands",
      '252': "Somalia",
      '27': "South Africa",
      '82': "South Korea",
      '34': "Spain",
      '94': "Sri Lanka",
      '249': "Sudan",
      '597': "Suriname",
      '268': "Eswatini",
      '46': "Sweden",
      '41': "Switzerland",
      '963': "Syria",
      '886': "Taiwan",
      '992': "Tajikistan",
      '255': "Tanzania",
      '66': "Thailand",
      '670': "Timor-Leste",
      '228': "Togo",
      '676': "Tonga",
      '1': "Trinidad and Tobago",
      '216': "Tunisia",
      '90': "Turkey",
      '993': "Turkmenistan",
      '256': "Uganda",
      '380': "Ukraine",
      '971': "United Arab Emirates",
      '44': "United Kingdom",
      '1': "United States",
      '598': "Uruguay",
      '998': "Uzbekistan",
      '678': "Vanuatu",
      '58': "Venezuela",
      '84': "Vietnam",
      '681': "Wallis and Futuna",
      '967': "Yemen",
      '260': "Zambia",
      '263': "Zimbabwe"
    };
    if (!Object.keys(PHONENUMBER_MCC).some(_0x51522d => phoneNumber.startsWith(_0x51522d))) {
      console.log(_0x4797a8.bgBlack(_0x4797a8.redBright("Start with your country's WhatsApp code, Example : 263xxx")));
      process.exit(0);
    }
  } else {
    phoneNumber = await question(_0x4797a8.bgBlack(_0x4797a8.greenBright("Please type your WhatsApp number : ")));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(_0x400031 => phoneNumber.startsWith(_0x400031))) {
      console.log(_0x4797a8.bgBlack(_0x4797a8.redBright("Start with your country's WhatsApp code, Example : 263xxx")));
      phoneNumber = await question(_0x4797a8.bgBlack(_0x4797a8.greenBright("Please type your WhatsApp number : ")));
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
      rl.close();
    }
  }
  setTimeout(async () => {
    let _0x4f41a5 = await conn.requestPairingCode(phoneNumber);
    _0x4f41a5 = _0x4f41a5?.["match"](/.{1,4}/g)?.["join"]('-') || _0x4f41a5;
    const _0x50f1f3 = _0x4797a8.bold.greenBright("Your Pairing Code:") + " " + _0x4797a8.bgGreenBright(_0x4797a8.black(_0x4f41a5));
    console.log(_0x50f1f3);
  }, 3000);
}
conn.logger.info("\nWaiting For Login\n");
if (!opts.test) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) {
        await global.db.write();
      }
      if (opts.autocleartmp && (global.support || {}).find) {
        tmp = [os.tmpdir(), "tmp"];
        tmp.forEach(_0x4cf452 => cp.spawn("find", [_0x4cf452, "-amin", '3', "-type", 'f', "-delete"]));
      }
    }, 30000);
  }
}
if (opts.server) {
  (await import("./server.js"))["default"](global.conn, PORT);
}
function runCleanup() {
  _0x1e6406().then(() => {
    console.log("Temporary file cleanup completed.");
  })["catch"](_0x3bf31b => {
    console.error("An error occurred during temporary file cleanup:", _0x3bf31b);
  })["finally"](() => {
    setTimeout(runCleanup, 120000);
  });
}
runCleanup();
function clearsession() {
  let _0x4d46c3 = [];
  const _0x41f881 = readdirSync("./session");
  const _0x28afcd = _0x41f881.filter(_0x568814 => {
    return _0x568814.startsWith("pre-key-");
  });
  _0x4d46c3 = [..._0x4d46c3, ..._0x28afcd];
  _0x28afcd.forEach(_0x43b8d9 => {
    unlinkSync("./session/" + _0x43b8d9);
  });
}
async function connectionUpdate(_0x53eff0) {
  const {
    connection: _0x2dd678,
    lastDisconnect: _0x3f238a,
    isNewLogin: _0x24f7b6,
    qr: _0x1c7aea
  } = _0x53eff0;
  global.stopped = _0x2dd678;
  if (_0x24f7b6) {
    conn.isInit = true;
  }
  const _0x418d35 = _0x3f238a?.["error"]?.["output"]?.["statusCode"] || _0x3f238a?.["error"]?.["output"]?.["payload"]?.["statusCode"];
  if (_0x418d35 && _0x418d35 !== DisconnectReason.loggedOut && conn?.['ws']["socket"] == null) {
    try {
      conn.logger.info(await global.reloadHandler(true));
    } catch (_0xed16b2) {
      console.error("Error reloading handler:", _0xed16b2);
    }
  }
  if (_0x418d35 && (_0x418d35 === DisconnectReason.restartRequired || _0x418d35 === 428)) {
    conn.logger.info(_0x4797a8.yellow("\n🌀 Restart Required... Restarting"));
    process.send("reset");
  }
  if (global.db.data == null) {
    loadDatabase();
  }
  if (!pairingCode && useQr && _0x1c7aea !== 0 && _0x1c7aea !== undefined) {
    conn.logger.info(_0x4797a8.yellow("\nLogging in...."));
  }
  if (_0x2dd678 === "open") {
    const {
      jid: _0x180586,
      name: _0x2b9ab6
    } = conn.user;
    await conn.sendMessage(_0x180586, {
      'text': "*Jinwoo-v4 BOT CONNECTED* \n\n *SUPPORT BY SUBSCRIBE*\n*youtube.com/@malvintech2*",
      'mentions': [_0x180586]
    }, {
      'quoted': null
    });
    conn.logger.info(_0x4797a8.yellow("\n👍 R E A D Y"));
  }
  if (_0x2dd678 === "close") {
    conn.logger.error(_0x4797a8.yellow("\nConnection closed... Get a new session"));
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x5a3815) {
  try {
    const _0xfd93b8 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0xfd93b8 || {}).length) {
      handler = _0xfd93b8;
    }
  } catch (_0x3f4a85) {
    console.error;
  }
  if (_0x5a3815) {
    const _0x39d127 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x39d127
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("messages.update", conn.pollUpdate);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("presence.update", conn.presenceUpdate);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.welcome = " Hello @user!\n\n🎉 *WELCOME* to the group @group!\n\n📜 Please read the *DESCRIPTION* @desc.";
  conn.bye = "👋GOODBYE @user \n\nSee you later!";
  conn.spromote = "*@user* has been promoted to an admin!";
  conn.sdemote = "*@user* is no longer an admin.";
  conn.sDesc = "The group description has been updated to:\n@desc";
  conn.sSubject = "The group title has been changed to:\n@group";
  conn.sIcon = "The group icon has been updated!";
  conn.sRevoke = " The group link has been changed to:\n@revoke";
  conn.sAnnounceOn = "The group is now *CLOSED*!\nOnly admins can send messages.";
  conn.sAnnounceOff = "The group is now *OPEN*!\nAll participants can send messages.";
  conn.sRestrictOn = "Edit Group Info has been restricted to admins only!";
  conn.sRestrictOff = "Edit Group Info is now available to all participants!";
  conn.handler = handler.handler.bind(global.conn);
  conn.pollUpdate = handler.pollUpdate.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.presenceUpdate = handler.presenceUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn, true);
  const _0x350a92 = new Date();
  const _0x4cccc1 = new Date(conn.ev);
  if (_0x350a92 >= _0x4cccc1) {} else {}
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("messages.update", conn.pollUpdate);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("presence.update", conn.presenceUpdate);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x1349c1 => /\.js$/.test(_0x1349c1);
global.plugins = {};
async function filesInit() {
  for (const _0x3be826 of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      const _0x11d909 = global.__filename(join(pluginFolder, _0x3be826));
      const _0x395283 = await import(_0x11d909);
      global.plugins[_0x3be826] = _0x395283["default"] || _0x395283;
    } catch (_0x195ee6) {
      conn.logger.error(_0x195ee6);
      delete global.plugins[_0x3be826];
    }
  }
}
filesInit().then(_0x28785a => Object.keys(global.plugins))["catch"](console.error);
global.reload = async (_0x1e8790, _0x380036) => {
  if (/\.js$/.test(_0x380036)) {
    const _0x4f0cdf = global.__filename(join(pluginFolder, _0x380036), true);
    if (_0x380036 in global.plugins) {
      if (existsSync(_0x4f0cdf)) {
        conn.logger.info("\nUpdated plugin - '" + _0x380036 + "'");
      } else {
        conn.logger.warn("\nDeleted plugin - '" + _0x380036 + "'");
        return delete global.plugins[_0x380036];
      }
    } else {
      conn.logger.info("\nNew plugin - '" + _0x380036 + "'");
    }
    const _0x2d1165 = _0x6ae66e(readFileSync(_0x4f0cdf), _0x380036, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x2d1165) {
      conn.logger.error("\nSyntax error while loading '" + _0x380036 + "'\n" + format(_0x2d1165));
    } else {
      try {
        const _0x37ce6b = await import(global.__filename(_0x4f0cdf) + "?update=" + Date.now());
        global.plugins[_0x380036] = _0x37ce6b["default"] || _0x37ce6b;
      } catch (_0x3d412f) {
        conn.logger.error("\nError require plugin '" + _0x380036 + "\n" + format(_0x3d412f) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x51246e], [_0x24c5fd]) => _0x51246e.localeCompare(_0x24c5fd)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  const _0x2a8db1 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn("magick"), spawn('gm'), spawn("find", ["--version"])].map(_0x1c4821 => {
    return Promise.race([new Promise(_0x135f62 => {
      _0x1c4821.on("close", _0x33ae6d => {
        _0x135f62(_0x33ae6d !== 127);
      });
    }), new Promise(_0x223fbf => {
      _0x1c4821.on("error", _0x42434e => _0x223fbf(false));
    })]);
  }));
  const [_0x2948bc, _0x26171e, _0x4c0007, _0x2acec7, _0x355587, _0x45c668, _0x495aca] = _0x2a8db1;
  Object.freeze(global.support);
}
async function Cleaning() {
  if (stopped === "close" || !conn || !conn.user) {
    return;
  }
  clearsession();
  console.log(_0x4797a8.cyanBright("\nStored Sessions Cleared"));
}
setInterval(Cleaning, 600000);
_quickTest()["catch"](console.error);