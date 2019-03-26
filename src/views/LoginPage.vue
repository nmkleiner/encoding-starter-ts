<template>
    <div class="login-page">

        <Welcome></Welcome>

        <section class="login-section">
            <img class="main-img" src="../../public/images/big-lock.svg"/>
            <h2>Welcome Back!</h2>
            <p class="sign-in-paragraph">
                Sign in to manage your fleet and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p class="login-directions">
                Enter Your Login info
            </p>
            <a class="learn-more-link">> Learn more about our system</a>

            <Form @submit="login" :form="form"></Form>

        </section>
    </div>
</template>
<script>
    import Welcome from '../components/login/Welcome'
    import Form from '../components/shared/Form'
    import {mapMutations} from 'vuex'
    import LoginForm from "../entities/LoginForm";

    export default {
        components: {
            Welcome,
            Form
        },
        data() {
            return {
                form: new LoginForm(),
            }
        },
        methods: {
            ...mapMutations({
                setUser: 'users/setLoggedIUser'
            }),
            async login(loginData) {
                this.form.resetErrorMessages();
                const user = await this.form.submitLogin(loginData);
                if (user) {
                    this.setUser(user)
                    this.$router.push('/')
                }
            }
        }
    }
</script>
