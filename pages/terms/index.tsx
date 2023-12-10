import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-xl font-bold">
        Privacy Policy for GetGoing App made by Adam Turner
      </h1>
      <p>Effective Date: 10th December 2023</p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to GetGoing. We are committed to protecting your personal data
        and respecting your privacy. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use our
        To-Do List service.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        To provide our To-Do List service, we collect the following types of
        information:
      </p>
      <ul>
        <li>
          <strong>Email Address</strong>: Used for account registration, login,
          and communication.
        </li>
        <li>
          <strong>Password</strong>: Used for securing your account. Passwords
          are stored in a hashed format for added security.
        </li>
      </ul>

      <h2>3. Use of Your Information</h2>
      <p>The information we collect is used for the following purposes:</p>
      <ul>
        <li>To provide and manage your access to our service.</li>
        <li>
          To communicate with you about your account or any changes to our
          services.
        </li>
        <li>To ensure the security of our service.</li>
      </ul>

      <h2>4. Data Storage and Security</h2>
      <p>
        Your personal data is stored securely on servers located in UK. We use
        industry-standard security measures to prevent unauthorized access,
        disclosure, alteration, or destruction of your personal information.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Under the GDPR, you have various rights regarding your personal data:
      </p>
      <ul>
        <li>
          <strong>Right to Access</strong>: You can request access to your
          personal data we hold.
        </li>
      </ul>
    </div>
  )
}

export default PrivacyPolicy
