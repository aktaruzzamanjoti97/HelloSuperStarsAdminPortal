import React from 'react';
import ImageUploader from "react-images-upload";
// import './AddProductS.css';

const UploadSuperstarAuction = (props) => {

    const onDrop = (pictureFiles, pictureDataURLs) => {
        const newImagesUploaded = pictureDataURLs.slice(props.defaultImages.length);
        console.warn("pictureDataURLs =>", newImagesUploaded);
        props.handleAuctionChange(newImagesUploaded);
      };

    return (
        <div className="imageUploaderAuction">
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

export default UploadSuperstarAuction;