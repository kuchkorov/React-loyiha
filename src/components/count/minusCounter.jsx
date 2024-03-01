import { useDispatch } from 'react-redux'
import { minusCounter} from '../reducers/countSlice'

function Decrement() {
  const dispatch = useDispatch()
  return (
    <div className='btn btn-danger' onClick={()=>dispatch(minusCounter())}>Minus</div>
  )
}

export default Decrement