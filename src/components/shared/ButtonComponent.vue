<template>
    <button :class="buttonClass" @mouseenter="toggleTooltip" @mouseleave="toggleTooltip">

        <img v-if="img" :src="iconSrc" alt="icon"/>

        <i v-else-if="icon" class="icon" :class="'icon-' + icon"></i>

        <div v-if="notification" class="notification"></div>
        <div v-if="notification === 'ok'" class="notification bottom right ok"></div>
        <img
                v-if="notification === 'error' || notification === 'warning'"
                class="notification bottom right error-notification"
                :class="imageClass"
                :src="notificationSrc"
                alt="notification"
        />

        <Tooltip v-if="isTooltipOpen" :notification="notification"/>

        <div v-if="!!decoration">{{decoration}}</div>
        {{text}}

    </button>
</template>
<script>
    import Tooltip from './Tooltip'

    export default {
        components: {
            Tooltip
        },
        props: {
            color: String,
            size: String,
            shape: String,
            icon: String,
            img: String,
            imgFormat: {
                type: String,
                default: 'svg'
            },
            notification: {
                type: null,
                default: false
            },
            decoration: null,
            text: String
        },
        data() {
            return {
                isTooltipOpen: false,
            }
        },
        methods: {
            toggleTooltip() {
                if (this.notification === 'error' || this.notification === 'warning') {
                    this.isTooltipOpen = !this.isTooltipOpen
                }
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) {
                    return ''
                }
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        computed: {
            buttonClass() {
                return {
                    'dark-blue': this.color === 'dark-blue',
                    'dark-gray': this.color === 'dark-gray',
                    'white': this.color === 'white',
                    small: this.size === 'small',
                    medium: this.size === 'medium',
                    circle: this.shape === 'circle',
                    'round-left': this.shape === 'round-left',
                    'contained': this.shape === 'contained'
                }
            },
            imageClass() {
                return {
                    'tooltip-open': this.isTooltipOpen,
                    'warning': this.notification === 'warning',
                    'error': this.notification === 'error',
                };
            },
            notificationSrc() {
                return require(`../../../public/images/icons/${this.notification}.svg`)
            },
            iconSrc() {
                if (this.img === 'minus' || this.img === 'plus') {
                    return require(`../../../public/images/icons/${this.img}.png`)
                }
                return require(`../../../public/images/icons/${this.img}.svg`)
            }
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