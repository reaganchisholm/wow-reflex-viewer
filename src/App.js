import React, { useState } from 'react';
import { Layout } from './components/Layout';
// import { Home } from './sections/Home';
import { IntroSummary } from './sections/IntroSummary';
import { Classes } from './sections/Classes';
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
            </>
          }
        </Layout>
      </DataProvider>
    </div>
  );
}

export default App;
