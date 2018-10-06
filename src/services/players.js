import axios from 'axios';

import config from '../config';

export default {
	getPlayerData() {
		var base64Token = btoa(
			config.MySportsFeeds_APITOKEN + ':' + config.MySportsFeeds_PASSWORD
		);
		var authToken = 'Basic ' + base64Token;

		var seasonName = '2018-playoff';
		var gameIdentifier = '20181005-ATL-LAD';

		var apiURL =
			'https://api.mysportsfeeds.com/v1.1/pull/mlb/' +
			seasonName +
			'/game_boxscore.' +
			config.MySportsFeeds_FORMAT +
			'?gameid=' +
			gameIdentifier;

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
