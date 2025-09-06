browser.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "muteTab") {
    browser.tabs.update(sender.tab.id, { muted: true });
  } else if (message.action === "unmuteTab") {
    browser.tabs.update(sender.tab.id, { muted: false });
  }
});