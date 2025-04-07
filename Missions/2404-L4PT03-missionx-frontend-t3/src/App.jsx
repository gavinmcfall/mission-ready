import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer";
import Home from "./pages/Home/Home";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Instructions from "./pages/StudentDashboard/Instructions/Instructions";
import LearningObjectives from "./pages/StudentDashboard/LearningObjectives/LearningObjectives";
import MakeProject from "./pages/StudentDashboard/MakeProject/MakeProject";
import SubmitProject from "./pages/StudentDashboard/SubmitProject/SubmitProject";
import VideoTutorial from "./pages/StudentDashboard/VideoTutorial/VideoTutorial";
import HelpRequests from "./pages/TeacherDashboard/HelpRequests/HelpRequests";
import ProgressTracker from "./pages/TeacherDashboard/ProgressTracker/ProgressTracker";
import ProjectSubmissions from "./pages/TeacherDashboard/ProjectSubmissions/ProjectSubmissions";
import StudentProfiles from "./pages/TeacherDashboard/StudentProfiles/StudentProfiles";
import TeacherProfileViewer from "./pages/TeacherProfileViewer/TeacherProfileViewer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignUp" element={<LoginSignUp />} />
        <Route path="/project-library" element={<ProjectLibrary />} />
        <Route
          path="/student-dashboard/instructions"
          element={<Instructions />}
        />
        <Route
          path="/student-dashboard/learning-objectives"
          element={<LearningObjectives />}
        />
        <Route
          path="/student-dashboard/make-project"
          element={<MakeProject />}
        />
        <Route
          path="/student-dashboard/submit-project"
          element={<SubmitProject />}
        />
        <Route
          path="/student-dashboard/video-tutorial"
          element={<VideoTutorial />}
        />
        <Route path="/student/profile/:id" element={<StudentProfileViewer />} />
        <Route
          path="teacher-dashboard/help-requests"
          element={<HelpRequests />}
        />
        <Route
          path="teacher-dashboard/progress-tracker"
          element={<ProgressTracker />}
        />
        <Route
          path="/teacher-dashboard/project-submissions"
          element={<ProjectSubmissions />}
        />
        <Route
          path="teacher-dashboard/student-profiles"
          element={<StudentProfiles />}
        />
        <Route path="teacher-profile" element={<TeacherProfileViewer />} />
      </Routes>
    </>
  );
}

export default App;
