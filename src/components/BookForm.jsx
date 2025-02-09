import { Button, TextField, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { adddetails } from '../../services/allapi';
import { useNavigate } from "react-router-dom";

function BookForm() {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ Loading state

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bookName || !numQuestions) {
      alert("Please enter all details");
      return;
    }

    if (isNaN(numQuestions) || parseInt(numQuestions) <= 0) {
      alert("Number of questions must be a valid positive number");
      return;
    }

    // Create request body
    const body = {
      textbook_name: bookName,  
      num_questions: numQuestions
    };

    console.log("Request Body:", body);
    setIsLoading(true); // ✅ Start loading

    try {
      const response = await adddetails(body);
      console.log(response);

      if (response) {
        navigate("/QuestionList", { state: { questions: response.questions } });
      }
    } catch (error) {
      console.error("Error adding details:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4'
    }}>
      <div style={{
        width: '400px',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h3>Enter Book Details</h3>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Book Name */}
          <TextField
            fullWidth
            label="Book Name"
            variant="filled"
            onChange={(e) => setBookName(e.target.value)}
          />

          {/* Number of Questions */}
          <TextField
            fullWidth
            label="Number of Questions"
            variant="filled"
            type="number"
            onChange={(e) => setNumQuestions(parseInt(e.target.value) || "")}
          />

          {/* Submit Button with Progress Indicator */}
          <Button 
            fullWidth 
            type="submit" 
            variant="contained" 
            disabled={isLoading} // ✅ Disable button when loading
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
