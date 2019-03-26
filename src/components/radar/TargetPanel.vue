<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="target-panel">
        <header>
            <div class="wrapper">
                <i class="icon-binoculars" @click="closePanel"></i>
                <h2>Targets</h2>
            </div>

            <div class="wrapper">
                <div class="active-wrapper">
                    <div class="active-light"></div>
                    <span>ACTIVE</span>
                </div>
                <i class="fas fa-chevron-down"></i>
            </div>
        </header>

        <main>
            <FilterInput
                    type="text"
                    placeholder="Type or select filter"
                    left-icon="filter"
                    v-model="filterBy"
                    @input="filter({filter: filterBy})"  
            >
                <template v-slot:right-icon>
                    <span class="input-right-symbol">x</span>
                </template>
            </FilterInput>
            <ul>
                <TargetItem v-for="(target ,i) in targets" :key="i" :target="target"/>
            </ul>
        </main>
    </div>
</template>
<script>
    import FilterInput from '../shared/FilterInput'
    import TargetItem from './TargetItem'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        components: {
            FilterInput,
            TargetItem
        },
        methods: {
            ...mapActions({
                filter: 'targetPanel/targets/filter',
                fetchItems: 'targetPanel/getItems',
                closePanel: 'targetPanel/togglePanel'
            }),
        },
        data() {
            return {
                filterBy: ''
            }
        },
        computed: {
            ...mapGetters({
                targets: 'targetPanel/targets/items'
            })
        },
        created() {
            this.fetchItems()
        }
    }
</script>
<style lang="scss" scoped>

</style>