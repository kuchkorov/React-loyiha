import Increment from './plusCounter'
import Decrement from './minusCounter'
import Reset from './resetCounter'

function Counter() {
  return (
    <div className='btn-group mt-3'>
      <Increment />
      <Decrement />
      <Reset />
    </div>
  )
}

export default Counter