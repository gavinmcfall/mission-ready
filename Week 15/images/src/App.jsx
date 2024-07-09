import dogSrc from '../assets/dog-src.png'

function App() {
    return (
    <>
      <img src="/cat-public.png" width="50%" />
      <img src={dogSrc} alt="dog" width="50%" />
    </>
  )
}

export default App
