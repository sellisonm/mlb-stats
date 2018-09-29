import axios from 'axios'

function getPlayerData(id) {
    axios.get('https://api.mysportsfeeds.com/v1.1/pull/mlb/2018-2019-regular/cumulative_player_stats.json?player="freddie-freeman")
}