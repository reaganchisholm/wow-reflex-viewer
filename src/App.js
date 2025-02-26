import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { DataProvider } from './data-context';
import { StickyNav } from './components/StickyNav';
import { Stats } from './pages/Stats';

function App() {
  return (
    <div className="App relative">
      <DataProvider>
        <StickyNav />
        <Layout>
          <Home />
          <Stats />
        </Layout>
      </DataProvider>
    </div>
  );
}

export default App;
