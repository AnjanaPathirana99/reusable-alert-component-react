import { useState } from 'react'
import Alert from './components/Alert'

function App() {

  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div>
      {/* Example of passing children props */}
      {alertVisible && <Alert onClose={() => setAlertVisible(false)} >This is alert.</Alert>}
    </div>
  )
}

export default App
