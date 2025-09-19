function markdown(text) {
  const msgInput = document.getElementById("msgInput");
  const warning =
    "\nThis is a message theme and it is displayed correctly in https://limechatt-slice.glitch.me\n```\n";

  if (text === "italic") {
    msgInput.value += "*italic*";
  }
  if (text === "strong") {
    msgInput.value += "**strong**";
  }
  if (text === "link") {
    msgInput.value += "[link](https://limechatt-slice.glitch.me/)";
  }
  if (text === "heading") {
    msgInput.value += "\n## Heading2";
    // ill improve this someday lmao
  }
  if (text === "code") {
    msgInput.value += "`code`";
  }
  if (text === "codeb") {
    msgInput.value += "\n```\ncode\n```\n";
  }
  if (text === "list") {
    msgInput.value += "\n- Item";
  }
  if (text === "hr") {
    msgInput.value += "\n*****\n";
  }
  if (text === "img") {
    msgInput.value += "![alt](lime.svg)";
  }
  if (text === "checkbox") {
    msgInput.value += "\n- [x] text";
  }
  if (text === "strikethrough") {
    msgInput.value += "~~strikethrough~~";
  }
  if (text === "glow") {
    msgInput.value += "![glow_alt](lime.svg)";
  }
  if (text === "blur") {
    msgInput.value += "![spoiler_alt](lime.svg)";
  }
  if (text === "rainbow-img") {
    msgInput.value += "![rainbow_alt](lime.svg)";
  }
  if (text === "rainbow") {
    msgInput.value += "\n```rainbow\n\n```\n";
  }
  if (text === "spoiler") {
    msgInput.value += "\n```spoiler\n\n```\n";
  }
  if (text === "fire") {
    msgInput.value = "```fireMode" + warning + msgInput.value;
  }
  if (text === "nowrap") {
    msgInput.value = "```nowrapMode" + warning + msgInput.value;
  }
  if (text === "comicsans") {
    msgInput.value += "\n```comicsans\n\n```\n";
  }
  if (text === "papyrus") {
    msgInput.value += "\n```papyrus\n\n```\n";
  }
  if (text === "folder") {
    msgInput.value =
      "![guh](https://limechatt-slice.glitch.me/sort/limefolder.svg)\n" +
      msgInput.value;
  }
  if (text === "linkX") {
    msgInput.value += "[untrusted link](https://doctorbread.glitch.me/)";
  }
  if (text === "linkJS") {
    msgInput.value += "[js link](javascript:)";
  }
  if (text === "linkMsg") {
    msgInput.value +=
      "[example message](https://limechatt-slice.glitch.me/#msgID-0)";
  }
  if (text === "linkEmbed") {
    msgInput.value +=
      "[embed link](https://limechatt-slice.glitch.me/?&embed)";
  }
}

// unused
function fixLinebreak(textAreaId) {
  const checkbox = document.getElementById("autoLinebreak");
  if (checkbox.checked) {
    const textArea = document.getElementById(textAreaId);
    const updatedText = textArea.value.replace(/\r?\n/g, "\n#\n");
    textArea.value = updatedText;
  }
}

function copyText(textAreaId) {
  const textArea = document.getElementById(textAreaId);
  navigator.clipboard.writeText(textArea);
}

function clearMsgInp(textAreaId) {
  const textArea = document.getElementById(textAreaId);
  if (confirm("Are you sure you want to clear the text?")) {
    textArea.value = "";
  }
}

function refreshPage() {
  window.location.href = "https://limechatt-slice.glitch.me/";
}

function reply(element, preview) {
  const messageID = element;
  const ogMessage = preview;
  const msgInput = document.getElementById("msgInput");
  msgInput.value +=
    "[" + ogMessage + "](https://limechatt-slice.glitch.me/" + messageID + ")";
}
