import React from 'react';
import { useDataState } from '../data-context';

import { IntroSummary } from './../sections/IntroSummary';
import { Classes } from './../sections/Classes';
import { Maps } from './../sections/Maps'
// import { GameLength } from './../sections/GameLength'

export const Stats = () => {
    const state = useDataState();

    return (
        <>
          {state.loaded &&
            <div>
              <IntroSummary />
              <div className="my-32"></div>
              <Classes />
              <div className="my-32"></div>
              <Maps />
              <div className="my-32"></div>
              {/* <GameLength /> */}
            </div>
          }
        </>
    );
}