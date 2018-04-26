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
		'icon': 'J'
	},
	{
		'label': 'film',
		'icon': 'F'
	},
	{
		'label': 'video games',
		'icon': 'VG'
	},
	{
		'label': 'music theatre',
		'icon': 'MT'
	},
	{
		'label': 'songwriting',
		'icon': 'SW'
	},
	{
		'label': 'electroacoustic & installation',
		'icon': 'EA'
	},
	{
		'label': 'folk/traditional genres',
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
		'icon': 'Lat'
	},
	{
		'label': 'Asian',
		'icon': 'Asn'
	},
	{
		'label': 'West Asian/North African',
		'icon': 'WANA'
	},
	{
		'label': 'South Asian',
		'icon': 'SoAs'
	},
	{
		'label': 'AmIn',
		'icon': 'American Indian'
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
		'icon': 'sq'
	},
	{
		'label': 'wind quartet',
		'icon': 'WQ'
	},
	{
		'label': 'brass quintet',
		'icon': 'bq'
	},
	{
		'label': 'young band',
		'icon': 'YB'
	},
	{
		'label': 'young orchestra',
		'icon': 'YO'
	},
	{
		'label': 'young choir',
		'icon': 'YC'
	},
	{
		'label': 'young piano',
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
					propSpan += '<span class="' + fields[i].label + '" title="' + fields[i].label + '">' + fields[i].icon + '</span>';
				}
			}
			return propSpan;
		} // composerProps
	}, // methods
	mounted: function (){
		this.getData();
	}, // mounted
	template: `
		<div id="number-box">
			<h1>{{title}}</h1>
			<ul>
				<li v-for="composer in list"><a :href="composer[36]" target="_blank">{{composer[0]}}</a><span class="composer-props" v-html="composerProps(composer)"></span></li>
			</ul>
		</div>
	`
}); // vm
