import React from 'react'
import ReactDOM from 'react-dom/client'
import Count from './Count.jsx'
import Counter from './Counter.jsx'
import Page from './Page.jsx'
import ResultDisplayer from './ResultDisplayer.jsx'
import ListUsers from './ListUsers.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Count />
    <Counter/>
    <Page user={{ firstName: 'John', lastName: 'Doe' }} />
    <ResultDisplayer getNewResult={() => 'test'} />
    <ListUsers users={[
    { firstName: 'Ada', lastName: 'Lovelace' },
    { firstName: 'Donald', lastName: 'Knuth' },
    { firstName: 'Canada', lastName: 'BIM' }
  ]} />
  </React.StrictMode>,
)
