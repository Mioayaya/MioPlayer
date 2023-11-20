import { useEffect, useState } from 'react'
import { assessFunc } from './utils';
import { CONFIG } from './common';
import './App.css';
import MioContent from './pages/content';
import MioMobContent from './mobile/content';

function App() {
  const [pageType,setPageType] = useState<string>('');

  useEffect(() => {
    setPageType(assessFunc.assessPage());
  },[])
  return (
    <div className='app'>
      {
        !pageType ? <>loading····</>
        : <>
          {
            pageType === CONFIG.ASSESS.WEB 
            ? <MioContent />
            : <MioMobContent />
          }</>  
      }
    </div>
  )
}

export default App
