const messageBox = document.getElementById("message-box")
const question = document.getElementById("question")
const sendMessage = document.getElementById("send_message")

const backendURL = "http://localhost:3000/api/chat"; 

// Actions when the send message button is pressed
const sendMessageAction = async () => { 
   const userMessage = question.value.trim() 

   if(userMessage != ""){
      alert("A message was sent")
      // creating user message
      let userDiv = document.createElement('div')
      let userP = document.createElement('p')
      messageBox.appendChild(userDiv)
      userDiv.appendChild(userP)
      userDiv.className = "user-message-box"      
      // Adding user message to the UI
      userP.textContent = `${userMessage}`
      question.value = ""
      question.focus()

      try {
         const response = await fetch(backendURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();
        const botMessage = data.reply || "Sorry, I couldn't process that request.";

        // creating bot response
         let botDiv = document.createElement('div')
         let botP = document.createElement('p')
         messageBox.appendChild(botDiv)
         botDiv.appendChild(botP)
         botDiv.className = "bot-message-box"
         // Adding bot response to the UI
         botP.textContent = `${botMessage}`
         // Scroll to the bottom of the chat
         messageBox.scrollTop = messageBox.scrollHeight;
      } catch (error) {
         // creating bot response error
         let botDiv = document.createElement('div')
         let botP = document.createElement('p')
         messageBox.appendChild(botDiv)
         botDiv.appendChild(botP)
         botDiv.className = "bot-message-box"
         // Adding bot response to the UI
         botP.textContent = "Something Went Wrong!"
         // Scroll to the bottom of the chat
         messageBox.scrollTop = messageBox.scrollHeight;
      }     
   }
   // else{
   //    alert("ask a question ❓")
   //    question.focus()
   // }
}

sendMessage.addEventListener('click', () =>{
   sendMessageAction()
})