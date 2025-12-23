import React from 'react';
import QRCode from 'react-qr-code';
import './App.css';
import ShareIcon from './assets/link_alt.svg';
import DownloadIcon from './assets/load_circle_duotone.svg';
import viteLogo from '/logo-qr-generator.svg';


function App() {
  const [formData, setFormData] = React.useState({
    text: ''
  });

  const [text, setText] = React.useState();


  const handleSubmit = (e) => {
    e.preventDefault()
    setText(formData.text);

  }

  const download = () => {
    // download the qr code
    const qrCode = document.querySelector('svg');
    const svgData = qrCode.outerHTML;
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-code.svg';
    a.click();
    URL.revokeObjectURL(url);
  }

  const share = () => {
    // copy quote to clipboard
    navigator.clipboard.writeText(formData.text);

  }

  return (
    <>

      {!text ? <div className='w-full px-4'>
        <div className='flex flex-col justify-center items-center gap-4 w-full'>
          <img className='' src={viteLogo} alt="" />
          <form className='mb-8 w-full flex flex-col items-center' onSubmit={handleSubmit}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">qr</label>
            <div className="relative flex w-full max-w-[500px]">
              <input type="text"
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                value={formData.text} id="input"
                className="text-[16px] font-semibold text-white placeholder-[#364153] bg-black border-3 border-[#3662E3] w-full h-14 p-4 pr-36 ps-6 text-sm rounded-2xl outline-none focus:ring-2 focus:ring-[#3662E3] focus:border-transparent transition-all" placeholder="Enter an Url"
              />
              <button type='submit' className='absolute right-1 top-1 bottom-1 w-32 bg-[#3662E3] text-white font-bold rounded-xl hover:bg-[#2849b3] transition-colors'>QR code</button>
            </div>
          </form>
        </div>
      </div> :

        <div className='flex flex-col justify-center items-center gap-4 px-4'>
          <div className='flex flex-col rounded-full justify-center items-center gap-4 bg-white/50 p-8 '>

            <div className='bg-white rounded-2xl p-8 items-center content-center justify-center'>
              <QRCode value={formData.text} className="w-full max-w-[200px] h-auto" />
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-4 mt-8'>
            <button onClick={() => { download() }} className='flex items-center justify-center gap-2 text-xl font-bold bg-[#3662E3] h-14 px-6 hover:bg-[#2849b3] transition-colors' >Download <p><img src={DownloadIcon} alt="" /></p> </button>
            <button onClick={() => { share() }} className='flex items-center justify-center gap-2 text-xl font-bold bg-[#3662E3] h-14 px-6 hover:bg-[#2849b3] transition-colors'>Share <p><img src={ShareIcon} alt="" /></p></button>
          </div>
        </div>

      }

    </>

  )
}

export default App
