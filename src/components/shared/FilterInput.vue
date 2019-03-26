<template>
    <div class="input-wrapper filter-input" >
        <i :class="'icon-' + leftIcon" class="input-left-symbol"></i>
        <div v-if="leftIcon" class="divider"></div>
        <input
                :type="type"
                :value="value"
                :placeholder="placeholder"
                ref="input"
                @input="updateValue"
        />

        <slot name="right-icon"></slot>
    </div>
</template>
<script>
    // import FormInput from "../../entities/FormInput";

    export default {
        props: {
            /*input : {
                type: FormInput
            },*/
            type: String,
            placeholder: String,
            rightIcon: Object,
            leftIcon: null,
            value: null,
        },
        methods: {
            updateValue() {
                this.$emit('input', this.$refs.input.value)
            },
        }
    }
</script>
