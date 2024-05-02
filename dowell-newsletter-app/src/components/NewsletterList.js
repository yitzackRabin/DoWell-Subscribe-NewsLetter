import React from 'react';

const NewsletterList = ({ subscribers }) => {
  return (
    <div>
      <h2>Subscribed Users</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <li key={index}>{subscriber.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsletterList;
