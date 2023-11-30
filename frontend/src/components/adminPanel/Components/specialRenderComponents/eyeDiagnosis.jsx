import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { MoonLoader } from 'react-spinners';
import Reporter from './Reporter';
import Injectible from '../utilityComponents/Injectible';
import { FaEye } from 'react-icons/fa';

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
            const response = await axios.post('http://localhost:5000/predict', formData, {
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
                    return 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/10/shutterstock_384301432.jpg';
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


    const getTreatmentPlan = () => {
        if (diagnosisResult) {
            switch (diagnosisResult.Diagnosis) {
                case 'glaucoma':
                    return {
                        disease: 'Glaucoma',
                        prescriptions: [
                            {
                                drug: 'Latanoprost (Xalatan)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Timolol (Timoptic)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Bimatoprost (Lumigan)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Dorzolamide-Timolol (Cosopt)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Brinzolamide (Azopt)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            }

                        ],
                        treatment: 'Treatment for glaucoma involves medication and surgery in some cases.'
                    };
                case 'cataract':
                    return {
                        disease: 'Cataract',
                        prescriptions: [
                            {
                                drug: 'Dorzolamide (Trusopt)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Brinzolamide (Azopt)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Brimonidine (Alphagan)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Latanoprost (Xalatan)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Timolol (Timoptic)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            }
                        ],
                        treatment: 'Cataracts are treated with surgery to replace the cloudy lens.'
                    };
                case 'uveitis':
                    return {
                        disease: 'Uveitis',
                        prescriptions: [
                            {
                                drug: 'Prednisolone Acetate (Pred Forte)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Cyclopentolate (Cyclogyl)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Homatropine (Isopto Homatropine)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            },
                            {
                                drug: 'Methotrexate (Rheumatrex)',
                                morningDose: 'Take as directed',
                                afternoonDose: 'Take as directed',
                                eveningDose: 'Take as directed',
                                duration: '30 days'
                            },
                            {
                                drug: 'Cyclosporine (Restasis)',
                                morningDose: '1 drop',
                                afternoonDose: '1 drop',
                                eveningDose: '1 drop',
                                duration: '30 days'
                            }
                        ],
                        treatment: 'Treatment for uveitis may involve corticosteroid eye drops and medication to address underlying causes.'
                    };
                default:
                    return {
                        disease: '',
                        prescriptions: [],
                        treatment: ''
                    };
            }
        }
        return {
            disease: '',
            prescriptions: [],
            treatment: ''
        };
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

                    <div>
                        {/** Diagnosis report Goes Here you make sure you replace <h1>hello</h1> with actual eye diagnosis report */}

                        <Injectible
                            ButtonIcon={FaEye}
                            buttonCaption={'view dignosis report'}
                            component={
                                <Reporter
                                    component={
                                        <div className="flex flex-col items-center">
                                            <img
                                                src="https://t4.ftcdn.net/jpg/01/42/10/77/360_F_142107708_x8O3SGeiN5zJxqPUeSXuHnQpJugE34Xq.jpg"
                                                alt="Eye Diagnosis"
                                                className="rounded-full shadow-lg mb-4"
                                                width={200}
                                                height={200}
                                            />
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <h2 className="text-2xl font-semibold mb-4">Diagnosis Report</h2>
                                                <div className="mb-6">
                                                    <p className="mb-2"><strong>Disease:</strong> {getTreatmentPlan().disease}</p>
                                                    <p className="mb-2"><strong>Prescriptions:</strong></p>
                                            
                                                        <table className="w-screen divide-y divide-gray-200">
                                                            <thead className="bg-gray-200">
                                                                <tr>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drug</th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Morning Dose</th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Afternoon Dose</th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evening Dose</th>
                                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-200">
                                                                {getTreatmentPlan().prescriptions.map((prescription, index) => (
                                                                    <tr key={index}>
                                                                        <td className="px-6 py-4 whitespace-nowrap">{prescription.drug}</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap">{prescription.morningDose}</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap">{prescription.afternoonDose}</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap">{prescription.eveningDose}</td>
                                                                        <td className="px-6 py-4 whitespace-nowrap">{prescription.duration}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                
                                                </div>
                                                <div className="mt-4">
                                                    <h3 className="text-lg font-semibold">Recommended Treatment</h3>
                                                    <p>{getTreatmentPlan().treatment}</p>
                                                </div>
                                            </div>
                                        </div>

                                    }
                                />

                            }

                        />


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
