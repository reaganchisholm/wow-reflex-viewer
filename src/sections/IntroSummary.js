import React from 'react'
import { sumBy, countBy, minBy, maxBy } from 'lodash'
import { useDataState } from '../data-context'
import CountUp from 'react-countup'
import { linearGradientDef } from '@nivo/core'
import { Line } from '@nivo/line'
import { ReactComponent as ChartIcon } from './../icons/chart-square-bar.svg';

import * as GLOBALS from './../GLOBALS'

export const IntroSummary = () => {
    const state = useDataState();
    const ratingChange = sumBy(state.data, item => Number(item.RatingChange))
    const gameOutcomes = countBy(state.data, item => item.Victory)

    return (
        <div className="pt-12 sm:pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="block mx-auto w-16 transform translate-y-3 text-gray-500 border border-gray-700 rounded-full p-4 mb-6">
                        <ChartIcon />
                    </span> 
                    <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl leading-none">
                        Games Overview
                    </h2>
                    <p className="mt-3 text-xl text-gray-400 sm:mt-4 max-w-prose mx-auto">
                        {ratingChange > 0 
                        ? "Not too shabby. I mean my record is better of course... what's that? You want me to prove it? Sorry, I can't, I'm busy hanging out with my banging hot GF."
                        : '"It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That’s how winning is done!" –Rocky Balboa'
                        }
                    </p>
                </div>
            </div>
            <div className="mt-10 pb-12 sm:pb-16">
                <div className="relative">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <dl className="sm:grid sm:grid-cols-3">
                                <div className="flex flex-col border-b border-gray-600 p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
                                        Games Played
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-gray-100">
                                        <CountUp end={state.data.length} />
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-b border-gray-600 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
                                        Wins & Losses
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-gray-100 flex items-center justify-center">
                                        <span className="text-green-400 -translate-y-6">
                                            <CountUp end={gameOutcomes.true} />
                                        </span>
                                        <span className="mx-2 font-light text-gray-400"> - </span>
                                        <span className="text-red-400">
                                            <CountUp end={gameOutcomes.false} />
                                        </span>
                                    </dd>
                                </div>
                                <div className="flex flex-col border-t border-gray-600 p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400">
                                        Rating Change
                                    </dt>
                                    <dd className={`order-1 text-5xl font-extrabold ${ratingChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {ratingChange > 0 ? '+' : ''}
                                        <CountUp end={ratingChange} />
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <RatingChangeGraph />
        </div>
    );
}

const RatingChangeGraph = () => {
    const state = useDataState();

    const ratingChange = sumBy(state.data, item => Number(item.RatingChange))
    const ratingChangeData = state.data.map((game, index) => {
        return {
            x: index,
            y: Number(game.MMR) + Number(game.RatingChange)
        }
    })
    const lowestRating = minBy(ratingChangeData, 'y')['y'];
    const highestRating = maxBy(ratingChangeData, 'y')['y'];
    const data = [{ id: 'MMR', data: ratingChangeData }] 

    return (
        <>
            <Line  
                {...GLOBALS.commonGraphSettings}
                data={data}
                enableSlices='x'
                curve="linear"
                colors={ratingChange >= 0 ? ['#34d399'] : ['#F87171']}
                enableArea={true}
                areaBaselineValu={lowestRating - (lowestRating * 0.05)}
                defs={[
                    linearGradientDef('gradientA', [
                        { offset: 0, color: 'inherit' },
                        { offset: 20, color: 'inherit', opacity: 0 },
                    ]),
                ]}
                fill={[{ match: '*', id: 'gradientA' }]}
                yScale={{
                    type: 'linear',
                    tickValues: 10,
                    min: lowestRating - (lowestRating * 0.05),
                    max: highestRating + (highestRating * 0.05),
                }}
                pointSize={10}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    
                    legend: 'Games Played',
                    legendOffset: 50,
                    legendPosition: 'middle'
                }}
                xScale={{
                    type: 'linear',
                    tickValues: 5
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 13,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'MMR',
                    legendOffset: -75,
                    legendPosition: 'middle'
                }}
            />
            <span className="block text-center text-xs text-gray-600 pl-12">*MMR in graph above may not exactly reflect your rating change</span>
        </>
    )
}