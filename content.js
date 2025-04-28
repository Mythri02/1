chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getEmailContent") {
    // Example: Adjust the selector to match the email body element in the current provider (Gmail, Outlook, etc.)
    let emailBodyElement = document.querySelector('.adn'); // Gmail often uses the 'adn' class for message content
    if (emailBodyElement) {
      // Send back the extracted email text
      sendResponse({ emailText: emailBodyElement.innerText });
    } else {
      sendResponse({ emailText: null });
    }
  }
});
