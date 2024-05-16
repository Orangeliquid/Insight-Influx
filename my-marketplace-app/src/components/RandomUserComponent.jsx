import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomUserComponent() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Function to fetch random user data for 50 users
    const fetchRandomUsersData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=50&inc=name,location,dob,picture');
        setUsersData(response.data.results); // Set the users data in state
        // Call function to send users data to backend
        sendUsersDataToBackend(response.data.results);
        // Call function to save users data to JSON file
        saveUsersDataToFile(response.data.results);
      } catch (error) {
        console.error('Error fetching random users data:', error);
      }
    };

    // Call the function to fetch random users data
    fetchRandomUsersData();
  }, []); // Empty dependency array to run effect only once on component mount

  // Function to send users data to backend
  const sendUsersDataToBackend = async (usersData) => {
    try {
      // Send a POST request to your Django backend for each user
      for (const user of usersData) {
        await axios.post('http://127.0.0.1:8000/save_random_users/', {
          first_name: user.name.first,
          last_name: user.name.last,
          age: user.dob.age,
          country: user.location.country,
          picture_large: user.picture.large,
          picture_medium: user.picture.medium,
          picture_thumbnail: user.picture.thumbnail
        });
      }
      console.log('Users data sent to backend successfully');
    } catch (error) {
      console.error('Error sending users data to backend:', error);
    }
  };

  // Function to save users data to JSON file
  const saveUsersDataToFile = (usersData) => {
    try {
      const jsonData = JSON.stringify(usersData, null, 2);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'random_users_data.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error saving users data to file:', error);
    }
  };

  return (
    <div>
      <h2>Random Users Information</h2>
      {usersData.length > 0 ? (
        <div>
          {usersData.map((userData, index) => (
            <div key={index}>
              <img src={userData.picture.medium} alt="User" />
              <p>Name: {userData.name.first} {userData.name.last}</p>
              <p>Age: {userData.dob.age}</p>
              <p>Country: {userData.location.country}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomUserComponent;

