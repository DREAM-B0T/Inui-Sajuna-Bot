const fs = require("fs");
const Wel = JSON.parse(fs.readFileSync('./database/welcome.json'));

const welAwal = `━━━━━━━━━━━━━━━━
឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵ ឵឵឵ ឵឵ ឵឵ ឵឵  ឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵  ឵‿︵ ◌ ୨ -🍒- ୧ ◌ ︵‿
 𓄴˖࣪   𝐁 𝐈 𝐄 𝐍 𝐕 𝐄 𝐍 𝐈 𝐃 𝐎  𓏲࣪ ┈ ✦️️
@user
_Bienvenid@ a @group._
_Esperamos y tu estadia sea divertida y saludable, si tienes problemas, no olvides en avisarnos, el equipo de administracion resolvera tus dudas!._
╭───────────────🏴
╰╼➤ 𝐑𝐄𝐆𝐋𝐀𝐒:
❪".reglas"❫ 
✎. Reglas Generales
❪".reglasrol"❫
✎. Reglas On Rol
❪".reglasbt"❫
✎. Reglas On Battle
───────────────
_Soy 𝐷𝑒𝑠𝑡𝑖𝑛𝑦🍒 y estare a tu disposicion, sin nada mas que decir disfruta._
━━━━━━━━━━━━━━━━`;

const byeAwal = `━━━━━━━━━━━━━━━━
឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵឵@user
_🍒-. Ha abandonado el grupo._
━━━━━━━━━━━━━━━━`;
/**
 * Add welcome text to db
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 * @returns {boolean}
 */
const addCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = true;
    }
  });
  if (position === false) {
    const obj = { 
      from: chatId, 
      textwelcome: welAwal,
      textbye: byeAwal
    };
    Wel.push(obj);
    fs.writeFileSync('./database/welcome.json', JSON.stringify(Wel, null, "\t"));
    return false;
  }
};

/**
 * Get Custom Welcome Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textwelcome;
  }
};
/**
 * Get Custom bye Text
 * @param {string} chatId
 * @param {object} Wel
 * @returns {Number}
 */
const getCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    return Wel[position].textbye;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomWelcome = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = value;
  }
};

/**
 * Set Custom Welcome
 * @param {string} chatId
 * @param {string} text
 * @param {object} Wel
 */
const setCustomBye = (chatId, value) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = value;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomWelcome = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textwelcome = welAwal;
  }
};

/**
 * Reset Custom Welcome
 * @param {string} chatId
 * @param {object} Wel
 */
const delCustomBye = (chatId) => {
  let position = false;
  Object.keys(Wel).forEach((i) => {
    if (Wel[i].from === chatId) {
      position = i;
    }
  });
  if (position !== false) {
    Wel[position].textbye = byeAwal;
  }
};

module.exports = {
  Wel,
  addCustomWelcome,
  getCustomWelcome,
  setCustomWelcome,
  delCustomWelcome,
  getCustomBye,
  setCustomBye,
  delCustomBye
};
