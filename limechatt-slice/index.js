// Limechatt Slice's index.js

const server = new WebSocket("wss://limechatt.derpygamer2142.com");
// const server = new WebSocket('ws://localhost:1050')

const msgInput = document.getElementById("msgInput");
const authorInput = document.getElementById("authorInput");
const sendBtn = document.getElementById("sendBtn");
const messageWall = document.getElementById("messageWall");

let connected = false;

server.onmessage = (msg) => {
  if (
    !connected ||
    server.readyState === WebSocket.CLOSED ||
    server.readyState === WebSocket.CLOSING
  )
    return;

  const parsedData = JSON.parse(msg.data);

  if (parsedData.type == "message") {
    createMessage(
      parsedData.author,
      parsedData.content,
      msg.date ? new Date(msg.date) : new Date("11/13/1987"),
      parsedData.attachment ? parsedData.attachment : ""
    );
  }

  if (parsedData.response) {
    parsedData.response.forEach((msg) => {
      if (msg.type == "message") {
        createMessage(
          msg.author,
          msg.content,
          msg.date ? new Date(msg.date) : new Date("11/13/1987"),
          parsedData.attachment ? parsedData.attachment : ""
        );
      }
    });
  }
};

server.onclose = () => {
  connected = false;
};

sendBtn.addEventListener("click", () => {
  if (!msgInput.value.trim()) return;
  try {
    server.send(
      JSON.stringify({
        type: "sendMessage",
        content: msgInput.value,
        author: authorInput.value
          ? authorInput.value
          : "Anonymous Limechattter",
        date: new Date(),
      })
    );
  } catch (error) {
    alert(error);
  }
});

server.onopen = () => {
  connected = true;

  server.send(JSON.stringify({ type: "getMessages" }));
};

function simpleHash(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const numericHash = Math.abs(hash).toString().slice(0, 8);
  return `${numericHash}`;
}

function createMessage(
  author,
  message,
  date = new Date("11/13/1987"),
  attachmentURI = ""
) {
  const messageElement = document.createElement("div");
  const titleHandler = document.createElement("div");
  const authorName = document.createElement("i");
  const messageContent = document.createElement("div");
  const dateContainer = document.createElement("details");
  const dateTime = document.createElement("summary");
  const dateTimeAlt = document.createElement("span");
  const messageID = document.createElement("div");

  dateTime.textContent = date.toLocaleTimeString();
  dateTimeAlt.textContent = date.toUTCString();
  authorName.textContent = author;

  messageElement.classList.add("messageElement");
  messageContent.classList.add("messageContent");
  titleHandler.classList.add("titleHandler");
  messageID.classList.add("messageID");
  messageElement.id =
    "msgID-" +
    simpleHash(
      authorName.textContent +
        messageContent.textContent +
        dateTimeAlt.textContent
    );
  messageID.textContent = "#" + messageElement.id;
  messageID.setAttribute("onclick", "reply('" + messageID.textContent + "', '" + message.replace(/<[^>]*>/g, "").replace(/\r?\n|\r/g, "").slice(0, 25) + "')");

  messageContent.innerHTML = message;

  titleHandler.appendChild(authorName);
  titleHandler.appendChild(messageID);
  titleHandler.appendChild(dateContainer);
  titleHandler.setAttribute(
    "title",
    authorName.textContent +
      " | " +
      messageID.textContent +
      " | " +
      dateTimeAlt.textContent
  );
  dateContainer.appendChild(dateTime);
  dateContainer.appendChild(dateTimeAlt);
  messageElement.prepend(messageContent);
  messageElement.prepend(titleHandler);
  messageWall.prepend(messageElement);
}