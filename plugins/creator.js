/* function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m) */
let handler = async (m, { conn }) => {
  const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Adit Ganz\n' // full name
            + `ORG:${wm};\n` // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6281226512906:+62 812-2651-2906\n' // WhatsApp ID + phone number
            + 'END:VCARD'
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'Jeff', 
            contacts: [{ vcard }] 
        }
    }
)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
