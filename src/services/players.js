import axios from 'axios';

import config from '../config';

export default {
	getPlayerData() {
		var base64Token = btoa(
			config.MySportsFeeds_APITOKEN + ':' + config.MySportsFeeds_PASSWORD
		);
		var authToken = 'Basic ' + base64Token;

		var seasonName = '2018-playoff';
		var forDate = '20181005';

		var apiURL =
			'https://api.mysportsfeeds.com/v1.1/pull/mlb/' +
			seasonName +
			'/daily_player_stats.' +
			config.MySportsFeeds_FORMAT +
			'?fordate=' +
			forDate;

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
