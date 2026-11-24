import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import { AppLayout } from '@/components/layout/AppLayout';
const Login = React.lazy(() => import('@/pages/Login/Login').then(m => ({ default: m.Login })));
const SignUp = React.lazy(() => import('@/pages/SignUp/SignUp').then(m => ({ default: m.SignUp })));
const Dashboard = React.lazy(() => import('@/pages/Dashboard/Dashboard').then(m => ({ default: m.Dashboard })));
const Upload = React.lazy(() => import('@/pages/Upload/Upload').then(m => ({ default: m.Upload })));
const Processing = React.lazy(() => import('@/pages/Processing/Processing').then(m => ({ default: m.Processing })));
const Extraction = React.lazy(() => import('@/pages/Extraction/Extraction').then(m => ({ default: m.Extraction })));
const Validation = React.lazy(() => import('@/pages/Validation/Validation').then(m => ({ default: m.Validation })));
const Duplicates = React.lazy(() => import('@/pages/Duplicates/Duplicates').then(m => ({ default: m.Duplicates })));
const Verification = React.lazy(() => import('@/pages/Verification/Verification').then(m => ({ default: m.Verification })));
const Records = React.lazy(() => import('@/pages/Records/Records').then(m => ({ default: m.Records })));
const RecordDetail = React.lazy(() => import('@/pages/RecordDetail/RecordDetail').then(m => ({ default: m.RecordDetail })));
const GIS = React.lazy(() => import('@/pages/GIS/GIS').then(m => ({ default: m.GIS })));
const Analytics = React.lazy(() => import('@/pages/Analytics/Analytics').then(m => ({ default: m.Analytics })));
const Audit = React.lazy(() => import('@/pages/Audit/Audit').then(m => ({ default: m.Audit })));
const Integrations = React.lazy(() => import('@/pages/Integrations/Integrations').then(m => ({ default: m.Integrations })));
const Settings = React.lazy(() => import('@/pages/Settings/Settings').then(m => ({ default: m.Settings })));
import { ToastContainer } from '@/components/ui/Toast';

function ProtectedLayout() {
  const user = useAppStore((s) => s.user);
  if (!user) return <Navigate to="/login" replace />;
  return <AppLayout />;
}

export default function App() {
  const user = useAppStore((s) => s.user);

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/dashboard" replace /> : <SignUp />} />
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/digitize" element={<Upload />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/extraction" element={<Extraction />} />
            <Route path="/validation" element={<Validation />} />
            <Route path="/duplicates" element={<Duplicates />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/records" element={<Records />} />
            <Route path="/records/:id" element={<RecordDetail />} />
            <Route path="/gis" element={<GIS />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
          <Route path="*" element={<Navigate to={user ? '/dashboard' : '/login'} replace />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
}
