import { useState } from "react"

import userIcon from '../assets/authenticationIcons/user.png';
import passwordIcon from '../assets/authenticationIcons/email.png';
import emailIcon from '../assets/authenticationIcons/email.png';
import   '../presentational/presentational.css/login.css'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';





const LoginPage=({isLoggedIn,user,onLogout,onLogin})=>{
    const [userName,setEmail]=useState('')
    const [passWord,setPassword]=useState('')
    const [action,setAction]=useState('sign Up')
    const [show, setShow] = useState(true);
    
    const handleLogin=(event)=>{
     event.preventDefault();
     onLogin(userName,passWord);
      setPassword('');
     setEmail('');
    }
  
    return(
     <div>
      {isLoggedIn ? 
 

    <>
      <Alert show={show} variant="danger">
        <Button></Button>
        <Alert.Heading  className=""> Alert</Alert.Heading>
        <p>
          we are  working on the  home page  hold on ... thanks
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {show===false ?<Button onClick={() => setShow(true)}>Show Alert</Button>:null}
    </>
  :<div className="container">
        <form action="" onSubmit={handleLogin}>  
         <div className="header">
           <div className="text">{action}</div>
           <div className="underline"></div>

         </div>
         <div className="inputs">
           {action==='login'?<div></div>:<div className="input">
            <img src={userIcon} alt="" className="small-icon"  />
            <input type="text"  placeholder="Name"/>
           </div>}
            

           <div className="input">
            <img src={emailIcon} alt="" className="small-icon 
}
" />
            <input type="email"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
           </div>

           <div className="input">
            <img src={passwordIcon} alt="" className="small-icon" />
            <input type="password"  placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
           </div>

         </div>
          {action==='sign Up'? <div></div>:<div className="forgot-password">forgot password?<span>click here</span></div>}
         <div className="submit-container">
          {userName!=='' &&passWord!==''?<button className="submit gray" type="submit"> submit</button>:
           <div className={action==='login'? 'submit gray':'submit'} onClick={()=>setAction("login")}>sign in</div>}
         <div className={action==='sign Up'? 'submit gray':'submit'} onClick={()=>setAction("sign Up")}> sign Up</div>
            
         </div>
         </form>
    </div>}
     </div>
    )

}
export default LoginPage