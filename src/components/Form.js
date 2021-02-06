import React, { useState } from 'react';
import Papa from 'papaparse';

import { FileUpload } from './FileUpload';
import { useDataDispatch } from './../data-context';

export const Form = () => {
    const [pastedCSV, setPastedCSV] = useState();
    const dispatch = useDataDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        var parsed = Papa.parse(pastedCSV, { header: true });
        dispatch({type: 'init', payload: parsed.data})
        console.log('Parsed Success');
    }

    return (
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                  <div className="px-4 py-8 sm:px-10">
                    <div className="mt-1">
                      <FileUpload />
                    </div>

                    <div className="mt-6 relative">
                      <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                          Or
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-2">
                            Paste your CSV data
                          </label>
                          <textarea placeholder="CSV data here..." col="40" value={pastedCSV} onChange={(event) => setPastedCSV(event.target.value)} className="block w-full h-24 shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm border-gray-300 rounded-md" />
                        </div>

                        <div>
                          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                    <p className="text-xs leading-5 text-gray-500">Your data won't be passed onto the server. Everything is processed within your browser and never leaves your control.</p>
                  </div>
                </div>
              </div>
        
    );
}