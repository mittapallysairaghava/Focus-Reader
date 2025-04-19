const Controls = ({ settings, setSettings }) => {
    const colors = [
      { name: 'Yellow', value: '#fef08a' },
      { name: 'Blue', value: '#bfdbfe' },
      { name: 'Green', value: '#bbf7d0' },
      { name: 'Pink', value: '#fbcfe8' }
    ]
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Chunk Size: {settings.chunkSize}
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={settings.chunkSize}
            onChange={(e) => setSettings({ ...settings, chunkSize: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
  
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Speed: {settings.speed}
          </label>
          <input
            type="range"
            min="50"
            max="300"
            value={settings.speed}
            onChange={(e) => setSettings({ ...settings, speed: parseInt(e.target.value) })}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
  
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            Highlight Color
          </label>
          <div className="flex space-x-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSettings({ ...settings, highlightColor: color.value })}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full transition-transform ${
                  settings.highlightColor === color.value 
                    ? 'ring-2 ring-offset-2 ring-slate-400 scale-110' 
                    : 'hover:scale-105'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
                aria-label={`${color.name} highlight color`}
              />
            ))}
          </div>
        </div>
  
        <div className="md:col-span-3 pt-2">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="rounded border-slate-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              checked={settings.font === 'opendyslexic'}
              onChange={(e) => setSettings({ ...settings, font: e.target.checked ? 'opendyslexic' : 'sans' })}
            />
            <span className="ml-2 text-slate-700">Use dyslexia-friendly font</span>
          </label>
        </div>
      </div>
    )
  }
  
  export default Controls