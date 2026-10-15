import { useState } from "react"
import api from "@/shared"

function RequestPanel(){
const [email, setEmail] = useState('')
const [emailStorage, setEmailStorage] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("emailInfo")) ?? [];
  } catch {
    return [];
  }
});


return (
  <section className='Project_Request'>
<div className="container">
  <div className="Project_Request_main">
    <div className="Project_Request_panel">
      <h2>Share your project with us and we’ll find the right solution for you.</h2>
      <form  onSubmit={async (event)=>{
event.preventDefault()
    if (!email.trim()) return;
const newEmail = {
  email: email,
};

const updatedEmails = [...emailStorage, newEmail];

 try {
    await api({ updatedEmails, newEmail });
    setEmailStorage(updatedEmails);
    setEmail("");
  } catch (err) {
    console.error(err);
      }

      }} className="Project_Request_panel_input">
      <input 
        type="email" 
      name="email"
      value={email}
        required
      onChange={(event)=>{
setEmail(event.target.value)
      }}
        placeholder='Enter your email' />
        
      <button  type="submit">Submit a request</button>
      </form>
    </div>
  </div>
</div>
  </section>
)
}


export default RequestPanel