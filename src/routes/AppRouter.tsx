import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import LeaderBoard from "@/pages/Leaderboard/LeaderBoard";
import Gifts from "@/pages/Gifts/Gifts";
import Profile from "@/pages/Profile/Profile";
import Auth from "@/pages/Authorization/Auth";
import Roulette from "@/pages/Roulette/Roulette";
import Result from "@/pages/Roulette/Result";
import TutorChartScreen from "@/pages/Tutorials/TutorChartScreen";
import TutorDrawScreen from "@/pages/Tutorials/TutorDrawScreen";
import TutorTaskScreen from "@/pages/Tutorials/TutorTaskScreen";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />}  />
      <Route path="/home" element={<Home />} />
      <Route path="/leaderboard" element={<LeaderBoard/>} />
      <Route path="/gifts" element={<Gifts/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/auth" element={<Auth/>} />
      <Route path="/roulette" element={<Roulette/>} />
      <Route path="/result" element={<Result />} />
      <Route path="/tutorchart" element={<TutorChartScreen />} />
      <Route path="/tutordraw" element={<TutorDrawScreen />} />
      <Route path="/tutortask" element={<TutorTaskScreen />} />
    </Routes>
  );
}