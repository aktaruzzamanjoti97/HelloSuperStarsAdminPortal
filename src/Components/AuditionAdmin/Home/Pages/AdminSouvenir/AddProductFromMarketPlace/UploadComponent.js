import React from "react";
import ImageUploader from "react-images-upload";
import './AddProductFromMarketPlace.css';

const UploadComponent = (props) => {
  const onDrop = (pictureFiles, pictureDataURLs) => {
    const newImagesUploaded = pictureDataURLs.slice(props.defaultImages.length);
    console.warn("pictureDataURLs =>", newImagesUploaded);
    props.handleChange(newImagesUploaded);
  };

  return (
    <div className="imageUploader">
      <ImageUploader
        withIcon={false}
        withLabel={false}
        withPreview={true}
        buttonText={"Upload Images"}
        fileSizeError={"File size is too big!"}
        fileTypeError={"This extension is not supported!"}
        onChange={onDrop}
        imgExtension={props.imgExtension}
        maxFileSize={props.maxFileSize}
        defaultImages={props.defaultImages}
      />
    </div>

  );
};

export default UploadComponent;
