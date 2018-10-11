module.exports = {
	baseUrl:
		process.env.NODE_ENV === 'production'
			? 'https://s3.amazonaws.com/mlb-stats-sellison/mlbstats'
			: '/'
};
