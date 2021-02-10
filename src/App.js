import React, { useState } from 'react';
import { Layout } from './components/Layout';
// import { Home } from './sections/Home';
import { IntroSummary } from './sections/IntroSummary';
import { Classes } from './sections/Classes';
import { Maps } from './sections/Maps'
import { GameLength } from './sections/GameLength'
import { DemoData } from './components/DemoData'

import { DataProvider } from './data-context';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="App">
      <DataProvider>
        <Layout>
          <DemoData setIsLoaded={setIsLoaded} />
          {/* <Home /> */}
          {isLoaded &&
            <>
              <IntroSummary />
              <div className="my-32"></div>
              <Classes />
              <div className="my-32"></div>
              <Maps />
              <div className="my-32"></div>
              <GameLength />
            </>
          }
        </Layout>
      </DataProvider>
    </div>
  );
}

export default App;
