import React from 'react'
import { useDataDispatch } from '../data-context'
import Papa from 'papaparse'
import { orderBy } from 'lodash'

import {ReactComponent as DocumentReportIcon} from './../icons/document-report.svg';

export function FileUpload() {
    const dispatch = useDataDispatch();

    function onFileUpload(event){
      event.preventDefault();

      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function() {
        var csv = reader.result;
        var parsed = Papa.parse(csv, { header: true });
        var orderedData = orderBy(parsed.data, 'Timestamp')

        dispatch({type: 'init', payload: orderedData})
      };
    
      reader.onerror = function() {
        console.log(reader.error);
      };

    }

    return (
        <div>
            <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-2">
                Upload CSV file 
            </label>
            <div className="mt-2 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                        <div className="w-8 text-gray-400 mx-auto">
                            <DocumentReportIcon />
                        </div>
                        <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                            <span>Upload a CSV file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={onFileUpload}/>
                            </label>
                            {/* <p className="pl-1">or drag and drop</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}