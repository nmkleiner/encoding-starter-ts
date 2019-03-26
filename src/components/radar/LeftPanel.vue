<template>
    <div :class="theme" class="left-panel">

        <LeftPanelHeader :theme="theme"></LeftPanelHeader>

        <main v-if="items && items.length">
            <ul>
                <transition-group name="fade" mode="out-in">
                    <component
                            :is="themeItem"
                            v-for="(item,i) in items"
                            :decoration="i === 0 && '★'"
                            :favorite="i === 0"
                            :item="item"
                            :key="i"
                    />
                </transition-group>
            </ul>
        </main>
        <NotFound v-else :theme="theme"/>
    </div>
</template>
<script>
    import NotFound from './NotFound'
    import PlaceItem from './PlaceItem'
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    import AreaItem from "./AreaItem";
    import DeviceItem from "./DeviceItem";
    import LeftPanelHeader from "./LeftPanelHeader";

    export default {
        components: {
            DeviceItem,
            AreaItem,
            NotFound,
            PlaceItem,
            LeftPanelHeader
        },
        computed: {
            ...mapState({
                theme: (state) => state.containers.leftPanel.theme
            }),
            ...mapGetters({
                items: 'leftPanel/items',
            }),
            themeItem() {
                switch (this.theme) {
                    case 'places':
                        return 'PlaceItem';
                    case 'devices':
                        return 'DeviceItem';
                    case 'areas':
                        return 'AreaItem';
                    default:
                        return ''
                }
            }
        },
        data() {
            return {
                filterBy: ''
            }
        },
        methods: {
            ...mapMutations({
                close: 'leftPanel/close'
            }),
            ...mapActions({
                fetchData: 'leftPanel/getItems',
            }),

        },
        created() {
            this.fetchData();
        }
    }
</script>

