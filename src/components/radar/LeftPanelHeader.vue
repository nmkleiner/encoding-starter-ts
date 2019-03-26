<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <header>
        <h2 class="caps">{{theme}}</h2>

        <FilterInput
                type="text"
                placeholder="Type or select filter"
                left-icon="filter"
                v-model="filterBy"
        >
            <template v-slot:right-icon>
                <span class="input-right-symbol">x</span>
            </template>
        </FilterInput>
        <span class="caps">22 {{theme}}</span>
    </header>
</template>

<script>
    import FilterInput from '../shared/FilterInput'
    import {mapActions} from 'vuex'

    export default {
        components: {
            FilterInput
        },
        props: {
            theme: {
                type: String,
            }
        },
        methods: {
            ...mapActions({
                filter: 'leftPanel/filter'
            })
        },
        computed: {
            filterBy: {
                get() {
                    return this.$store.getters['leftPanel/filter']
                },
                set(filterBy) {
                    this.filter({filter: filterBy})
                }
            }
        },
    }
</script>
