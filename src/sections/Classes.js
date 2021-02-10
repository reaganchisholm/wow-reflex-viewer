import React, { useState } from 'react';
import { useDataState } from '../data-context'
import { countBy, sortBy, minBy, maxBy } from 'lodash'
import { ClassIcon } from './../components/ClassIcon'
import { Bar } from '@nivo/bar'
import { findIndex } from 'lodash'
import { ReactComponent as DoubleChevron } from './../icons/double-chevron-down.svg';

import * as GLOBALS from './../GLOBALS'
import { useEffect } from 'react/cjs/react.development';

export const Classes = () => {
    const state = useDataState();
    console.log(state.data);

    const friendlyCompCount = countBy(state.data,'TeamComposition')
    const mostCommonFriendlyComp = Object.keys(friendlyCompCount).reduce((a, b) => friendlyCompCount[a] > friendlyCompCount[b] ? a : b).split(',');

    const mostCommonFriendlyCompMarkup = mostCommonFriendlyComp.map((classAndSpec, index) => {
        let [theClass, theSpec] = classAndSpec.toLowerCase().split('-');
        return (
            <ClassIcon 
                key={index}
                className="mx-2"
                theClass={theClass}
                theSpec={theSpec}
            />
        )
    });

    const enemyCompCount = countBy(state.data,'EnemyComposition')
    const mostCommonEnemyComp = Object.keys(enemyCompCount).reduce((a, b) => enemyCompCount[a] > enemyCompCount[b] ? a : b).split(',');

    const mostCommonEnemyCompMarkup = mostCommonEnemyComp.map((classAndSpec, index) => {
        let [theClass, theSpec] = classAndSpec.toLowerCase().split('-');
        return (
            <ClassIcon 
                key={index}
                className="mx-2"
                theClass={theClass}
                theSpec={theSpec}
            />
        )
    });


    return (
        <div className="pt-12 sm:pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="block mx-auto w-16 transform translate-y-3 text-gray-500 border border-gray-700 rounded-full p-4 mb-6">
                        <DoubleChevron />
                    </span> 
                    <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl leading-none">
                        Class Breakdown
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 sm:mt-4 max-w-prose mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="mt-10 pb-12 sm:pb-16">
                <div className="relative">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <dl className="sm:grid sm:grid-cols-2">
                                <div className="flex flex-col border-b border-gray-600 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-4 text-lg leading-6 font-medium text-gray-400">
                                        Your Most Common <br /> Composition
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-gray-100">
                                        {mostCommonFriendlyCompMarkup}
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-gray-600 p-6 text-center sm:border-0 sm:border-li">
                                    <dt className="order-2 mt-4 text-lg leading-6 font-medium text-gray-400">
                                        Most Common Enemy <br /> Composition
                                    </dt>
                                    <dd className={`border-1 text-5xl font-extrabold`}>
                                        {mostCommonEnemyCompMarkup}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <ClassBreakdown />
        </div>
    );
}


const ClassBreakdown = () => {
    const state = useDataState();
    const [showWins, setShowWins] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [classStats, setClassStats] = useState([
        {
            theClass: 'DEATHKNIGHT',
            color: '#C41E3A',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        {
            theClass: 'DEMONHUNTER',
            color: '#A330C9',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        {
            theClass: 'DRUID',
            color: '#FF7C0A',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        {
            theClass: 'HUNTER',
            color: '#AAD372',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        { 
            theClass: 'MAGE',
            color: '#3FC7EB',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        {
            theClass: 'MONK',
            color: '#00FF98',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        { 
            theClass: 'PALADIN',
            color: '#F48CBA',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        {
            theClass: 'PRIEST', 
            color: '#FFFFFF',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        { 
            theClass: 'ROGUE',
            color: '#FFF468',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        {
            theClass: 'SHAMAN',
            color: '#0070DD',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        { 
            theClass: 'WARLOCK',
            color: '#8788EE',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }, 
        { 
            theClass: 'WARRIOR',
            color: '#C69B6D',
            ratingChange: 0,
            wins: 0,
            losses: 0
        }
    ]);

    useEffect(() => {
        let copyOfClasses = [...classStats];

        state.data.map((game, index) => {
            let theClasses = game.EnemyComposition.split(',');

            theClasses.forEach(theClass => {
                let [zClass, zSpec] = theClass.split('-');
                let classIndex = findIndex(copyOfClasses, function(o) { return o.theClass === zClass; })
                let updatedRating = copyOfClasses[classIndex].ratingChange + parseInt(game.RatingChange);
                let updatedWins = copyOfClasses[classIndex].wins;
                let updatedLosses = copyOfClasses[classIndex].losses;

                if(game.Victory === 'true'){
                    updatedWins = updatedWins + 1;
                } else {
                    updatedLosses = updatedLosses - 1;
                }

                let copyOfClass = {...copyOfClasses[classIndex]};
                copyOfClass.wins = updatedWins;
                copyOfClass.losses = updatedLosses;
                copyOfClass.ratingChange = updatedRating;

                copyOfClasses[classIndex] = copyOfClass;
            });
        });

        setClassStats(sortBy(copyOfClasses, 'ratingChange'));
        setIsLoaded(true);
    }, []);
    
    useEffect(() => {
        if(isLoaded){
            let copyOfClasses = [...classStats];

            if(showWins){
                copyOfClasses = sortBy(copyOfClasses, 'wins');
            } else {
                copyOfClasses = sortBy(copyOfClasses, 'ratingChange');
            }

            setClassStats(copyOfClasses);
        }
    }, [showWins, isLoaded])

    return (
        <>
            <div>
                <div className="hidden sm:block max-w-xs mx-auto">
                    <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-900" aria-label="Tabs">
                        <button onClick={() => setShowWins(false)}className={`text-gray-100 hover:text-gray-200 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden ${showWins ? 'bg-gray-700' : 'bg-gray-600'}  py-4 px-4 text-sm font-medium text-center hover:bg-gray-600 focus:z-10`}>
                            <span>Rating Change</span>
                            {!showWins &&
                                <span aria-hidden="true" className="bg-red-500 absolute inset-x-0 bottom-0 h-0.5"></span>
                            }
                        </button>

                        <button onClick={() => setShowWins(true)} className={`text-gray-100 hover:text-gray-200 group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-sm font-medium text-center ${showWins ? 'bg-gray-600' : 'bg-gray-700'} hover:bg-gray-600 rounded-r-lg focus:z-10`}>
                            <span>Wins / Losses</span>
                            {showWins &&
                                <span aria-hidden="true" className="bg-red-500 absolute inset-x-0 bottom-0 h-0.5"></span>
                            }
                        </button>
                    </nav>
                </div>
            </div>
            <Bar 
                {...GLOBALS.commonGraphSettings}
                data={classStats}
                keys={showWins ? ['wins', 'losses'] : ['ratingChange']}
                layout="horizontal"
                indexBy='theClass'
                colorBy="index"
                colors = {classStats.map(c => c.color)}
                minValue={minBy(classStats, showWins ? 'losses' : 'ratingChange')[showWins ? 'losses' : 'ratingChange']}
                maxValue={maxBy(classStats, showWins ? 'wins' : 'ratingChange')[showWins ? 'wins' : 'ratingChange']}
                enableGridX={false}
                enableGridY={true}
                markers={[{
                    axis: 'x',
                    value: 0,
                    lineStyle: { stroke: 'rgb(31, 41, 55)', strokeWidth: 5 },
                }]}
                axisBottom={{
                    legend: showWins ? 'Wins / Losses' : 'Rating Change',
                    legendPosition: 'middle',
                    legendOffset: 50,
                    tickSize: 0,
                    tickPadding: 12,
                }}
            />
        </>
    )
}