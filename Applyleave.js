import React, { useState } from 'react';

function ApplyLeave() {
  const [reason, setReason] = useState('');

  return (
    <div>
      <h2>Apply Leave</h2>
      <textarea onChange={(e) => setReason(e.target.value)} />
      <br />
      <button onClick={() => alert("Leave Applied")}>Submit</button>
    </div>
  );
}

export default ApplyLeave;
