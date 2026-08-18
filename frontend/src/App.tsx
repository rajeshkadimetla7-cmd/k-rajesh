import { useState } from 'react'

function App() {
  const [msg, setMsg] = useState('StockFlow WMS - Deployed on Vercel')
  return (
    <div style={{ fontFamily: 'system-ui', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0ea5e9' }}>StockFlow WMS</h1>
      <p>{msg}</p>
      <p>Full source is in the GitHub repo. Backend needs to be run separately (FastAPI).</p>
      <p>Demo credentials: admin / admin123</p>
      <button onClick={() => setMsg('Frontend is live!')} style={{ padding: '0.5rem 1rem', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
        Test Button
      </button>
    </div>
  )
}

export default App
