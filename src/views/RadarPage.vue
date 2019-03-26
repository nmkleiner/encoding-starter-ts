<template>
    <div class="radar-page">

        <div class="top-left-buttons-wrapper">
            <ButtonComponent
                    v-for="(button,i) in topButtons"
                    @click.native="setLeftPanelTheme({theme: button.name})"
                    color="dark-blue"
                    size="small"
                    shape="circle"
                    :icon="button.name"
                    :key="i"
            />
        </div>

        <ButtonComponent
                class="top-right-button"
                color="dark-blue"
                size="small"
                shape="round-left"
                icon="binoculars"
                :notification="true"
                @click.native="toggleRightPanel"
        />

        <transition name="fade" appear>
            <LeftPanel v-if="isLeftPanelOpen"/>
        </transition>

        <transition name="slide">
            <TargetPanel @closePanel="toggleRightPanel" v-if="isRightPanelOpen"/>
        </transition>

        <div class="bottom-right-buttons-wrapper">
            <ButtonComponent
                    shape="circle"
                    color="white"
                    size="small"
                    icon="Union"
            />
            <ZoomButtons/>
        </div>

        <ButtonComponent
                class="bottom-left-button"
                color="white"
                size="small"
                shape="circle"
                icon="Union"
        />

        <Scale/>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import ButtonComponent from '../components/shared/ButtonComponent'
    import ZoomButtons from '../components/radar/ZoomButtons'
    import Scale from '../components/radar/Scale'
    import LeftPanel from '../components/radar/LeftPanel'
    import TargetPanel from '../components/radar/TargetPanel'
    import userService from '../services/user.service'

    export default {
        name: 'radar-page',
        components: {
            ButtonComponent,
            ZoomButtons,
            Scale,
            LeftPanel,
            TargetPanel
        },
        methods: {
            ...mapActions({
                setLeftPanelTheme: 'leftPanel/setTheme',
                toggleRightPanel: 'targetPanel/togglePanel'
            })
        },
        data() {
            return {
                topButtons: [
                    {name: 'burger'},
                    {name: 'devices'},
                    {name: 'areas'},
                    {name: 'places'}
                ],
            }
        },
        computed: {
            ...mapState({
                isRightPanelOpen: (state) => state.containers.targetPanel.isOpen,
                isLeftPanelOpen: (state) => state.containers.leftPanel.isPanelOpen
            })
        },
        beforeRouteEnter: async (to, from, next) => {
            const isLoggedIn = await userService.isLoggedIn()
            if (isLoggedIn) {
                next()
            } else {
                next({name: 'login-page'})
            }
        }
    }
</script>
