import { useDispatch } from 'react-redux'
import { resetCounter} from '../reducers/countSlice'

function Reset() {
    const dispatch = useDispatch()
  return (
    <div className='btn btn-primary' onClick={()=>dispatch(resetCounter())}>Reset</div>
  )
}

export default Reset