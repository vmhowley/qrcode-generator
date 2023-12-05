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

{!text  ? <div className='' id='root'>
<div className=''>
<img className='' src={viteLogo} alt="" />
</div>
<form className='mb-8'onSubmit={handleSubmit}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">qr</label>
    <div className="relative w-96 border-8 border-[#3662E3] flex flex-col">
        <input  type="text" 
        onChange={(e) => setFormData({...formData, text: e.target.value})}  
        value={formData.text} id="input" 
        className="text-[16px] font-semibold text-[#364153] placeholder-[#364153] bg-black border-3 border-[#3662E3] w-[500px] h-8 p-4 ps-3 text-sm  rounded-2xl focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter an Url" 
        />
        <button type='submit' className='w-32 h-14 relative bottom-[62px] left-[400px] bg-[#3662E3] text-white font-bold'>QR code</button>
    </div>
</form>
</div> :

<div className='rounded-xl grid bg-white w-80 h-[21rem] items-center content-center justify-center'>
<QRCode value={formData.text}/>
    <div className='flex justify-around mt-8'>
    <button className='bg-[#3662E3]' >Share</button>
    <button className='bg-[#3662E3]'>Copy</button>
    </div>
</div>

}

</>

  )
}

export default App
