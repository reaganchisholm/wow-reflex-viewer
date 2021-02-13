import React from 'react';

import { ReactComponent as ChartIcon } from './../icons/chart-square-bar.svg';
import { ReactComponent as DoubleChevron } from './../icons/double-chevron-down.svg';
import { ReactComponent as MapPin } from './../icons/map-pin.svg';
import { ReactComponent as Clock } from './../icons/clock.svg';
import { ReactComponent as ArrowLeft } from './../icons/arrow-left.svg';
import { useDataDispatch, useDataState } from '../data-context';

export const StickyNav = () => {
    const dispatch = useDataDispatch();
    const state = useDataState();

    return (
        <div className="fixed top-8 left-8 z-10">
            {state.loaded &&
                <>
                    <button 
                        className="text-gray-400 mb-4" 
                        onClick={() => {
                            dispatch({type: 'destroy'});
                        }}
                    >
                        <span className="inline-block w-4 relative top-0.5"><ArrowLeft /></span> Back
                    </button>
                    <nav className="flex flex-col bg-gray-900 py-4 px-4 rounded-lg">
                        <AnchorLink
                            id="games-overview" 
                            icon={<ChartIcon />}
                        >
                            Games Overview
                        </AnchorLink>
                        <AnchorLink
                            id="class-breakdown" 
                            icon={<DoubleChevron />}
                        >
                            Class Breakdown
                        </AnchorLink>
                        <AnchorLink
                            id="maps" 
                            icon={<MapPin />}
                        >
                            Maps
                        </AnchorLink>
                        <AnchorLink
                            id="game-length" 
                            icon={<Clock />}
                        >
                            Game Length
                        </AnchorLink>
                    </nav>
                </>
            }
        </div>
    );
}

const AnchorLink = ({ id, icon, children }) => (
    <a className="relative transition-colors text-gray-200 pr-6 pl-12 py-3 hover:bg-gray-800 rounded-lg" href={`#${id}`}>
        <span className="inline-block w-6 mr-4 text-gray-600 absolute left-3">{icon}</span>
        {children} 
    </a>
)