import { useState, useEffect } from 'react'

const Demo = ({ text, settings }) => {
  const [currentChunk, setCurrentChunk] = useState(0)
  const chunks = chunkText(text, settings.chunkSize)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChunk((prev) => (prev + 1) % chunks.length)
    }, settings.speed * 10)

    return () => clearInterval(timer)
  }, [chunks.length, settings.speed])

  return (
    <div className="text-base md:text-lg leading-relaxed p-2 md:p-4 min-h-48 flex items-center justify-center">
      <div className="max-w-2xl">
        {chunks.map((chunk, index) => (
          <span
            key={index}
            className={`inline-block mx-1 px-2 py-1 rounded transition-all duration-300 ${
              index === currentChunk ? 'text-slate-900' : 'opacity-60'
            }`}
            style={{
              backgroundColor: index === currentChunk ? settings.highlightColor : 'transparent'
            }}
          >
            {chunk}
          </span>
        ))}
      </div>
    </div>
  )
}

function chunkText(text, size) {
  const words = text.split(/\s+/).filter(word => word.length > 0)
  const chunks = []
  
  for (let i = 0; i < words.length; i += size) {
    chunks.push(words.slice(i, i + size).join(' '))
  }
  
  return chunks.length > 0 ? chunks : ['']
}

export default Demo