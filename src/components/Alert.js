import React from 'react';

import { ReactComponent as ArrowRight } from './../icons/arrow-right.svg';

export const Alert = () => {
    return (
        <div className="rounded-md bg-gray-900 py-4 px-4 mt-12 inline-block">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg class="h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-gray-200">
                        Not sure what REFlex is?
                    </h3>
                    <div className="mt-2 text-sm max-w-sm text-gray-400">
                        <p>
                            REFlex is a World of Warcraft Addon that keeps track of your arena games and provides CSV dumps of the data.
                            <a className="block mt-4 text-gray-500 hover:text-gray-400" href="https://www.curseforge.com/wow/addons/reflex-battleground-historian" target="_blank" rel="noopener">
                                View the addon page 
                                <span className="inline-block w-4 relative top-0.5 ml-1"><ArrowRight /></span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}