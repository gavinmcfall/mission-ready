import React, { useState, useEffect } from "react";
import styles from "./HelpRequests.module.css";
import Heading from "./Components/Heading.jsx";
import Sidebar from './Components/Sidebar.jsx';
import Footer from "./Components/Footer.jsx";
import check from "../../../assets/TeacherDashboard/check.png";
import reply from "../../../assets/TeacherDashboard/reply.png";

function HelpRequests() {
  const [helpRequests, setHelpRequests] = useState([]);
  const [selectedRequests, setSelectedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from backend
    fetch(`http://localhost:4000/api/v1/teacher-dashboard/help-requests`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request not found");
        }
        return response.json();
      })
      .then((data) => {
        setHelpRequests(data); // Set the array of help requests
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array to run effect only once on mount

  // Handle checkbox toggle
  const handleCheckboxChange = (id) => {
    setSelectedRequests((prevSelectedRequests) => {
      // Check if the id is already in the array
      if (prevSelectedRequests.includes(id)) {
        // If it is, remove it
        return prevSelectedRequests.filter((requestId) => requestId !== id);
      } else {
        // If it isn't, add it
        return [...prevSelectedRequests, id];
      }
    });
  };

  // Log selectedRequests whenever it updates
  useEffect(() => {
    console.log(selectedRequests);
  }, [selectedRequests]);

  // Mark selected requests as completed
  const handleMarkAsDone = () => {
    fetch(`http://localhost:4000/api/v1/teacher-dashboard/help-requests/complete`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: selectedRequests,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to mark as done");
        }
        // Remove the marked requests from the UI
        setHelpRequests((prevRequests) =>
          prevRequests.filter((request) => !selectedRequests.includes(request.request_id))
        );
        // Clear the selectedRequests array
        setSelectedRequests([]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Heading />
      <div className={styles.body}>
        <Sidebar />
        <div className={styles.main}>
          <h1>Help Requests</h1>
          <div className={styles.top}>
            <img src={reply} alt="Reply" />
            <p>REPLY</p>
            <button className={styles.markAsDoneBtn} onClick={handleMarkAsDone}>
              <img src={check} alt="Check" />
              Mark as Done
            </button>
          </div>

          {helpRequests.map((request) => (
            <div className={styles.requestWrapper} key={request.request_id}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={selectedRequests.includes(request.request_id)}
                onChange={() => handleCheckboxChange(request.request_id)}
              />
              <div className={styles.request}>
                <img
                  className={styles.Studentpic}
                  src={request.profile_pic}
                  alt={request.name}
                />
                <div className={styles.message}>
                  <p><strong>{request.name}</strong> needs help with their project.</p>
                </div>
                <div className={styles.time}>
                  <p>{new Date(request.date_created).toLocaleDateString()}</p>
                  <p>{new Date(request.date_created).toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HelpRequests;
