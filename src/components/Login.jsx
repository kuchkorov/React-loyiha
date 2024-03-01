import { useState } from 'react'
import { Logo } from '../constants'
import {Input} from './ui'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='text-center'>
      <main className="form-signin w-25 m-auto">
      <form>
        <img className="mb-4" src={Logo} alt="" width="72"  />
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>

        <Input label={'Email address'} state={email} setState={setEmail}  />
        <Input label={'Password'} type={'password'} state={password} setState={setPassword}  />
        
        <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
      </form>
    </main>
    </div>
  )
}

export default Login