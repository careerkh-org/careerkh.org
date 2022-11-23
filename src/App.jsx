import { useState } from 'react'
import styles from "./style.js";
import  { home } from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
               <div>
                home
               </div>
            </div>
        </div>
    </div>
  )
}

export default App
