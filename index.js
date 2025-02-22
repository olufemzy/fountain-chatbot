const messageBox = document.getElementById("message-box")
const question = document.getElementById("question")
const sendMessage = document.getElementById("send_message")

// Actions when the send message button is pressed

const sendMessageAction = () => {   
   if(question.value != ""){
      alert("A message was sent")
      // creating 
      let messageDiv = document.createElement('div')
      let messageP = document.createElement('p')
      messageBox.appendChild(messageDiv)
      messageDiv.appendChild(messageP)
      messageDiv.className = "user-message-box"
      
      // Adding user message to the UI
      messageP.textContent = `${question.value}`
      question.value = ""
   }
   else{
      alert("ask a question ❓")
   }
}

sendMessage.addEventListener('click', () =>{
   sendMessageAction()
})