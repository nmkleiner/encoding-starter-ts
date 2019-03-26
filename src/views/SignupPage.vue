<template>
    <div class="login-page">

        <Welcome></Welcome>

        <section class="login-section">
            <img class="main-img" src="../../public/images/big-lock.svg"/>
            <h2>Welcome</h2>
            <p class="sign-in-paragraph">
                Sign up to manage your fleet and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="login-directions">
                Enter Your Signup info
            </p>
            <a class="learn-more-link">> Learn more about our system</a>
            <Form @submit="signup" :form="form"></Form>
        </section>
    </div>
</template>
<script>
    import Welcome from '../components/login/Welcome'
    import Form from '../components/shared/Form'
    import SignupForm from "../entities/SignupForm";

    export default {
        name: 'signup-page',
        components: {
            Welcome,
            Form
        },
        data() {
            return {
                form: new SignupForm()
            }
        },
        methods: {
            async signup(signupData) {
                console.log('res',res)
                this.form.resetErrorMessages();
                const res = await this.form.submitSignup(signupData);
                if (res) {
                    this.$router.push('/login')
                }
            }
        },
    }
</script>
