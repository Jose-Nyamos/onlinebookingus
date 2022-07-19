import './main.scss';
import _ from 'lodash';
import API from '../../../services';
import { Progress } from 'reactstrap';
import React, { useState,useCallback, useContext } from 'react';
import uplodIcon from './img/upload.png';

import { AppContext } from '../../../helpers/Context'

import {useHistory, useParams } from "react-router-dom"

export const SingleUploader = (props) => {


    const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
    const { name, cover_photo } = formValues
  
    const isError = useCallback(
      () =>
        Object.keys({ name, cover_photo}).some(
          (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
        ),
      [formValues, name, cover_photo]
    )


    let { idx, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(false);
    const [uploadedImg, setUplodedImg] = useState("");
    const [uploadProgress, setProgress] = useState(0);

    const handleChange2 = async e => {
        let formData = new FormData();
        formData.append('file', e.target.files[0]);
        setUploding(true);
        let { data } = await API.post(uploadUrl, formData, {
            onUploadProgress: ({ loaded, total }) => {
                let progress = ((loaded / total) * 100).toFixed(2);
                setProgress(progress);
            }
        });
        setUplodedImg(data.imagePath);
        setUploding(false);
    }

    return (
        <div className="form-group">
            <label htmlFor={idx} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex">
                <div className="d-flex">
                    <div className="file-uploader-mask d-flex justify-content-center align-items-center">
                        <img className="file-uploader-icon" src={uplodIcon} alt="Upload-Icon" />
                    </div>
                    <input className="file-input" type="file" id={idx} name="cover_photo" onChange={handleChange2} />


                    
                </div>

                



          

                
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
                {
                    uploadedImg && !isUploding ? (
                        <img
                            src={uploadedImg}
                            alt="UploadedImage"
                            className="img-thumbnail img-fluid uploaded-img ml-3"
                        />
                    ) : null
                }
            </div>
        </div>
    )
}

export const MultiUploader = (props) => {
    let { id } = useParams();
    let { idx, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(false);
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const[PropertyId,setPropertyId]= useState(`${id}`);
    
    const [uploadProgress, setProgress] = useState(0);

    const handleChange = async e => {
        let { files } = e.target;

        let formData = new FormData();
        formData.append('PropertyId', PropertyId);
        _.forEach(files, file => {
            formData.append('files', file);  
        });

      

        setUploding(true);
        let { data } = await API.post(uploadUrl, formData, {
            onUploadProgress: ({ loaded, total }) => {
                let progress = ((loaded / total) * 100).toFixed(2);
                setProgress(progress);

                console.log("PROP ID IS"+ PropertyId)
                
            }
        });
        setUplodedImgs(data);
        setUploding(false);
    }

    return (
        <div className="form-group">
            <label htmlFor={idx} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex">
                <div className="d-flex">
                    <div className="file-uploader-mask d-flex justify-content-center align-items-center">
                        <img className="file-uploader-icon" src={uplodIcon} alt="Upload-Icon" />
                    </div>
                    <input multiple className="file-input" type="file" id={idx} onChange={handleChange} />

                    <input class="multisteps-form__input form-control" type="hidden" value={id}  onChange={(event) => {
                        setPropertyId(event.target.value);
                      }} placeholder="bedrooms"/>
                </div>
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
            </div>
            <div className="d-flex flex-wrap mt-4">
                {
                    uploadedImgs && !isUploding ? (
                        uploadedImgs.map(uploadedImg => (
                            <img src={uploadedImg} key={uploadedImg} alt="UploadedImage" className="img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    ) : null
                }
            </div>
        </div>
    )
}

export const Dropzone = (props) => {
    let { id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(true);
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [uploadProgress, setProgress] = useState(0);

    const handleChange = async e => {
        let { files } = e.target;

        let formData = new FormData();
        formData.append('file', files[0]);

        setUploding(true);
        let { data } = await API.post(uploadUrl, formData, {
            onUploadProgress: ({ loaded, total }) => {
                let progress = ((loaded / total) * 100).toFixed(2);
                setProgress(progress);
            }
        });
        setUplodedImgs([...uploadedImgs, data.imagePath]);
        setUploding(false);
    }

    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex dropzone-container">
                <div className="dropzone-uploader-mask d-flex justify-content-center align-items-center">
                    <img className="file-uploader-icon" src={uplodIcon} alt="Upload-Icon" />
                </div>
                <input className="dropzone-input" type="file" id={id} onChange={handleChange} />
            </div>
            {
                isUploding ? (
                    <div className="flex-grow-1">
                        <div className="text-center">{uploadProgress}%</div>
                        <Progress value={uploadProgress} />
                    </div>
                ) : null
            }
            <div className="d-flex flex-wrap mt-4">
                {
                    uploadedImgs ? (
                        uploadedImgs.map(uploadedImg => (
                            <img src={uploadedImg} key={uploadedImg} alt="UploadedImage" className="mt-2 img-thumbnail img-fluid uploaded-img mr-2" />
                        ))
                    ) : null
                }
            </div>

            
        </div>
    )
}
