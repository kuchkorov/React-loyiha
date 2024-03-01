import { useDispatch } from 'react-redux'
import { plusCounter} from '../reducers/countSlice'


function Increment() {
    const dispatch = useDispatch()
  return (
    <div className='btn btn-success' onClick={()=>dispatch(plusCounter())}>Plus</div>
  )
}

export default Increment