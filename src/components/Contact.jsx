const Contact = () => {
  const user = 'juho.jaervi';
  const domain = 'gmail.com';

  return (
    <div>
      <p className="contact">
        Email: {user}@{domain}
      </p>
    </div>
  );
};

export default Contact;
