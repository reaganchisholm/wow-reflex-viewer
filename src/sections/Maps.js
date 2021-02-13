import React, { useState, useEffect } from 'react';
import { useDataState } from '../data-context';
import { findIndex, mean } from 'lodash';

import { ReactComponent as MapPin } from './../icons/map-pin.svg';
import { ReactComponent as Clock } from './../icons/clock.svg';

import { SectionText } from './../components/SectionText';

import bladesEdgeMapImg from './../images/blades-edge-arena.png'
import blackRookMapImg from './../images/black-rook-arena.png'
import ashmanesFallMapImg from './../images/ashmanes-fall-arena.jpg'
import dalaranSewersMapImg from './../images/dalaran-sewers-arena.jpg'
import empyreanDomainMapImg from './../images/empyrean-domain-arena.png'
import hookPointMapImg from './../images/hook-point-arena.jpg'
import mugambalaMapImg from './../images/mugambala-arena.png'
import nagrandMapImg from './../images/nagrand-arena.jpg'
import robodomeMapImg from './../images/robodome-arena.jpg'
import ruinsOfLordaeronMapImg from './../images/ruins-of-lordaeron-arena.jpg'
import tigersPeakMapImg from './../images/tigers-peak-arena.png'
import tolvirMapImg from './../images/tolvir-proving-grounds-arena.jpg'

export const Maps = () => {
    const state = useDataState();
    const [ mapData, setMapData ] = useState([
        {
            id: 1672,
            name: "Blade's Edge Arena",
            mapSrc: bladesEdgeMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 617,
            name: "Dalaran Arena",
            mapSrc: dalaranSewersMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1505,
            name: "Nagrand Arena",
            mapSrc: nagrandMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 2373,
            name: "Empyrean Domain",
            mapSrc: empyreanDomainMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1825,
            name: "Hook Point",
            mapSrc: hookPointMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1552,
            name: "Ashamane's Fall",
            mapSrc: ashmanesFallMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1504,
            name: "Black Rook Hold Arena",
            mapSrc: blackRookMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1911,
            name: "Mugambala",
            mapSrc: mugambalaMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 572,
            name: "Ruins of Lordaeron",
            mapSrc: ruinsOfLordaeronMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 618,
            name: "The Ring of Valor",
            mapSrc: bladesEdgeMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 2167,
            name: "The Robodrome",
            mapSrc: robodomeMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 1134,
            name: "Tiger's Peak",
            mapSrc: tigersPeakMapImg,
            wins: 0,
            losses: 0,
            gameLengths: [],
        },
        {
            id: 980,
            name: "Tol'Viron Arena",
            mapSrc: tolvirMapImg,
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
        // If you have no games on the map, exclude it from showing
        if(map.wins + map.losses === 0){
            return false;
        }

        let winPercentage = 0;
        if(map.wins !== 0){
            winPercentage = Math.floor(map.wins / (map.wins + map.losses) * 100);
        }
        let averageGameLength = map.gameLengths.length > 0 ? mean(map.gameLengths) : 0;

        let minutes = Math.floor(averageGameLength / 60);
        let seconds = Math.round(averageGameLength - minutes * 60);
        let avgGameLength = `${minutes}m ${seconds}s`;

        return (
            <div key={index} className="text-gray-200 leading-6">
                <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-2">
                    <img className="absolute top-0 left-0 w-100 h-100 z-10 object-cover" src={map.mapSrc} />
                    <div className="bg-gray-600"></div>
                </div>
                <h3 className="text-lg mb-2">{map.name}</h3>
                <p><span className={`${winPercentage > 50 ? 'text-green-300' : 'text-red-500'}`}>{winPercentage}%</span> Win Rate</p>
                <p><span className="text-green-300">W{map.wins}</span> &nbsp;-&nbsp; <span className="text-red-500">L{map.losses}</span></p>
                <p title="Average Game Length"><span className="inline-block relative top-0.5 w-4 text-gray-500"><Clock /></span> {avgGameLength}</p>
            </div>
        )
    });

    return (
        <div id="maps" className="pt-12 sm:pt-16">
            <SectionText>
                <SectionText.Icon>
                    <MapPin />
                </SectionText.Icon>
                <SectionText.Heading>
                    Maps
                </SectionText.Heading>
                <SectionText.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </SectionText.Body>
            </SectionText>

            <div className="grid gap-8 grid-cols-4 mt-12">
                {mapItems}
            </div>
        </div>
    );
}