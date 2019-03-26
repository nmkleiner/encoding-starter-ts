<template>
    <li class="target-item" :class="target.active? 'active' : 'inactive'">
        <div class="vertical-slot" :class="target.color"></div>
        <div class="text-wrapper">
            <div class="top-wrapper">
                <div class="active-wrapper">
                    <div class="active-light"></div>
                    <span :style="activeStyle">{{activeText}}</span>
                </div>
                <span class="c-num">{{target.serialNum}}</span>
            </div>
            <h3>{{target.title}}</h3>
            <span class="location">{{target.area.title}}</span>
        </div>
    </li>
</template>
<script>
    export default {
        props: {
            target: Object,
        },
        computed: {
            activeText() {
                return this.active ? 'ACTIVE' : 'Inactive'
            },
            activeStyle() {
                return {color: !this.active && '#78849e'}
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>