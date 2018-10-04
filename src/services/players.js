import axios from 'axios';
 
export default {

    getPlayerData() {        
        return axios.get('https://data.lacity.org/api/views/nxs9-385f/rows.json')
        .then(function(response) {
            return response;
        })
    }
}