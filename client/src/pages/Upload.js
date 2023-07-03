import React,{useRef} from 'react'
import Up from '../Icons/Up.png'
import UploadIcon from '../Icons/uploadIcon.jpg'
import Load from '../components/Load'


const Upload = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };
  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
      method: 'POST',
      body: formData,
      redirect:"follow"
    })
      .then(response => {
        // Handle the response if needed
        if(response.redirected){
          window.location.replace(response.url);
        }
      })
      .catch(error => {
        // Handle the error if the POST request fails
      });
  };
  return (
        <div>
          <Load headImg={Up} centerImg={UploadIcon} title="Upload Video" handleClick={handleUploadClick}/>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
  )
}

export default Upload