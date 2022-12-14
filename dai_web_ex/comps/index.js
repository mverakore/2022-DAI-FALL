import { Button, Loader, Input } from 'semantic-ui-react'

export default function LoginForm({
    loginState = 'before',
    onLoginClick = () => { }

}) {



    var c = "blue";
    var btn_text = "click me";

    if (loginState === "before") {
        c = "blue";
        btn_text = "click me";
    }

    if (loginState === "during") {
        c = "green"
        btn_text = "LOADING..."
    }

    if (loginState === "after") {
        c = "grey"
        btn_text = "Success"
    }


    return <div>
        <h3>Login Form</h3>
        <Input disabled={loginState !== "before"}
            placeholder='email' />
        <Input disabled={loginState !== 'before'}
            placeholder='password' />
        <hr />
        <Button color={c} onClick={onLoginClick}>{btn_text} {loginState === 'during' && <Loader active />} </Button>
    </div>
}