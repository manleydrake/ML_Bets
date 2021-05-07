import React, { useState } from 'react';
import './Scoreboard.css'

const Scoreboard = (props) => {

    return (
        <div class="scoreboard">
            <div class="team team-a houston">
                <div class="team-logo">
                    <img src={"https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/" + props.home.toLowerCase() + ".gif"} width="50px" height="50px" />
                </div>
                <div class="team-detail">
                    <div class="team-nameandscore">
                        <div class="team-name">
                            {props.home}
                        </div>
                        <div class="team-score">
                            {props.homeScore}
                        </div>
                    </div>
                    <div class="team-thisgame">
                        <div class="team-times">
                          
            </div>
                        <div class="team-bonus">
                            
            </div>
                    </div>
                </div>
            </div>
            <div class="team team-b dallas">
                <div class="team-logo">
                    <img src={"https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_80x64/" + props.away.toLowerCase() + ".gif" }width="50px" height="50px" />
                </div>
                <div class="team-detail">
                    <div class="team-nameandscore">
                        <div class="team-name">
                            {props.away}
                        </div>
                        <div class="team-score">
                            {props.awayScore}
                        </div>
                    </div>
                    <div class="team-thisgame">
                        <div class="team-times">
                            
            </div>
                        <div class="team-bonus">
                            
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scoreboard 
