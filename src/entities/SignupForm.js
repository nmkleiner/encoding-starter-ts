import Form from "./Form";
import userService from "../services/user.service";

export default class SignupForm extends Form {
    constructor() {
        super({
            inputs: [
                {
                    type: 'text',
                    name: 'username',
                    label: 'username',
                    rules: 'required|min:4',
                    submitErrorMsg: 'Username already in use'
                },
                {
                    type: 'text',
                    name: 'firstName',
                    label: 'first name',
                    rules: 'required',
                },
                {
                    type: 'text',
                    name: 'lastName',
                    label: 'last name',
                    rules: 'required',
                },
                {
                    type: 'text',
                    name: 'phone',
                    label: 'phone',
                    rules: 'numeric',
                },
                {
                    type: 'select',
                    name: 'country',
                    label: 'choose your country',
                    rules: 'required',
                    options: ['tajikistan','bangladesh','mozambique','eritrea','venezuela']
                },
                {
                    type: 'text',
                    name: 'address',
                    label: 'address',
                },
                {
                    type: 'email',
                    name: 'email',
                    label: 'email',
                    rules: 'required|email',
                    submitErrorMsg: 'email already registered'
                },
                {
                    type: 'password',
                    name: 'password1',
                    label: 'password',
                    rules: 'required|min:6',
                    rightIcon: 'hide',
                    submitErrorMsg: 'passwords don\'t match'
                },
                {
                    type: 'password',
                    name: 'password2',
                    label: 'repeat password',
                    rules: 'required|min:6',
                    rightIcon: 'hide',
                },
            ]
        });
    }

    async submitSignup(signupData) {
        const isValidForm = this.validate(signupData);
        let successfulSignup = false;
        if (isValidForm) {
            const res = await userService.signup(signupData);
            if (res.emailError) {
                this.inputs.email.setErrorMsg()
            } else if (res.usernameError) {
                this.inputs.username.setErrorMsg()
            } else {
                successfulSignup = true
            }
        }
        return successfulSignup
    }

    validate(signupData) {
        let isValidForm = true;
        if (!this.checkPasswords(signupData.password1, signupData.password2)) {
            this.inputs.password1.setErrorMsg();
            isValidForm = false
        } else if (signupData.password1.length < 6) {
            isValidForm = false
        }
        return isValidForm
    }

    checkPasswords(pass1, pass2) {
        return pass1 === pass2
    }

    resetErrorMessages() {
        for (let input in this.inputs) {
            this.inputs[input].resetErrorMsg()
        }
    }

}