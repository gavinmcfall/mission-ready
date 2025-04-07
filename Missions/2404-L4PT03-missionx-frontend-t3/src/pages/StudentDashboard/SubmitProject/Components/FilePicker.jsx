import React, { useState } from 'react'
import { PickerOverlay } from 'filestack-react';


// Creating filestack API to perform uploading of images/files
const API_KEY = import.meta.env.VITE_API_KEY;



export default function FilePicker({ setShowPicker,activeCircle,setUploadSuccess}) {
    const [ImageUrl, setImageURl] = useState();
   
    let student_id=1;
    let project_id=activeCircle;
    function uploadingProjectSubmission(submission, student_id, project_id) {
    fetch("http://localhost:4000/api/v1/student-dashboard/submit-project", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    student_id: student_id,
    project_id: project_id,
    submission: submission
    })
    }).then((res) => {
    console.log(submission)
    if (res.status === 200) {
    console.log("upload successful")
    setUploadSuccess(true);
    alert("Upload successful! Your project has been submitted.")
    } else if (res.status === 401) {
    console.log("upload error");
    }
    })
    }

    return (
    <div><PickerOverlay
    apikey={API_KEY}//Your API KEY wich is stored in .ENV file
    onUploadDone={(result) => { //To perform task once file is uploaded
    setShowPicker(false);
    setImageURl(result.filesUploaded[0].url)
    console.log(result.filesUploaded[0].url)
    uploadingProjectSubmission(result.filesUploaded[0].url, student_id,project_id)
    }}
    > </PickerOverlay>
    {/* File upload component */}
    </div>
    )
    }
