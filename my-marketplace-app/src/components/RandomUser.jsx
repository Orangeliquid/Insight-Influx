// RandomUser.js

// Function to fetch random user data from the API
async function fetchRandomUserData() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Failed to fetch random user data');
      }
      const data = await response.json();
      return data.results; // Assuming the results key contains an array of user objects
    } catch (error) {
      console.error('Error fetching random user data:', error);
      return null;
    }
  }
  
  export { fetchRandomUserData };
  