import React from 'react';

const Contact = () => {
  const user = 'juho.jarvi';
  const domain = 'gmail.com';

  return (
    <div>
      <p>
        Email: {user}@{domain}
      </p>
    </div>
  );
};

export default Contact;
