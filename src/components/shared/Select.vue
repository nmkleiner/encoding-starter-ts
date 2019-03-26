<template>
    <div class="input-wrapper form-input">
        <!--<ValidationProvider :name="input.name" :rules="'required'">-->
            <select
                    v-validate="'required'"
                    :value="value"
                    ref="input"
                    v-model="inputValue"
                    :name="input.name"
                    @input="updateValue"
                    @focus="handleErrorMsg"
                    :style="{'width': '400px'}"
            >
                <option value="">{{input.label}}</option>
                <option v-for="(option,idx) in input.options" :key="idx" :value="option">{{option}}</option>

            </select>
            <span class="msg-label caps">
                {{errors.items.length? 'Must choose country' : ''}}
            </span>
        <!--</ValidationProvider>-->
    </div>
</template>

<script>
    export default {
        name: "Select",
        props: {
            input: Object,
            value: null,
        },
        data() {
            return {
                showInputErrorMsg: true,
                inputValue: ''
            }
        },
        methods: {
            updateValue() {
                this.$emit('input', this.$refs.input.value)
                this.handleChange()
            },
            handleErrorMsg() {
                this.showInputErrorMsg = true
            },
            handleChange() {
                this.$emit('onInputChange')
            }
        }
    }
</script>

<style scoped>

</style>