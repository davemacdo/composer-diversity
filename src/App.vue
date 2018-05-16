<template>
    <div id="app" class="app-wrapper" :key="rerender">
        <div v-if="loading">
			<div class="loader">Loading...</div>
		</div>
        <FormInputs v-bind="{filtersCollapsed, filters, filterOptions, vueFields, headings, search, startOfSection, numberOfType, toggleFilterView, filteredTotal}" @updateFilters="updateFilters" @clearFilters="clearFilters" />
        <ComposerList v-bind="{filteredList, search, vueFields, cardBadges, filters}" @toggleFilter="toggleFilter" />
    </div>
</template>

<script>
import ComposerList from './ComposerList';
import FormInputs from './FormInputs';

const fields = require('./fields.json').list;

export default {
	name: 'app',
    components: {
        FormInputs,
        ComposerList
    }, // components
	data () {
		return {
            vueFields: fields,
            loading: true,
            title: 'Composer Diversity Database',
            headings: null,
            list: null,
            filteredList: null,
            search: '',
            filters: new Array(45),
            // these are the fields in vueFields[] that have associated filter checkboxes,
            filterOptions: null,
            locationFilters: ['USA', 'non-USA'],
            filtersCollapsed: false,
            cardBadges: ['gender', 'genre', 'medium'],
            rerender: 0,
            filteredTotal: null
		}
	}, // data
    methods: {
        toggleFilter: function(payload){
			var filterIndex = payload.filter;
            // console.log(filterIndex);
			if (this.filters[filterIndex] == false || typeof this.filters[filterIndex] == 'undefined'){
				this.filters[filterIndex] = true;
				// this.filters.unshift(0);
				// this.filters.shift();
				// console.log('filter off');
			} else {
				this.filters[filterIndex] = false;
				// this.filters.unshift(0);
				// this.filters.shift();
				// console.log('filter on');
			}
            this.runFiltersAnd();
			this.rerender++;
		}, // toggleFilter
        updateFilters: function(payload) {
            console.log(payload);
            this.runFiltersAnd();
        }, // updateFilters
        clearFilters: function() {
            for (var i = 0; i < this.filters.length; i++) {
				this.filters[i] = false;
			}
			this.runFiltersAnd();
        }, // clearFilters
        startOfSection: function(section) {
            for(var i = 0; i < this.vueFields.length; i++) {
                if(this.vueFields[i].type === section) {
                    return i;
                }
            }
            return -1;
        }, // startOfSection
        numberOfType: function(section) {
            var count = 0;
        	for(var i = 0; i < this.vueFields.length; i++){
        		if (this.vueFields[i].type === section) {
        			count++;
        		}
        	}
        	return count;
        }, // numberOfType
        fieldsForSection: function(section) {
            var start = this.startOfSection(section);
        	var numToAdd = this.numberOfType(section);
        	var fieldsToAdd = [];

        	for (var i = start; i < (start + numToAdd); i++) {
        		fieldsToAdd.push(i);
        	}

        	return fieldsToAdd;
        }, // fieldsForSection
        getFilterOptions: function() {
            var options = [ 1, 2, 4, 5 ]; // living, dead, gender
        	var sections = ['genre', 'medium', 'demographic'];
        	var geoFilters = [ this.vueFields.length-2, this.vueFields.length-1 ];

        	// I have no idea why this doesn't work, but I'm giving up for now.
        	// for (i = 0; i < sections.length; i++){
        	// 	options = options.concat(fieldsForSection(sections[i]));
        	// }

        	// I really hate the way this looks, but it works!
        	options = options.concat(this.fieldsForSection(sections[0]));
        	options = options.concat(this.fieldsForSection(sections[1]));
        	options = options.concat(this.fieldsForSection(sections[2]));

        	options = options.concat(geoFilters);
        	// console.log('options: ' + options);

        	// console.log(fieldsToAdd('genre'));
        	return options;

        }, // getFilterOptions
        runFiltersAnd: function(){ // filter results

            this.filteredList = this.list.filter((row) => {
                var returnval = true;

                for (var i = 0; i < this.filters.length-2; i++) {
                    if (this.filters[i]==true && row[i]!='X') {
                        returnval = false;
                    }
                }

                var usaFilter = this.filters.length - 2;
				var nonUsaFilter = usaFilter + 1;
				var countryField = this.startOfSection('geographic') + 1;
				if (this.filters[usaFilter]==true && row[countryField].indexOf('USA') == -1){
					returnval = false;
				}

				// check for non-USA filter
				if (this.filters[nonUsaFilter]==true && row[countryField].indexOf('USA') > -1){
					returnval = false;
				}
                return returnval;
            })
            this.filteredTotal = this.filteredList.length
		}, // runFiltersAnd
        toggleFilterView: function() {
            this.filtersCollapsed = !this.filtersCollapsed;
        }

    }, // methods
    created: function() {
        var json = require('./assets/composer-diversity-offline.json');
        var response = json.values;

        this.headings = response[0];
        this.list = response.slice(1);
        this.filteredList = this.list;
        this.filteredTotal = this.filteredList.length;

        // initialize filters array as all false
        for (var i = 0; i < this.filters.length; i++){
            this.filters[i] = false;
        }
    }, // created
    mounted: function() {
        this.loading = false;

        // hide or show filters based on screen width
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.filtersCollapsed = (screenWidth < 800 ? true : false);

        // establish which fields get filter toggles
        this.filterOptions = this.getFilterOptions();

    }
}
</script>

<style lang="scss">
		@import './scss/style.scss'
</style>
