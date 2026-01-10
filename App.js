import React from 'react';
import Login from '.src/components/Login';
import ApplyLeave from '.src/components/ApplyLeave';
import LeaveStatus from '.src/components/LeaveStatus';
import AdminDashboard from '.src/components/AdminDashboard';
import '.src/styles.css';

function App() {
  return (
    <div>
      <h1>Student Leave Management System</h1>
      <Login />
      <ApplyLeave />
      <LeaveStatus />
      <AdminDashboard />
    </div>
  );
}

export default App;
