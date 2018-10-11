import axios from 'axios';
import config from '../config';

export default {
	sportFeedsIdToMLBIdMap: {
		'12563': '660670', // R. Acuna
		'12491': '572669', // L. Adams
		'12553': '645277', // O. Albies
		'12476': '622666', // J. Carmago
		'10583': '518586', // C. Culberson
		'10695': '446263', // L. Duda
		'10234': '452095', // T. Flowers
		'10237': '518692', // F. Freeman
		'12438': '608331', // M. Fried
		'11215': '542255', // E. Inciarte
		'10243': '455976', // N. Markakis
		'10459': '434671', // A. Sanchez
		'11329': '435559', // K. Suzuki
		'14753': '657053', // T. Toussanit
		'10229': '527055' // A. Vizcaino
	},
	getPlayerCumulativeData(seasonName) {
		var base64Token = btoa(
			process.env.VUE_APP_MySportsFeeds_APITOKEN +
				':' +
				process.env.VUE_APP_MySportsFeeds_PASSWORD
		);
		var authToken = 'Basic ' + base64Token;

		var apiURL =
			'https://api.mysportsfeeds.com/v1.1/pull/mlb/' +
			seasonName +
			'/cumulative_player_stats.' +
			config.MySportsFeeds_FORMAT;

		return axios
			.get(apiURL, {
				headers: {
					Authorization: authToken
				}
			})
			.then(function(response) {
				return response;
			});
	}
};
