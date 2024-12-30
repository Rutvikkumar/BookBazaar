import apiClient from "../utils/apiClientsapi.js";

// Search Books
export const searchBooks = async (req, res) => {
  try {
    const { query } = req.query;

    const params = {
      q: query || "",
    };

    const response = await apiClient.get("", { params });

    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
