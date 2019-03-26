import Form from "./Form";
import userService from "../services/user.service";

export default class LoginForm extends Form {
    constructor() {
        super({
            inputs: [
                {
                    type: 'email',
                    name: 'email',
                    label: 'email',
                    rules: 'required|email',
                    submitErrorMsg: 'unknown email address'
                },
                {
                    type: 'password',
                    name: 'password',
                    label: 'password',
                    rules: 'required',
                    rightIcon: 'hide',
                    submitErrorMsg: 'wrong password'
                },
            ]
        });
    }

    async submitLogin(loginData) {
        const user = await userService.login(loginData)
        if (user.email) {
            return user
        } else if (user.emailError) {
            this.inputs.email.setErrorMsg()
        } else if (user.passwordError) {
            this.inputs.password.setErrorMsg()
        }
        return null;
    }


    resetErrorMessages() {
        for (let input in this.inputs) {
            this.inputs[input].resetErrorMsg()
        }
    }

}