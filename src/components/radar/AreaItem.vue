<template>
    <li class="area-item">
        <img :src="imgSrc"/>

        <div class="text-wrapper">
            <h3>{{item.title}}</h3>
            <span>{{item.description}}</span>
        </div>
    </li>
</template>

<script>
    import {itemMixin} from "../../vue-mixins/itemMixin";

    export default {
        mixins: [itemMixin],
        computed: {
            imgSrc() {
                return require(`../../../public/images/icons/${this.item.img}.jpg`)
            }
        }
    }
</script>

<style scoped>

</style>