import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/logo-qr-generator.svg'
import QRCode  from 'react-qr-code'
import './App.css'



function App() {
  const [formData, setFormData] = React.useState({
    text:''
  });

  const[text, setText] = React.useState();
   

  const handleSubmit = (e) => {
    e.preventDefault()
    setText(formData.text);

}

  return (
<>

{!text  ? <div id='root'>

<img src={viteLogo} alt="" />
<form className='mb-8'onSubmit={handleSubmit}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">qr</label>
    <div className="relative w-96 border-8 border-[#3662E3]">
        <input  type="text" onChange={(e) => setFormData({...formData, text: e.target.value})}  value={formData.text} id="input" className=" border-3 border-[#3662E3] w-full p-4 ps-3 text-sm text-gray-900  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter an Url" />
        <button type='submit' className='relative bottom-[49px] left-[165px] bg-[#3662E3] '>QR Code</button>
    </div>
</form>
</div> :

<div className='grid'>
<QRCode value={formData.text}/>
    <div className='flex justify-around'>
    <button className='bg-[#3662E3]' >Share</button>
    <button className='bg-[#3662E3]'>Copy</button>
    </div>
</div>

}

</>

  )
}

export default App
