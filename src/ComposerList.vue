<template lang="html">
    <div class="list-wrapper">
        <ul class="composer-list">
            <template v-for="composer in filteredList" v-if="composer[0].match(new RegExp(search, 'i'))">
                    <li>
                        <span class="name"><a :href="composer[composer.length-1]" target="_blank">{{composer[0]}}</a></span>
                        <span class="composer-props">
                            <template v-for="(field, i) in composer" v-if="(field=='X' && cardBadges.indexOf(vueFields[i].type) > -1)">
                                <span class="badge" :class="[vueFields[i].type, vueFields[i].class, { selected : filters[i] }]" @click="toggleFilter(i)">{{vueFields[i].icon}}</span>
                            </template>
                        </span>
                        <span class="composer-geo" v-html="composerGeo(composer)"></span>
                    </li>
            </template>
        </ul>
    </div>
</template>

<script>
const {flag, name, code} = require('country-emoji');

export default {
    name: 'ComposerList',
    props: [
        'filteredList',
        'search',
        'vueFields',
        'cardBadges',
        'filters'
    ],
    data () {
        return {
            filteredTotal: this.filteredList.length
        }
    },
    methods: {
        getFlags: function(country) {
			var flagmoji = flag( country );

			if (flagmoji == null && country.indexOf('\/') > -1){
				flagmoji = '';
				var countries = country.split('\/');

				for (var i = 0; i < countries.length; i++){
					flagmoji += flag( countries[i] );
				}
			}

			return flagmoji;
		}, // getFlags
        composerGeo: function(row) { // return span for geographical information for each composer
			// var cityField = this.startOfSection('geographic');
			var cityField = 40;
			var countryField = cityField + 1;
			var geoSpan = '';
			var nodata = ['N/A', '']
			if (!nodata.includes(row[cityField])){ // if there's a city/state, give that
				geoSpan = row[cityField];

				if (!nodata.includes(row[countryField])) { // if there's *also* a country, add that
					geoSpan += ', ' + row[countryField] + ( this.getFlags( row[countryField] ) ? (' ' + this.getFlags( row[countryField] )) : '' );
				}
			}

			if (geoSpan == '' && !nodata.includes(row[countryField])) { // if there's only a country, give that
				geoSpan = row[countryField] + ( this.getFlags( row[countryField] ) ? (' ' + this.getFlags( row[countryField] )) : '' );
			}
			return geoSpan;
		}, // composerGeo
        toggleFilter: function(filter) {
            this.$emit('toggleFilter', {filter})
        }, // toggleFilter
        updateTotal: function() {
            this.filteredTotal = this.filteredList.length;
        }
    }, // methods
    // beforeUpdate: {
    //
    // }

}
</script>

<style lang="css">
</style>
