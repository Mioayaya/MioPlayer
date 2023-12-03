import { ReactElement, useEffect, useState } from 'react'
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

  const renderContent = ():ReactElement => {
    if(pageType === CONFIG.Assess.WEB) {
      return <MioContent />;
    } else {
      return <MioMobContent />;
    }
  }

  return (
    <div className='app'>
      {!pageType ? <div className="loading">Loading...</div> : renderContent()}
    </div>
  )
}

export default App
