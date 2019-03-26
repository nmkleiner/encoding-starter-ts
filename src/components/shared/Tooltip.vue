<template>
    <transition name="slide-right">
        <div class="tooltip caps">{{notification}} details in this tooltip</div>
    </transition>
</template>

<script>
export default {
    props: {
        notification: String
    },
}
</script>
<style lang="scss" scoped>

    .slide-right-enter-active, .slide-right-leave-active {
        transition: .25s ease-out;
        transform: translateX(0px)
    }

    .slide-right-enter, .slide-right-leave-to {
        opacity: 0;
        transform: translateX(20px)
    }
</style>