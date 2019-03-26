<template>
    <ValidationObserver ref="observer" v-slot="{ invalid }" tag="form">
        <form @submit.prevent="handleSubmit">
            <component
                    v-for="(input,key) in form.inputs"
                    :is="componentType(input)"
                    v-model="formData[key]"
                    :input="input"
                    :key="key"
            />
            <div class="buttons-wrapper">
                <a>Forgot password?</a>
                <ButtonComponent shape="contained" text="CONNECT"/>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
    import FormInput from './FormInput'
    import Select from './Select'
    import ButtonComponent from './ButtonComponent'
    import Form from '../../entities/Form'

    export default {
        name: "Form",
        components: {
            FormInput,
            ButtonComponent,
            Select
        },
        props: {
            form: Form
        },
        data() {
            return {
                formData: {}
            }
        },
        created() {
            for (let input in this.form.inputs) {
                this.formData[input] = ''
            }
            console.log('form',this.form.inputs)
        },
        methods: {
            async handleSubmit() {
                const isValid = await this.$refs.observer.validate()
                console.log('isValid',isValid, this.$refs.observer)
                if (isValid) {
                    this.$emit('submit', this.formData)
                }
            },
            componentType(input) {
                return input.type === 'select'? Select : FormInput
            }
        },
    }
</script>

<style scoped>

</style>