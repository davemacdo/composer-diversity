// currently using my dev copy of the sheet which has the urls in a separate column
const sheet = 'https://sheets.googleapis.com/v4/spreadsheets/191ExX5H64wdAvxqfdaxj13bHn31hDifH8uhczhzkyLU/values/Women%20Composers%20Database!A3:AK?key=AIzaSyA-h6VkeSPqfe299CwSS88O-qwI2MVQw0A';

const fields = [
	{
		'label': 'name',
		'icon': null
	},
	{
		'label': 'living',
		'icon': '🌞'
	},
	{
		'label': 'dead',
		'icon': '🌜'
	},
	{
		'label': 'orchestra',
		'icon': 'Or'
	},
	{
		'label': 'wind band',
		'class': 'wind-band',
		'icon': 'W'
	},
	{
		'label': 'chorus',
		'icon': 'Cho'
	},
	{
		'label': 'chamber',
		'icon': 'Cha'
	},
	{
		'label': 'voice',
		'icon': 'V'
	},
	{
		'label': 'opera',
		'icon': 'Op'
	},
	{
		'label': 'jazz/improvisation',
		'class': 'jazz',
		'icon': 'J'
	},
	{
		'label': 'film',
		'icon': 'F'
	},
	{
		'label': 'video games',
		'class': 'video-games',
		'icon': 'VG'
	},
	{
		'label': 'music theatre',
		'class': 'music-theatre',
		'icon': 'MT'
	},
	{
		'label': 'songwriting',
		'icon': 'SW'
	},
	{
		'label': 'electroacoustic & installation',
		'class': 'electroacoustic',
		'icon': 'EA'
	},
	{
		'label': 'folk/traditional genres',
		'class': 'folk',
		'icon': 'F/Tr'
	},
	{
		'label': 'white',
		'icon': 'Wh'
	},
	{
		'label': 'black',
		'icon': 'Bl'
	},
	{
		'label': 'Latinx',
		'class': 'latinx',
		'icon': 'Lat'
	},
	{
		'label': 'Asian',
		'class': 'asian',
		'icon': 'Asn'
	},
	{
		'label': 'West Asian/North African',
		'class': 'wana',
		'icon': 'WANA'
	},
	{
		'label': 'South Asian',
		'class': 'south-asian',
		'icon': 'SoAs'
	},
	{
		'label': 'American Indian',
		'class': 'american-indian',
		'icon': 'AmIn'
	},
	{
		'label': 'other',
		'icon': 'Oth'
	},
	{
		'label': 'city/state',
		'icon': null
	},
	{
		'label': 'country',
		'icon': null
	},
	{
		'label': 'string quartet',
		'class': 'string-quartet',
		'icon': 'sq'
	},
	{
		'label': 'wind quartet',
		'class': 'wind-quartet',
		'icon': 'WQ'
	},
	{
		'label': 'brass quintet',
		'class': 'brass-quintet',
		'icon': 'bq'
	},
	{
		'label': 'young band',
		'class': 'young-band',
		'icon': 'YB'
	},
	{
		'label': 'young orchestra',
		'class': 'young-orchestra',
		'icon': 'YO'
	},
	{
		'label': 'young choir',
		'class': 'young-choir',
		'icon': 'YC'
	},
	{
		'label': 'young piano',
		'class': 'young-piano',
		'icon': 'YP'
	},
	{
		'label': null,
		'icon': null
	},
	{
		'label': null,
		'icon': null
	},
	{
		'label': null,
		'icon': null
	},
	{
		'label': 'URL',
		'icon': '🔗'
	}
];

/*
 * Fields
 * ==================
 * 0:     Name
 * 1-2:   Living-dead
 * 3-15:  Genreœ
 * 16-23: Demographic
 * 24:    City
 * 25:    Country
 * 26-32: Medium
 * 36:    URL
 * ==================
 */

const vm = new Vue ({
	el: '#app',
	data: {
		title: 'Women Composers Database',
		headings: null,
		list: null
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
		composerProps: function(row){ // return properties for each composer
			var propSpan = '';
			for (i = 1; i < fields.length; i++){
				if (row[i] == "X") {
					propSpan += '<span class="' + (fields[i].hasOwnProperty('class') ? fields[i].class : fields[i].label) + '" title="' + fields[i].label + '">' + fields[i].icon + '</span>';
				}
			}
			return propSpan;
		},
		composerGeo: function(row) { // return span for geographical information for each composer
			var geoSpan = '';
			var nodata = ['N/A', '']
			if (!nodata.includes(row[24])){ // if there's a city/state, give that
				geoSpan = row[24];

				if (!nodata.includes(row[25])) { // if there's *also* a country, add that
					geoSpan += ', ' + row[25];
				}
			}

			if (geoSpan == '' && !nodata.includes(row[25])) { // if there's only a country, give that
				geoSpan = row[25];
			}
			return geoSpan;
		} // composerProps
	}, // methods
	mounted: function (){
		this.getData();
	}, // mounted
	template: `
		<div class="wrapper">
			<h1>{{title}}</h1>
			<ul class="composer-list">
				<li v-for="composer in list"><span class="name"><a :href="composer[36]" target="_blank">{{composer[0]}}</a></span><span class="composer-props" v-html="composerProps(composer)"></span><span class="composer-geo" v-html="composerGeo(composer)"></span></li>
			</ul>
		</div>
	`
}); // vm
