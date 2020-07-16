const config = {
  header: {
    title: "Whatsapp",
    actions: [ "search", "chat", "menu" ],
    toolbarButtons: ["Calls", "Chats", "Contacts"]
  }
}

function getConfigData() {
  return config;
}

module.exports = {
  getConfigData
}