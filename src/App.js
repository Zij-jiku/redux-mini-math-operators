
import { useSelector,useDispatch } from 'react-redux'
import { increment ,decrement , multiple , divide } from './features/counter/counterSlice'
import './couter.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <span className='font-size'>+</span>
        </button>
        <span className='font-size'>{count}</span>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          
          <span className='font-size'>-</span>
        </button>

        <button
          aria-label="Multiple value"
          onClick={() => dispatch(multiple())}
        >
           
           <span className='font-size'>2 *</span>
        </button>

        <button
          aria-label="Divide value"
          onClick={() => dispatch(divide())}
        >
           
           <span className='font-size'>2 /</span>
        </button>


      </div>
      



    </div>
  );
}

export default App;
