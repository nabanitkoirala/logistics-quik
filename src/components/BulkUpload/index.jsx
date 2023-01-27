import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import Icon from '../../assets/icons/bulkUpload.svg';
import CloseIcon from '../../assets/icons/close.svg';

import styles from './style.module.scss';

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone(
    {
      maxFiles: 1,
      accept: {
        'image/svg+xml': ['.svg']
      }
    }
  );

  const [imagePreviewUrl, setImagePreviewUrl] = useState();

  if (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles[0]) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(acceptedFiles[0])
  }

  const handleClearFiles = () => {
    acceptedFiles[0] = null
    setImagePreviewUrl(null)
  }

  return (
    <div className={styles.container}>
      <div {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        <div className={styles.imageContainer}>
          <img src={Icon}></img>
        </div>
        <div className={styles.dropZoneText}>
          <span>  <a>Click to upload </a> or drag & drop</span>
        </div>
        <div className={styles.dropZoneText}>
          <span>.xlsx format (max file size 2 Mb)</span>
        </div>
        {/* <span className={styles.dropZoneText}>Click to upload or drag & drop<br />[.svg only]</span> */}
      </div>
      {
        (acceptedFiles && acceptedFiles.length > 0 && acceptedFiles[0]) ? (
          <div className={styles.filesContainer}>
            <div className={styles.thumbnailContainer}>
              {
                imagePreviewUrl ? (
                  <img height="100%" width="100%" src={imagePreviewUrl}></img>
                ) : ''
              }
            </div>
            <span className={styles.text}>
              {acceptedFiles[0].name}
              <img src={CloseIcon} onClick={handleClearFiles} style={{ cursor: "pointer" }}></img>
            </span>
          </div>
        ) : ''
      }
    </div>
  );
}

export default Basic;