import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { MoonLoader } from 'react-spinners';

const EyeDiagnosis = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [diagnosisResult, setDiagnosisResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const predictEyeDiagnosis = async () => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await axios.post('https://ehcs.onrender.com/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setDiagnosisResult(response.data);
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    const { mutate } = useMutation(predictEyeDiagnosis, {
        onSuccess: () => {
            setIsLoading(false);
        },
        onError: () => {
            setIsLoading(false);
        }
    });

    const resetState = () => {
        setSelectedFile(null);
        setDiagnosisResult(null);
    };

    const getImageByDiagnosis = () => {
        if (diagnosisResult) {
            switch (diagnosisResult.Diagnosis) {
                case 'glaucoma':
                    return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Acute_angle_closure_glaucoma.JPG/1200px-Acute_angle_closure_glaucoma.JPG';
                case 'cataract':
                    return 'https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/14/ds00050_im01228_vi7_cataractthu_jpg.jpg';
                case 'uveitis':
                    return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQngVOvLgvZ0tk1Sjb8-dXF4-9PfanYW4PQ&usqp=CAU';
                default:
                    return '';
            }
        }
        return '';
    };

    const getDiseaseDescription = () => {
        if (diagnosisResult) {
            switch (diagnosisResult.Diagnosis) {
                case 'glaucoma':
                    return 'Glaucoma is a group of eye diseases that can damage the optic nerve and result in vision loss. It often develops without symptoms and can lead to blindness if untreated.';
                case 'cataract':
                    return 'Cataracts cause clouding of the eye’s lens, leading to blurry vision. It is a common condition related to aging and can be treated with surgery.';
                case 'uveitis':
                    return 'Uveitis is an inflammation of the uvea, the middle layer of the eye. It can cause eye redness, pain, and blurred vision and may be related to infections or autoimmune diseases.';
                default:
                    return '';
            }
        }
        return '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedFile) {
            // Handle error when no file is selected
            return;
        }

        setIsLoading(true);
        mutate();
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Eye Diagnosis</h1>
            <p className="mb-6">Upload an image to get the diagnosis</p>

            <form onSubmit={handleSubmit} className="mb-6">
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="border rounded px-4 py-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
                    disabled={isLoading}
                >
                    {isLoading ?
                        <div className="flex items-center justify-center">
                            <MoonLoader color="#1400ff" />
                        </div> :
                        'Submit'
                    }
                </button>
            </form>

            {diagnosisResult && (
                <div className="bg-gray-100 p-4 rounded">
                    <h2 className="text-lg font-semibold mb-2">Diagnosis Result</h2>
                    <p className="mb-1"><strong>Diagnosis:</strong> {diagnosisResult.Diagnosis}</p>
                    <p><strong>Accuracy:</strong> {diagnosisResult.Accuracy}</p>
                    <div className="mt-4">
                        <img src={getImageByDiagnosis()} alt={diagnosisResult.Diagnosis} className="rounded-md shadow-md" />
                    </div>
                    <div className="mt-4">
                        <p><strong>Description:</strong> {getDiseaseDescription()}</p>
                    </div>
                    <button onClick={resetState} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4">
                        Upload Another Image
                    </button>
                </div>
            )}
        </div>
    );
};

export default EyeDiagnosis;
