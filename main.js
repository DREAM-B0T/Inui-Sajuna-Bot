const { WAConnection: _WAConnection, ReconnectMode, MessageType, MessageOptions } = require('@adiwajshing/baileys');
const simple = require("./whatsapp/connecting.js");
const WAConnection = simple.WAConnection(_WAConnection);
const Fg = new WAConnection();
const {
  cekWelcome,
  cekAntilink,
  cekBadword,
  cekAntidelete,
  cekDetect
} = require('./functions/group');
