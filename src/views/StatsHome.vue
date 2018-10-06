<template>
    <div>
        <div class="d-flex flex-row">
                <div v-for="player in players" v-bind:key="player.playerName">                
                    <div class="p-2">
                        <b-card :title="player.playerName"
                                :img-src="player.imagesrc"
                                :img-alt="player.playerName"
                                img-top               
                                tag="article"
                                style="max-width: 20rem"
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
            otherdata: []
        }
    },
    created() {
        PlayerServices.getPlayerData()
        .then(
            response => {
                this.BuildPlayerData(response.data)
                console.log(this.otherdata)
            }
        )
    },
    methods: {
        BuildPlayerData(data) {
            let  playerArray = data.dailyplayerstats.playerstatsentry;

            playerArray.forEach(player => {
                if (player.team.ID === "130" ) { // Atlanta Braves
                   
                    this.players.push({                    
                        playerName: player.player.FirstName + ' ' + player.player.LastName,
                        imagesrc: 'http://mlb.mlb.com/mlb/images/players/head_shot/' + PlayerServices.sportFeedsIdToMLBIdMap[player.player.ID] + '.jpg',
                        playerCardData: [
                            { batting_average: player.stats.BattingAvg['#text'],
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
</style>
