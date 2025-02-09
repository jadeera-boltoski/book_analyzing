import axios from "axios";

export const commonRequest = async (method, url, body = null) => {
  try {
    let reqConfig = {
      method,
      url,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Add request body only if it's NOT a GET request
    if (body && method !== "GET") {
      reqConfig.data = body;
    }

    // Make the API call
    const response = await axios(reqConfig);
    return response.data; // Return the response data
  } catch (err) {
    console.error("API request error:", err);
    throw err; // Rethrow error for handling
  }
};