import React, {useState} from 'react'
import sendPhoto from "../../../../assets/StudentDashboard/sendPhoto.png";
import styles from "../Components/UploadImage.module.css"
import FilePicker from './FilePicker';



export default function UploadImage({activeCircle,setButtonsDisabled, areButtonsDisabled,setUploadSuccess}) {
    const [showPicker, setShowPicker] = useState(false);
    
// Function to handle Onclick event as there are to events that need to happen.
const handleButtonClick= ()=>{
  setShowPicker(!showPicker);
  setButtonsDisabled(true)

}

  return (
    <div>
    <button className={styles.btn} disabled={areButtonsDisabled} onClick={handleButtonClick}>
    {areButtonsDisabled ? "Submitted":"Send Photo"}<img src={sendPhoto} alt="sendPhoto"></img></button>    
    {showPicker && (<FilePicker activeCircle={activeCircle} setShowPicker={setShowPicker}setUploadSuccess={setUploadSuccess}>
    </FilePicker>
    )}
    </div>  
    )
    }
