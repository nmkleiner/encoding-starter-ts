<template>
    <div>
        <LineInput
                v-if="shape === 'line'"

        ></LineInput>

        <FilterInput
                v-else-if="shape === 'padded'"

        ></FilterInput>
    </div>
</template>

<script>
    import LineInput from './FormInput'
    import PaddedInput from './FilterInput'
    export default {
        name: "InputComponent",
        props: {
            shape: String
        },
        components: {
            LineInput,
            PaddedInput
        }
    }
</script>
