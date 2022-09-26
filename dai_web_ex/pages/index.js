import { Button } from 'semantic-ui-react'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import LoginForm from '../comps';
// router and state are mostly used in the PAGE for data/information state management 

export default function Home() {

  const r = useRouter();

  // before, during, after 
  const [loginState, setLoginState] = useState("before")
  // var c = "blue";
  // var btn_text = "click me";

  // if (loginState === "before") {
  //   c = "blue";
  //   btn_text = "click me";
  // }

  // if (loginState === "during") {
  //   c = "green"
  //   btn_text = "LOADING..."
  // }

  // if (loginState === "after") {
  //   c = "grey"
  //   btn_text = "Success"
  // }


  // const HandleButton = () => {
  //   if (loginState === 'before') {
  //     setLoginState('during');
  //   } if (loginState === 'during') {
  //     setLoginState('after')
  //   }

  //   if (loginState === 'after') {
  //     r.push('/dashboard');
  //   }

  // }


  const Login = async () => {
    setLoginState('during');
    // takes time 
    // mock of time passing => useless code 
    // its going to take time to talk to an "endpoint" to see if your user credentials are legit 
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLoginState('after');
    // going to stall for 1-2s 
    await new Promise(resolve => setTimeout(resolve, 2000));

    r.push('/dashboard');
  }

  return (
    <div>
      {/* <Button color={c} onClick={() => Login()}>{btn_text} {loginState === 'during' && <Loader active />} </Button> */}
      <LoginForm loginState={loginState} onLoginClick={()=>Login()}/>
    </div>
  )
}
