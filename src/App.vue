<template>
    <div id="app" class="app-wrapper" :key="rerender">
        <div v-if="loading">
			<div class="loader">Loading...</div>
		</div>
        <div class="inputs" v-if="!loading">
            <header>
                <ul id="nav-menu">
                    <li><a href="about.html">About the project</a></li>
                </ul>
                <input type="text" v-model="search" class="search" placeholder="search" autofocus>
            </header>
        </div>
        <ComposerList :list="list" :search="search" :vueFields="vueFields" :cardBadges="cardBadges" :filters="filters"/>
    </div>
</template>

<script>
import ComposerList from './ComposerList';

const fields = require('./fields.json').list;

export default {
	name: 'app',
    components: {
        ComposerList
    }, // components
	data () {
		return {
            loading: true,
            title: 'Composer Diversity Database',
            headings: null,
            list: null,
            search: '',
            filters: new Array(45),
            // these are the fields in fields[] that have associated filter checkboxes,
            // filterOptions: getFilterOptions(),
            locationFilters: ['USA', 'non-USA'],
            vueFields: fields,
            filtersCollapsed: false,
            cardBadges: ['gender', 'genre', 'medium'],
            rerender: 0,
		}
	}, // data
    created: function() {
        var json = require('./assets/composer-diversity-offline.json');
        var response = json.values;

        this.headings = response[0];
        this.list = response.slice(1);
    }, // created
    mounted: function() {
        this.loading = false;
    }
}
</script>

<style lang="scss">
		@import './scss/style.scss'
</style>
