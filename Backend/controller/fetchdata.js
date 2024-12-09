import axios from "axios";

// Function to fetch data from RapidAPI and return it in a route response
export const getBook = async (req, res) => {
    const url = "https://freebooks-api2.p.rapidapi.com/getBookSummary/d15821dc5a0420dd30d78c112d47815e"
  const options = {
    method: "GET", // Use the actual API URL
    headers: {
      "X-RapidAPI-Key": "1b8f344883mshe50b3e6bfdc6b6dp1940b1jsn14474044ddbc", // Your API key
      "X-RapidAPI-Host": "freebooks-api2.p.rapidapi.com", // The correct API host
    },
  };

  try {
    const response = await axios.request(url,options);
    res.status(200).json(response.data); // Send the fetched data as JSON
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" }); // Send error as response
  }
};

// Export the function correctly
// module.exports = { getBook };
