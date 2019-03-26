<!--suppress ALL -->

<template>
    <div class="input-wrapper form-input" :class="{'hasRightIcon': !!input.rightIcon}">
        <span :class="{'float': isFloating}" class="floating-placeholder caps">
            {{input.label}}
        </span>
        <ValidationProvider :name="input.label" :rules="input.rules">
            <div slot-scope="{ errors }">
                <input
                        :type="input.type"
                        :value="value"
                        ref="input"
                        v-model="inputValue"
                        @input="updateValue"
                        @focus="handleFocus"
                        @blur="handleBlur"
                />
                        <!--@change="handleChange"-->
                <span v-show="showInputErrorMsg" class="msg-label caps">
                    {{errors[0]}}
                </span>
                <span v-show="input.showSubmitErrorMsg" class="msg-label caps">
                    {{input.submitErrorMsg}}
                </span>
            </div>
        </ValidationProvider>


        <i v-if="input.rightIcon" :class="'icon-' + input.rightIcon"></i>
    </div>
</template>
<script>
    import FormInput from "../../entities/FormInput";

    export default {
        props: {
            input: FormInput,
            value: null,
        },
        data() {
            return {
                isFloating: false,
                inputValue: '',
                showInputErrorMsg: false,
                showSubmitErrorMsg: false
            }
        },
        methods: {
            updateValue() {
                this.$emit('input', this.$refs.input.value)
                this.handleChange()
            },
            handleFocus() {
                this.isFloating = true
            },
            handleBlur() {
                this.handleErrorMsg()
                this.handleIsFloating()
            },
            handleErrorMsg() {
                this.showInputErrorMsg = true
            },
            handleIsFloating() {
                if (!this.value) {
                    this.isFloating = false
                }
            },
            handleChange() {
                this.$emit('onInputChange')
            }
        },
        mounted() {
            if (this.inputValue) {
                this.isFloating = true
            }
        }
    }
</script>
