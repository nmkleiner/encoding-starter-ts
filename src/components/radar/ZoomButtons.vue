<template>
    <div class="zoom-buttons">
        <ButtonComponent
                v-for="(button,i) in slotButtons"
                :key="i"
                :img="button.name"
                imgFormat="png"
        />

        <div class="up-down-wrapper">
            <ButtonComponent
                    v-for="(button,i) in upDownButtons"
                    :key="i"
                    :icon="button.name"
            />
        </div>
    </div>
</template>
<script>
    import ButtonComponent from '../shared/ButtonComponent'
export default {
    components: {
        ButtonComponent
    },
    data() {
        return {
            slotButtons: [
                {name: 'plus'},
                {name: 'minus'},
            ],
            upDownButtons: [
                {name: 'up'},
                {name: 'down'},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>