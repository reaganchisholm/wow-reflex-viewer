import React, { useState, useEffect } from 'react';
import { useDataState } from '../data-context';
import { findIndex, mean } from 'lodash';

import { ReactComponent as MapPin } from './../icons/map-pin.svg';

export const Maps = () => {
    const state = useDataState();
    const [ mapData, setMapData ] = useState([
        {
            id: 1672,
            name: "Blade's Edge Arena",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 617,
            name: "Dalaran Arena",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1505,
            name: "Nagrand Arena",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 2373,
            name: "Empyrean Domain",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1825,
            name: "Hook Point",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1552,
            name: "Ashamane's Fall",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1504,
            name: "Black Rock Hold Arena",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1911,
            name: "Mugambala",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 572,
            name: "Ruins of Lordaeron",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 618,
            name: "The Ring of Valor",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 2167,
            name: "The Robodrome",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1134,
            name: "Tiger's Peak",
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 980,
            name: "Tol'Viron Arena",
            wins: 0,
            losses: 0,
            gameLengths: [],
        }
    ]);

    useEffect(() => {
        let copyOfMapData = [...mapData];

        state.data.map((game, index) => {
            let mapIndex = findIndex(copyOfMapData, function(o) { 
                return o.id === parseInt(game.Map); 
            });

            if(mapIndex !== -1){
                let updatedWins = copyOfMapData[mapIndex].wins;
                let updatedLosses = copyOfMapData[mapIndex].losses;

                if(game.Victory === 'true'){
                    updatedWins = updatedWins + 1;
                } else {
                    updatedLosses = updatedLosses + 1;
                }

                let copyOfMap = {...copyOfMapData[mapIndex]};
                copyOfMap.wins = updatedWins;
                copyOfMap.losses = updatedLosses;
                copyOfMap.gameLengths.push(parseInt(game.Duration));

                copyOfMapData[mapIndex] = copyOfMap;
            } else {
                console.error(`Arena Map ID: ${game.Map} not found`);
            }
        });

        setMapData(copyOfMapData);
    }, []);

    let mapItems = mapData.map((map, index) => {
        let winPercentage = 0;
        if(map.wins !== 0){
            winPercentage = Math.floor(map.wins / (map.wins + map.losses) * 100);
        }
        let averageGameLength = map.gameLengths.length > 0 ? mean(map.gameLengths) : 0;

        let minutes = Math.floor(averageGameLength / 60);
        let seconds = Math.round(averageGameLength - minutes * 60);
        let avgGameLength = `${minutes}m ${seconds}s`;

        return (
            <div key={index} className="text-gray-200">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-2">
                    <div className="bg-gray-600"></div>
                </div>
                <h3 className="text-lg">{map.name}</h3>
                <p><span className={`${winPercentage > 50 ? 'text-green-300' : 'text-red-500'}`}>{winPercentage}%</span> Win Rate</p>
                <p><span className="text-green-300">{map.wins}</span> - <span className="text-red-500">{map.losses}</span></p>
                <p>Avg: {avgGameLength}</p>
            </div>
        )
    });

    return (
        <div className="pt-12 sm:pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="block mx-auto w-16 transform translate-y-3 text-gray-500 border border-gray-700 rounded-full p-4 mb-6">
                        <MapPin />
                    </span> 
                    <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl leading-none">
                        Maps
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 sm:mt-4 max-w-prose mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            <div class="grid gap-8 grid-cols-4 mt-12">
                {mapItems}
            </div>
        </div>
    );
}