<template>
    <div>
        <v-icon name="spinner" v-if='showLoading' pulse scale='3' style='margin-top: 130px;'></v-icon>
        <div class="d-flex flex-row">
                <div v-for="player in players" v-bind:key="player.ID">                
                    <div class="p-2">
                            
                            <b-card :title="player.playerName"
                                :img-src="player.imagesrc"
                                :img-alt="player.playerName"
                                img-top               
                                tag="article"
                                style="display:inline-block;padding: 6px;"
                                class="mb-1">
                            <p class="card-text">

                            <b-table striped hover :items="player.playerCardData"></b-table>
                            </p>
                            <b-button :href="player.url" variant="primary">Open Profile</b-button>
                        </b-card>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>

import PlayerServices from '@/services/players'


export default {
    components: { 
        },
    data() {
        return {
            players: [],
            otherdata: [],
            showLoading: false
        }
    },
    created() {
        this.showLoading = true;
        PlayerServices.getPlayerCumulativeData('2018-playoff')
        .then(
            response => {
                this.BuildPlayerData(response.data)
                console.log(this.otherdata)
                this.showLoading = false;
            }
        )
    },
    methods: {
        BuildPlayerData(data) {
            let  playerArray = data.cumulativeplayerstats.playerstatsentry;

            playerArray.forEach(player => {
                if (player.team.ID === "130" ) { // Atlanta Braves
                   
                   let mlbID = PlayerServices.sportFeedsIdToMLBIdMap[player.player.ID];
                   
                    this.players.push({                    
                        playerName: player.player.FirstName + ' ' + player.player.LastName,
                        imagesrc: (mlbID) 
                            ? 'http://mlb.mlb.com/mlb/images/players/head_shot/' + PlayerServices.sportFeedsIdToMLBIdMap[player.player.ID] + '.jpg'
                            : "require('../assets/blank_user.png')"
                            ,
                        playerCardData: [
                            { 
                                 at_bats: player.stats.AtBats['#text'],
                                 hits: player.stats.Hits['#text'],
                                batting_average: parseFloat(player.stats.BattingAvg['#text']).toFixed(3),
                                home_runs: player.stats.Homeruns['#text'], 
                                rbis: player.stats.RunsBattedIn['#text']}

                        ]
                    })

                }
            });

            this.players.sort(function(a,b) {return b.playerCardData[0].batting_average-a.playerCardData[0].batting_average})
        }
    }
}
</script>

<style scoped>
div{
    margin: 7px;
}
.card-img-top {
    width: 250px;
}
</style>
