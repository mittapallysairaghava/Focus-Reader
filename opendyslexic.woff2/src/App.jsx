import { useState } from 'react'
import Demo from './components/Demo'
import Controls from './components/Controls'
import './index.css'

function App() {
  const [settings, setSettings] = useState({
    chunkSize: 3,
    speed: 200,
    highlightColor: '#fef08a',
    font: 'opendyslexic'
  })

  const sampleText = `FocusReader helps dyslexic readers by breaking text into manageable chunks. 
  Our tool highlights small groups of words at a time, reducing visual crowding and 
  improving reading comprehension. Try adjusting the settings to find what works best for you.`

  return (
    <div className={`min-h-screen p-4 md:p-8 ${settings.font === 'opendyslexic' ? 'font-dyslexic' : 'font-sans'}`}>
      <header className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-slate-800">FocusReader</h1>
        <p className="text-lg md:text-xl text-slate-600">
          A reading tool that chunks text to improve readability for dyslexic users
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
          <Demo text={sampleText} settings={settings} />
        </div>

        <div className="bg-slate-50 rounded-xl shadow-lg p-6 md:p-8">
          <Controls settings={settings} setSettings={setSettings} />
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-8 md:mt-12 text-center text-slate-500 text-sm md:text-base">
        <p>FocusReader - Making reading accessible for everyone</p>
      </footer>
    </div>
  )
}

export default App