// currently using my dev copy of the sheet which has the urls in a separate column
//const sheet = 'https://sheets.googleapis.com/v4/spreadsheets/191ExX5H64wdAvxqfdaxj13bHn31hDifH8uhczhzkyLU/values/Women%20Composers%20Database!A3:AK?key=AIzaSyA-h6VkeSPqfe299CwSS88O-qwI2MVQw0A';

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
		'icon': null,
		'type': 'name'
	},
	///////////////////////////
	{
		'label': 'living',
		'icon': '🌞',
		'type': 'living-dead'
	},
	{
		'label': 'dead',
		'icon': '🌜',
		'type': 'living-dead'
	},
	///////////////////////////
	{
		'label': 'male',
		'icon': 'M',
		'type': 'gender'
	},
	{
		'label': 'female',
		'icon': 'F',
		'type': 'gender'
	},
	{
		'label': 'non-binary',
		'icon': 'NB',
		'type': 'gender'
	},
	///////////////////////////
	{
		'label': 'orchestra',
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
		'icon': 'Cho',
		'type': 'genre'
	},
	{
		'label': 'chamber',
		'icon': 'Cha',
		'type': 'genre'
	},
	{
		'label': 'voice',
		'icon': 'V',
		'type': 'genre'
	},
	{
		'label': 'opera',
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
		'label': 'white',
		'icon': 'Wh',
		'type': 'demographic'
	},
	{
		'label': 'black',
		'icon': 'Bl',
		'type': 'demographic'
	},
	{
		'label': 'Latinx',
		'class': 'latinx',
		'icon': 'Lat',
		'type': 'demographic'
	},
	{
		'label': 'Asian',
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
		'label': 'other',
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
		'label': 'string quartet',
		'class': 'string-quartet',
		'icon': 'sq',
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
		'icon': 'bq',
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
		'label': 'URL',
		'icon': '🔗',
		'type': 'url'
	}
];

/*
 * Fields
 * ==================
 * 0:     Name
 * 1-2:   Living-dead
 * 3-5:   M, F, NB
 * 6-18:  Genreœ
 * 19-26: Demographic
 * 27:    City, State
 * 28:    Country
 * 29-35: Medium
 * 36:    URL
 * ==================
 */

const vm = new Vue ({
	el: '#app',
	data: {
		title: 'Diversity Initiative Composers Database',
		headings: null,
		list: null,
		search: '',
		filters: new Array(36),
		// these are the fields in fields[] that have associated filter checkboxes
		filterOptions: [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35 ],
		vueFields: fields // brings in the fields array as part of the Vue data
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
				for (i = 0; i < this.filters.length; i++){
					if (this.filters[i]==true && row[i]!='X'){
						returnval = false;
					}
				}
				return returnval;
			}
		}, // runFiltersAnd
		composerProps: function(row){ // return properties for each composer
			var propSpan = '';
			for (i = 1; i < fields.length; i++){
				if (row[i] == "X") {
					// propSpan += '<span class="' + (fields[i].hasOwnProperty('class') ? fields[i].class : fields[i].label) + '" title="' + fields[i].label + '">' + fields[i].icon + '</span>';
					propSpan += '<span class="' + fields[i].type + ' ' + (fields[i].hasOwnProperty('class') ? fields[i].class : fields[i].label) + (this.filters[i] ? ' selected' : '') + '" title="' + fields[i].label + '">' + fields[i].icon + '</span>';
				}
			}
			return propSpan;
		}, // composerProps
		composerGeo: function(row) { // return span for geographical information for each composer
			var geoSpan = '';
			var nodata = ['N/A', '']
			if (!nodata.includes(row[24])){ // if there's a city/state, give that
				geoSpan = row[24];

				if (!nodata.includes(row[25])) { // if there's *also* a country, add that
					geoSpan += ', ' + row[25] + ( flag( row[25] ) ? (' ' + flag( row[25] )) : '' );
				}
			}

			if (geoSpan == '' && !nodata.includes(row[25])) { // if there's only a country, give that
				geoSpan = row[25] + ( flag( row[25] ) ? (' ' + flag( row[25] )) : '' );
			}
			return geoSpan;
		} // composerGeo
	}, // methods
	mounted: function (){
		this.getData();
	}, // mounted

	template: `
		<div class="wrapper">
			<h1>{{title}}</h1>
			<div class="inputs">
				<input type="text" v-model="search" class="search" placeholder="search">
				<div class="filters">
					<template v-for="option in filterOptions">
						<label class="filter" :class="vueFields[option].type"><input type="checkbox" value="X" v-model="filters[option]">{{vueFields[option].label}} ({{headings[option]}})</label>
					</template>
				</div>
			</div>
			<div class="list-wrapper">
				<ul class="composer-list">
					<template v-for="composer in list" v-if="composer[0].match(new RegExp(search, 'i'))">
						<template v-if="runFiltersAnd(composer)">
							<li><span class="name"><a :href="composer[36]" target="_blank">{{composer[0]}}</a></span><span class="composer-props" v-html="composerProps(composer)"></span><span class="composer-geo" v-html="composerGeo(composer)"></span></li>
						</template>
					</template>
				</ul>
			</div>
		</div>
	`
}); // vm
