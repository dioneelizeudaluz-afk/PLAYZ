import { Route, Routes } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
