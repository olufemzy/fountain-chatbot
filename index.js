const messageBox = document.getElementById("message-box")
const question = document.getElementById("question")
const sendMessage = document.getElementById("send_message")

// Actions when the send message button is pressed

const sendMessageAction = () => { 
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

      // creating bot message
      let botDiv = document.createElement('div')
      let botP = document.createElement('p')
      messageBox.appendChild(botDiv)
      botDiv.appendChild(botP)
      botDiv.className = "bot-message-box"

      // Adding bot response to the UI
      botP.textContent = "i am a boy"
   }
   else{
      alert("ask a question ❓")
      question.focus()
   }
}

sendMessage.addEventListener('click', () =>{
   sendMessageAction()
})