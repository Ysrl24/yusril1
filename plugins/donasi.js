let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [+62 813-1623-5253]
│ •  [+62 812-2651-2906]
│ •  [0882-9314-4472]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
