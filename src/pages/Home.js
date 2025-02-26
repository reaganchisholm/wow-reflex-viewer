import React from 'react'
import logo from './../icons/logo.svg';

import { Form } from '../components/Form';
import { Alert } from '../components/Alert';
import { useDataState } from '../data-context';

export function Home({ setIsLoaded }) {
  const state = useDataState();
  return (
    <>
      {!state.loaded &&
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <div className="flex items-center">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10 inline-block" src={logo} alt="Reflex Stat Viewer" />
                  <h1 className="ml-4 inline-block font-bold text-white text-3xl">REFlex Stat Viewer</h1>
                </div>
                <h2 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span>View a breakdown of your </span>
                  <span className="text-red-400">PVP history</span>
                </h2>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Looking to get a better idea of how your arena games are playing out? Paste or upload the CSV data from REFlex in the form to the right to view a breakdown of your games.
                </p>
                <Alert />
              </div>
            </div>
            <Form setIsLoaded={setIsLoaded} />
          </div>
        </div>
      }
    </>
  )
}