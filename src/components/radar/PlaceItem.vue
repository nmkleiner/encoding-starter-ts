<template>
    <li class="place-item" :icon="item.icon" :heading="item.heading" :text="item.text">
        <ButtonComponent
                :icon="item.icon || icon"
                :img="item.img"
                :imgFormat="item.imgFormat"
                :decoration="decoration"
                :size="size"
                :color="color"
                shape="circle"
        />
        <div class="text-wrapper">
            <span v-if="favorite">Favorite</span>
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
        props: {
            decoration: null,
            favorite: Boolean,
            size: {
                type: String,
                default: 'small'
            },
        },
        computed: {
            color() {
                return this.favorite ? 'dark-blue' : 'dark-gray'
            },
            icon() {
                return this.favorite ? 'places' : 'places_g'
            }
        },
    }
</script>

<style scoped>

</style>