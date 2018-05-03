// new sheet for Composer Diversity Database
//const sheet = 'https://sheets.googleapis.com/v4/spreadsheets/1vD-hWsQYvi6j-6NP_HCLRtmLKdPX08IXmCOeAPV7ESY/values/Composer%20Diversity%20Database%20%28IN%20PROGRESS%29!A3:AK?key=AIzaSyA-h6VkeSPqfe299CwSS88O-qwI2MVQw0A';

// ofline version
// const sheet = 'assets/wcdb-offline.json';
const sheet = 'assets/composer-diversity-offline.json';

const {flag, name, code} = require('country-emoji');

// This is a representation of the data structure (columns) in the Google Sheet
const fields = [
	{
		'label': 'name',
		'class': 'name',
		'icon': null,
		'type': 'name'
	},
	///////////////////////////
	{
		'label': 'living',
		'class': 'living',
		'icon': '🌞',
		'type': 'living-dead'
	},
	{
		'label': 'deceased',
		'class': 'dead',
		'icon': '🌜',
		'type': 'living-dead'
	},
	///////////////////////////
	{
		'label': 'male',
		'class': 'male',
		'icon': 'M',
		'type': 'gender'
	},
	{
		'label': 'female',
		'class': 'female',
		'icon': 'F',
		'type': 'gender'
	},
	{
		'label': 'non-binary',
		'class': 'non-binary',
		'icon': 'NB',
		'type': 'gender'
	},
	///////////////////////////
	{
		'label': 'orchestra',
		'class': 'orchestra',
		'icon': 'Or',
		'type': 'genre'
	},
	{
		'label': 'wind band',
		'class': 'wind-band',
		'icon': 'W',
		'type': 'genre'
	},
	{
		'label': 'chorus',
		'class': 'chorus',
		'icon': 'Cho',
		'type': 'genre'
	},
	{
		'label': 'chamber',
		'class': 'chamber',
		'icon': 'Cha',
		'type': 'genre'
	},
	{
		'label': 'voice',
		'class': 'voice',
		'icon': 'V',
		'type': 'genre'
	},
	{
		'label': 'opera',
		'class': 'opera',
		'icon': 'Op',
		'type': 'genre'
	},
	{
		'label': 'jazz/improvisation',
		'class': 'jazz',
		'icon': 'J',
		'type': 'genre'
	},
	{
		'label': 'film',
		'class': 'film',
		'icon': 'F',
		'type': 'genre'
	},
	{
		'label': 'video games',
		'class': 'video-games',
		'icon': 'VG',
		'type': 'genre'
	},
	{
		'label': 'music theatre',
		'class': 'music-theatre',
		'icon': 'MT',
		'type': 'genre'
	},
	{
		'label': 'songwriting',
		'class': 'songwriting',
		'icon': 'SW',
		'type': 'genre'
	},
	{
		'label': 'electroacoustic & installation',
		'class': 'electroacoustic',
		'icon': 'EA',
		'type': 'genre'
	},
	{
		'label': 'folk/traditional genres',
		'class': 'folk',
		'icon': 'F/Tr',
		'type': 'genre'
	},
	///////////////////////////
	{
		'label': 'string quartet',
		'class': 'string-quartet',
		'icon': 'SQ',
		'type': 'medium'
	},
	{
		'label': 'wind quintet',
		'class': 'wind-quintet',
		'icon': 'WQ',
		'type': 'medium'
	},
	{
		'label': 'brass quintet',
		'class': 'brass-quintet',
		'icon': 'BQ',
		'type': 'medium'
	},
	{
		'label': 'young band',
		'class': 'young-band',
		'icon': 'YB',
		'type': 'medium'
	},
	{
		'label': 'young orchestra',
		'class': 'young-orchestra',
		'icon': 'YO',
		'type': 'medium'
	},
	{
		'label': 'young choir',
		'class': 'young-choir',
		'icon': 'YC',
		'type': 'medium'
	},
	{
		'label': 'young piano',
		'class': 'young-piano',
		'icon': 'YP',
		'type': 'medium'
	},
	///////////////////////////
	{
		'label': 'White',
		'class': 'white',
		'icon': 'Wh',
		'type': 'demographic'
	},
	{
		'label': 'Black',
		'class': 'black',
		'icon': 'Bl',
		'type': 'demographic'
	},
	{
		'label': 'Latinx/Latin American',
		'class': 'latinx',
		'icon': 'Lat',
		'type': 'demographic'
	},
	{
		'label': 'East Asian',
		'class': 'asian',
		'icon': 'Asn',
		'type': 'demographic'
	},
	{
		'label': 'West Asian/North African',
		'class': 'wana',
		'icon': 'WANA',
		'type': 'demographic'
	},
	{
		'label': 'South Asian',
		'class': 'south-asian',
		'icon': 'SoAs',
		'type': 'demographic'
	},
	{
		'label': 'American Indian',
		'class': 'american-indian',
		'icon': 'AmIn',
		'type': 'demographic'
	},
	{
		'label': 'Other',
		'class': 'other',
		'icon': 'Oth',
		'type': 'demographic'
	},
	///////////////////////////
	{
		'label': 'city/state',
		'icon': null,
		'type': 'geographic'
	},
	{
		'label': 'country',
		'icon': null,
		'type': 'geographic'
	},
	///////////////////////////
	{
		'label': 'URL',
		'icon': '🔗',
		'type': 'url'
	},
	{
		'label': 'Based in USA',
		'class': 'usa',
		'icon': null,
		'type': 'geographic'
	},
	{
		'label': 'Based outside of USA',
		'class': 'non-usa',
		'icon': null,
		'type': 'geographic'
	}
];

function startOfSection(section) {
    for(var i = 0; i < fields.length; i += 1) {
        if(fields[i].type === section) {
            return i;
        }
    }
    return -1;
};

/*
 * Fields
 * ==================
 * 0:     Name
 * 1-2:   Living-dead
 * 3-5:   M, F, NB
 * 6-18:  Genre
 * 19-25: Medium
 * 26-33: Demographic
 * 34:    City, State
 * 35:    Country
 * 36:    URL
 * ==================
 */

const vm = new Vue ({
	el: '#app',
	data: {
		loading: true,
		title: 'Composer Diversity Database',
		headings: null,
		list: null,
		search: '',
		filters: new Array(39),
		// these are the fields in fields[] that have associated filter checkboxes
		filterOptions: [ 1, 2, 4, 5, // living, dead, female, non-binary
			6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, // genre
			19, 20, 21, 22, 23, 24, 25, // medium
			26, 27, 28, 29, 30, 31, 32, 33, // demographic
			37, 38 ], // USA/non-USA
		locationFilters: [ 'USA', 'non-USA' ],
		vueFields: fields, // brings in the fields array as part of the Vue data
		filtersCollapsed: false,
		cardBadges: ['gender', 'genre', 'medium']
	}, // data
	methods: {
		getData: function(){
			this.$http.get(sheet).then(function(response){
				var response = response.data.values;
				this.headings = response[0];
				this.list = response.slice(1);
			}, function(error){
				console.log(error.statusText);
			});
		}, // getData
		runFiltersOr: function(row){ // filter results
			if (this.filters.indexOf(true) == -1){
				return true;
			} else {
				var returnval = false;
				for (i = 0; i < this.filters.length; i++){
					if (row[i] == 'X' && this.filters[i]==true){
						returnval = true;
					}
				}
				return returnval;
			}
		}, // runFiltersOr
		runFiltersAnd: function(row){ // filter results
			if (this.filters.indexOf(true) == -1){
				return true;
			} else {
				var returnval = true;
				for (i = 0; i < 37; i++){ // only going up to 36 b/c filters[37] and filters[38] are special
					if (this.filters[i]==true && row[i]!='X'){
						returnval = false;
					}
				}

				// check for USA filter
				// filters[37] is USA; filters[38] is non-USA // row[35] is country
				if (this.filters[37]==true && row[35].indexOf('USA') == -1){
					returnval = false;
				}

				// check for non-USA filter
				if (this.filters[38]==true && row[35].indexOf('USA') > -1){
					returnval = false;
				}
				return returnval;
			}
		}, // runFiltersAnd
		toggleFilter: function(filterIndex){
			// console.log(filterIndex);
			if (this.filters[filterIndex] == false || typeof this.filters[filterIndex] == 'undefined'){
				this.filters[filterIndex] = true;
				this.filters.unshift(0);
				this.filters.shift();
				// console.log('filter off');
			} else {
				this.filters[filterIndex] = false;
				this.filters.unshift(0);
				this.filters.shift();
				// console.log('filter on');
			}
		}, // toggleFilter
		composerProps: function(row){ // return properties for each composer
			var propSpan = '';
			var badgesToShow = ['gender', 'genre', 'medium'];
			for (i = 1; i < fields.length; i++){
				if (row[i] == "X" && badgesToShow.indexOf(fields[i].type) > -1) {
					// propSpan += '<span class="' + (fields[i].hasOwnProperty('class') ? fields[i].class : fields[i].label) + '" title="' + fields[i].label + '">' + fields[i].icon + '</span>';
					propSpan += '<span class="badge ' + fields[i].type + ' ' + (fields[i].hasOwnProperty('class') ? fields[i].class : fields[i].label) + (this.filters[i] ? ' selected' : '') + '" title="' + fields[i].label + '">' + fields[i].icon + '</span>';
				}
			}
			return propSpan;
		}, // composerProps
		getFlags: function(country) {
			var flagmoji = flag( country );

			if (flagmoji == null && country.indexOf('\/') > -1){
				flagmoji = '';
				var countries = country.split('\/');

				for (i = 0; i < countries.length; i++){
					flagmoji += flag( countries[i] );
				}
			}

			return flagmoji;
		}, // getFlags
		composerGeo: function(row) { // return span for geographical information for each composer
			var geoSpan = '';
			var nodata = ['N/A', '']
			if (!nodata.includes(row[34])){ // if there's a city/state, give that
				geoSpan = row[34];

				if (!nodata.includes(row[35])) { // if there's *also* a country, add that
					geoSpan += ', ' + row[35] + ( this.getFlags( row[35] ) ? (' ' + this.getFlags( row[35] )) : '' );
				}
			}

			if (geoSpan == '' && !nodata.includes(row[35])) { // if there's only a country, give that
				geoSpan = row[35] + ( this.getFlags( row[35] ) ? (' ' + this.getFlags( row[35] )) : '' );
			}
			return geoSpan;
		}, // composerGeo
		toggleFilters: function() {
			this.filtersCollapsed = !this.filtersCollapsed;
		}
	}, // methods
	mounted: function (){
		this.getData();

		var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.filtersCollapsed = (screenWidth < 800 ? true : false);
		// console.log(screenWidth);

		for (i = 0; i < this.filters.length; i++){
			this.filters[i] = false;
		}

		this.loading = false;
	}, // mounted

	template: `
		<div class="app-wrapper">
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
				<div class="filters" id="filters" v-bind:class="{ collapsed: filtersCollapsed }">
					<div id="filters-heading"><a href="#" @click="toggleFilters()"><h3><span class="icon">&#9660;</span>Search filter options</h3></a></div>
					<div class="filter-section living-dead">
						<template v-for="option in filterOptions.slice(0,2)">
							<label class="filter" :class="vueFields[option].type"><input type="checkbox" value="X" v-model="filters[option]">{{vueFields[option].label}} ({{headings[option]}})</label>
						</template>
					</div>
					<div class="filter-section gender">
						<template v-for="option in filterOptions.slice(2,4)">
							<label class="filter" :class="vueFields[option].type"><input type="checkbox" value="X" v-model="filters[option]"><span :class="vueFields[option].type + ' badge'">{{vueFields[option].icon}}</span>{{vueFields[option].label}} ({{headings[option]}})</label>
						</template>
					</div>
					<div class="filter-section genre">
						<h4>genre</h4>
						<template v-for="option in filterOptions.slice(4,17)">
							<label class="filter" :class="vueFields[option].type"><input type="checkbox" value="X" v-model="filters[option]"><span :class="vueFields[option].type + ' badge'">{{vueFields[option].icon}}</span>{{vueFields[option].label}} ({{headings[option]}})</label>
						</template>
					</div>
					<div class="filter-section medium">
						<h4>medium/subgenre</h4>
						<template v-for="option in filterOptions.slice(17,24)">
							<label class="filter" :class="vueFields[option].type"><input type="checkbox" value="X" v-model="filters[option]"><span :class="vueFields[option].type + ' badge'">{{vueFields[option].icon}}</span>{{vueFields[option].label}} ({{headings[option]}})</label>
						</template>
					</div>
					<div class="filter-section demographic">
						<h4>demographic</h4>
						<template v-for="option in filterOptions.slice(24, 32)">
							<label class="filter" :class="vueFields[option].type"><input type="checkbox" value="X" v-model="filters[option]">{{vueFields[option].label}} ({{headings[option]}})</label>
						</template>
					</div>
					<div class="filter-section location">
						<h4>location</h4>
						<template v-for="option in filterOptions.slice(32, 34)">
							<label class="filter" :class="option"><input type="checkbox" value="X" v-model="filters[option]">{{vueFields[option].label}}</label>
						</template>
					</div>

				</div>
			</div>
			<div class="list-wrapper" v-if="!loading">
				<ul class="composer-list">
					<template v-for="composer in list" v-if="composer[0].match(new RegExp(search, 'i'))">
						<template v-if="runFiltersAnd(composer)">
							<li>
								<span class="name"><a :href="composer[36]" target="_blank">{{composer[0]}}</a></span>
								<span class="composer-props">
									<template v-for="(field, i) in composer" v-if="(field=='X' && cardBadges.indexOf(vueFields[i].type) > -1)">
										<span class="badge" :class="[vueFields[i].type, vueFields[i].class, { selected : filters[i] }]"@click="toggleFilter(i)">{{vueFields[i].icon}}</span>
									</template>
								</span>
								<span class="composer-geo" v-html="composerGeo(composer)"></span>
							</li>
						</template>
					</template>
				</ul>
			</div>

		</div>
	`
}); // vm
