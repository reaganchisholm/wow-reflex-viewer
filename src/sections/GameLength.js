import React, { useState, useEffect } from 'react';
import { useDataState } from '../data-context';
import { Funnel } from '@nivo/funnel';

// Components
import { SectionText } from './../components/SectionText';

// Icons
import { ReactComponent as Clock } from './../icons/clock.svg';

import { commonGraphSettings } from '../GLOBALS';

export const GameLength = () => {
    const state = useDataState();
    const [ gameLengths, setGameLengths ] = useState({
        "0-1min": {
            games: 0,
            wins: 0,
            winPercentage: 0
        },
        "1-2min": {
            games: 0,
            wins: 0,
            winPercentage: 0
        },
        "2-3min": {
            games: 0,
            wins: 0,
            winPercentage: 0
        },
        "3-4min": {
            games: 0,
            wins: 0,
            winPercentage: 0
        },
        "4-5min": {
            games: 0,
            wins: 0,
            winPercentage: 0
        },
        "5min+": {
            games: 0,
            wins: 0,
            winPercentage: 0
        },
    }); 
    const [ data, setData ] = useState([]);

    useEffect(() => {
        let copyOfGameLengths = Object.assign({}, gameLengths);

        state.data.map((game, index) => {
            let length = parseInt(game.Duration);
            if(length < 60){
                copyOfGameLengths["0-1min"].games = copyOfGameLengths["0-1min"].games + 1;
                if(game.Victory === "true"){
                    copyOfGameLengths["0-1min"].wins = copyOfGameLengths["0-1min"].wins + 1;
                }
            } else if(length < 120){
                copyOfGameLengths["1-2min"].games = copyOfGameLengths["1-2min"].games + 1;
                if(game.Victory === "true"){
                    copyOfGameLengths["1-2min"].wins = copyOfGameLengths["1-2min"].wins + 1;
                }
            } else if(length < 180){
                copyOfGameLengths["2-3min"].games = copyOfGameLengths["2-3min"].games + 1;
                if(game.Victory === "true"){
                    copyOfGameLengths["2-3min"].wins = copyOfGameLengths["2-3min"].wins + 1;
                }
            } else if(length < 240){
                copyOfGameLengths["3-4min"].games = copyOfGameLengths["3-4min"].games + 1;
                if(game.Victory === "true"){
                    copyOfGameLengths["3-4min"].wins = copyOfGameLengths["3-4min"].wins + 1;
                }
            } else if(length >= 300){
                copyOfGameLengths["5min+"].games = copyOfGameLengths["5min+"].games + 1;
                if(game.Victory === "true"){
                    copyOfGameLengths["5min+"].wins = copyOfGameLengths["5min+"].wins + 1;
                }
            }
        });

        let copyOfData = [...data];
        for (const time in copyOfGameLengths) {
            let copyOfTime = Object.assign({}, copyOfGameLengths[time]);
            let winPercentage = 0;

            if(copyOfTime.wins > 0){
                winPercentage =  Math.round(copyOfTime.wins / copyOfTime.games * 100)
            }

            copyOfGameLengths[time].winPercentage = winPercentage;

            let dataItem = {
                id: time,
                value: winPercentage,
                label: time
            }

            copyOfData.push(dataItem);
        }

        setData(copyOfData);
        setGameLengths(copyOfGameLengths);
    }, []);

    // https://nivo.rocks/funnel/

    console.log(data);

    return (
        <div id="game-length" className="pt-12 sm:pt-16">
            <SectionText>
                <SectionText.Icon>
                    <Clock />
                </SectionText.Icon>
                <SectionText.Heading>
                    Game Length
                </SectionText.Heading>
                <SectionText.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </SectionText.Body>
            </SectionText>
            {data.length > 0 && 
                <Funnel
                    {...commonGraphSettings}
                    data={data}
                    colors={{ scheme: 'spectral' }}
                    direction="horizontal"
                    borderWidth={20}
                    labelColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
                    beforeSeparatorLength={100}
                    beforeSeparatorOffset={20}
                    afterSeparatorLength={100}
                    afterSeparatorOffset={20}
                    currentPartSizeExtension={10}
                    currentBorderWidth={40}
                    motionConfig="wobbly"
                />
            }
        </div>
    );
}