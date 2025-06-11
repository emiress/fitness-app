'use client';
import React from 'react';
import './Authpopup.css';
import Image from 'next/image';
import logo2 from '@/assets/logo2.png';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import  { supabase }  from '@/app/lib/supabaseClient'



const Authpopup = () => {
    const [showSignup, setShowSignup] = React.useState(false);

    const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault()
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) console.error('Login error:', error.message)
  else console.log('Login success:', data)
}

  //    const handleLogin = () => {
  //   // TODO: handle login
  // };

  const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault()
  const { data, error } = await supabase.auth.signUp({
    email: email, 
    password: password,
    options: {
      data: {
        age: age,
        weight: weight,
        gender: gender,
        height: `${feet}ft ${inches}in`
      }
    }
  })
  if (error) console.error('Signup error:', error.message)
  else console.log('Signup success:', data)
}


  //  const handleSignup = () => {
  //   // TODO: handle signup
  // };

  return (
    <div className='popup'>
      {
        showSignup ? (
         <div className='authform'>
             <div className='left'>
               <Image src={logo2} alt='logo' width={100} height={100} />
             </div>
             <div className='right'>
              <h1>Login</h1>
              <form action="">
                <Input
                  color='warning'
                  placeholder='Email'
                  size='lg'
                  variant='solid'
                  type='email'
                 />

                <Input
                  color='warning'
                  placeholder='Password'
                  size='lg'
                  type='password'
                  variant='solid'        
                  />
                  <div className='form_input_leftright'>
                    <Input color='warning' size='lg' variant='solid' type="number" placeholder='Age'/>
                    <Input color='warning' size='lg' variant='solid' type="number" placeholder='weight'/>
                  </div>

                   <Select
                       color='warning'
                       placeholder='Gender'
                       size='lg'
                       variant='solid'
                     >
                    <Option value='male'>Male</Option>
                    <Option value='female'>Female</Option>
                    <Option value='other'>Other</Option>
                  </Select>

                  <br/>

                  <label htmlFor="">Height</label>
                  <div className='form_input_leftright'>
                    <Input color='warning' size='lg' variant='solid' type="number" placeholder='ft'/>
                    <Input color='warning' size='lg' variant='solid' type="number" placeholder='inc'/>
                  </div>                  

                  <button onClick={()=>{
                    handleSignup()
                  }}>Signup</button>
               </form>
               <p>Already have an account <button onClick={()=>{
                  setShowSignup(false)
                }}>Login</button></p>
             </div>
           
          </div>
        ): (
          <div className='authform'>
             <div className='left'>
               <Image src={logo2} alt='logo' width={100} height={100} />
             </div>
             <div className='right'>
              <h1>Login</h1>
              <form action="">
                <Input
                  color='warning'
                  placeholder='Email'
                  size='lg'
                  variant='solid'
                  type='email'
                 />

                <Input
                  color='warning'
                  placeholder='Password'
                  size='lg'
                  type='password'
                  variant='solid'         
                  />
                  <button>Login</button>
               </form>
               <p>Don't have an account <button onClick={()=>{
                  setShowSignup(true)
                }}>Signup</button></p>
             </div>
           
          </div>
        )
      }
    </div>
  )

}



export default Authpopup;

