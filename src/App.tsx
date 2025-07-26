import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
    //const [count, setCount] = useState(0)
    const [initialParticleCount, setInitialParticleCount] = useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInitialParticleCount(Number(event.target.value));
    }

    const result: number = initialParticleCount * 2;

    return (
    <>
        <Header />
        <div className="App">

            <input
                type="number"
                value={initialParticleCount}
                onChange={handleChange}
                placeholder="Enter your particle count"
            />
            <p>Input value: {initialParticleCount}</p>
            <p>Result: {result}</p>
        </div>
        <Footer />
    </>
  )
}

export default App
