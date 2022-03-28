import React, { useRef, useState } from "react";
import styles from "./style.module.css";
import { FileDrop } from "react-file-drop";
import { AiOutlineUpload } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import PersonImg from "../../../../assets/images/VidoUpload/unsplash_ChylazdaLkU.png";

const VidoUploadPage2 = () => {
  const [selectFile, setSelectFile] = useState(null);

  const fileInputRef = useRef(null);

  const onFileInputChange = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setSelectFile(file);
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
    } else if (file.type === "text/plain") {
      const text = await file.text();
      console.log(text);
    }
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

    return (
        <div>
                <div>
      <div className="container-fluid mt-5 mb-3">
        <div className="row">
          <div className="col-md-7 ">
            
          <div className={styles.CardBorder}>

            <div className={styles.fileUploadCard}>

            <input
                onChange={onFileInputChange}
                ref={fileInputRef}
                type="file"
                className={styles.hidden}
              />
              <div className={styles.text}>
                <button onClick={onTargetClick} className={styles.uploadBtn}>
                  Upload File
                </button>
                <p className="text-center">
                  {selectFile !== null ? (
                    <>
                      {selectFile.name}
                      <span className={styles.x} onClick={() => setSelectFile(null)}>
                      <AiOutlineCloseCircle className="icon" />
                      </span>
                    </>
                  ) : (
                    "Choose file..."
                  )}
                </p>
              </div>
              <FileDrop
                onDrop={(files, event) => setSelectFile(files[0])}
                onTargetClick={onTargetClick}
                targetClassName={styles.target}
                className={styles.filedrop}
                draggingOverFrameClassName={styles.filedropDrag}
              >
                <div className="p-5">
               <div className="text-center">
               <AiOutlineUpload className="icon " />
               </div>
                 <p> Click or Drag and drop file</p>
                </div>
              </FileDrop>
            </div>


            </div>
          </div>

          <div className="col-md-5 ">
            <div className="card right-video-card">
              <div className="card-body">
                <div className="container my-3">
                  <img src={PersonImg} alt="" className="img-fluid my-2" />
                  <h5 className="text-light my-2">Shorouvi Akter</h5>
                  <h6 className="text-warning mb-3">Marriage Annerversery</h6>
                  <p className="text-light">Age: 25</p>
                  <p className="text-light mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, culpa vel? Dolor atque recusandae quaerat tempore,
                    totam nam magnam ex commodi dicta vero porro laudantium
                    laborum nisi ab aut voluptatem! Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Voluptatum, tempora
                    dignissimos ab sint beatae in ipsum deleniti natus totam
                    libero harum architecto voluptatibus esse asperiores
                    molestias expedita omnis, quod necessitatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <button className="mx-2 px-3 btn btn-warning">Upload</button>
        {/* <button className="mx-2 px-3 btn btn-dark">Next</button> */}
      </div>
    </div>
        </div>
    );
};

export default VidoUploadPage2;