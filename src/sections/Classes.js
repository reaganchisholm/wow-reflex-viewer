import React from 'react';
import { useDataState } from '../data-context'
import { countBy } from 'lodash'
import { ClassIcon } from './../components/ClassIcon'

import { ReactComponent as DoubleChevron } from './../icons/double-chevron-down.svg';

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
        </div>
    );
}