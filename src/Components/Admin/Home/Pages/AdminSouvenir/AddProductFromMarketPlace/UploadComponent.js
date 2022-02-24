import React from "react";
import ImageUploader from "react-images-upload";

const UploadComponent = (props) => {
  const onDrop = (pictureFiles, pictureDataURLs) => {
    const newImagesUploaded = pictureDataURLs.slice(props.defaultImages.length);
    console.warn("pictureDataURLs =>", newImagesUploaded);
    props.handleChange(newImagesUploaded);
  };

  return (
    <ImageUploader
      withIcon={false}
      withLabel={false}
      withPreview={true}
      buttonText={"Add photos"}
      fileSizeError={"File size is too big!"}
      fileTypeError={"This extension is not supported!"}
      onChange={onDrop}
      imgExtension={props.imgExtension}
      maxFileSize={props.maxFileSize}
      defaultImages={props.defaultImages}
    />
  );
};

export default UploadComponent;
