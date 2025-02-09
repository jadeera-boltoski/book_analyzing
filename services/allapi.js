import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";






export const adddetails=async(body)=>{
    console.log("inside add details");
    console.log(body);
    
    return commonRequest("POST",`${BASE_URL}`,body)
}

// export const getQuestions = async () => {
//     try {
//         console.log("Fetching questions from backend...");
//         const response = await commonRequest("GET", `${BASE_URL}`);

//         if (response && typeof response.questions === "string") {
//             console.warn("Backend returned a string instead of an array:", response.questions);
//             return [{ number: 1, content: response.questions, section: "General" }];
//         }

//         if (response && Array.isArray(response.questions)) {
//             return response.questions;
//         }

//         console.error("Invalid response format:", response);
//         return [];
//     } catch (error) {
//         console.error("Error fetching questions:", error);
//         return [];
//     }
// };