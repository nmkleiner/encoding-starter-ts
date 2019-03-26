<template>
    <li :icon="item.icon" :heading="item.heading" :text="item.text">
        <ButtonComponent
                :icon="item.icon || icon"
                :size="size"
                :color="color"
                :notification="item.notification"
                :isTooltipOpen="item.isTooltipOpen"
                shape="circle"
        />
        <div class="text-wrapper">
            <h3>{{item.title}}</h3>
            <span>{{item.description}}</span>
        </div>
    </li>
</template>

<script>
    import ButtonComponent from '../shared/ButtonComponent'
    import {itemMixin} from "../../vue-mixins/itemMixin";
    export default {
        mixins: [itemMixin],
        components: {
            ButtonComponent,
        },
        data() {
            return {
                size: 'medium',
                color: 'dark-gray'
            }
        },
        computed: {
            icon() {
                return 'icon'
            }
        },
    }
</script>

<style scoped>

</style>