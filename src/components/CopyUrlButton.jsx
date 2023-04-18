import React from 'react';
import {AiOutlineLink} from 'react-icons/ai'

const CopyUrlButton = () => {
  const [copied,setCopied] = React.useState(false);
  const handleCopyUrl = () => {
    // Get the current URL
    const currentUrl = window.location.href;
   

    // Use the Clipboard API to copy the URL to clipboard
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        console.log('URL copied to clipboard:', currentUrl);
        setCopied(true)
      })
      .catch((error) => {
        console.error('Failed to copy URL to clipboard:', error);
        setCopied(false)
      });
  };

  return (
    <>
      <button className='text-black' onClick={handleCopyUrl}>
        <AiOutlineLink size={25} />
      </button>
      {copied && (
        <p className='text-green-400 text-sm'>URL Copied!</p>
      )}
    </>
  );
};

export default CopyUrlButton;
