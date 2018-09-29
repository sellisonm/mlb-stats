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
import draggable from 'vuedraggable' 

export default {
    components: {
            draggable    
        },
    data() {
        return {
            players: [
                {
                    playerName: 'Freddie Freeman',
                    imagesrc: 'http://mlb.mlb.com/mlb/images/players/head_shot/518692.jpg',
                    playerCardData: [
                        { batting_average: '.312', home_runs: 22, rbis: 99}
                    ],
                    url: 'player/518692'
                },
                {
                    playerName: 'Ronald Acuna Jr.',
                    imagesrc: 'http://mlb.mlb.com/mlb/images/players/head_shot/660670.jpg',
                    playerCardData: [
                        { batting_average: '.288', home_runs: 29, rbis: 79}
                    ],
                    url: 'player/660670'
                }
            ]
        }
    }
}
</script>

<style scoped>
div{
    margin: 7px;
}
</style>
