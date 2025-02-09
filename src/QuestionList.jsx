import { useLocation } from "react-router-dom";

function QuestionList() {
  const location = useLocation();
  const questionsText = location.state?.questions || "";

  // ✅ Fix splitting to properly extract question numbers (1., 2., etc.)
  const questionsArray = questionsText
    .split(/(?=\d+\.)/) // ✅ Split when a number followed by a dot (e.g., "1.", "2.")
    .map(q => q.replace(/\*/g, "").trim()) // Remove '*' and trim spaces
    .filter(q => q.length > 2); // Remove empty or too short items

  // ✅ Format each question properly
  const structuredQuestions = questionsArray.map((question, index) => {
    // Extract the number and actual question content
    const match = question.match(/^(\d+)\.\s*(.*)/s);
    return match
      ? { number: match[1], content: match[2].trim() }
      : { number: index + 1, content: question };
  });

  console.log(structuredQuestions); // Debugging

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Questions</h2>

      {structuredQuestions.length > 0 ? (
        <div>
          {structuredQuestions.map((q, index) => (
            <div 
              key={index} 
              style={{
                marginBottom: "20px",
                padding: "15px",
                borderBottom: "2px solid #ddd",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px"
              }}
            >
              {/* <h4 style={{ color: "#007bff", marginBottom: "5px" }}>Q{q.number}:</h4> */}
              <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#444" }}>
                {q.content}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>No questions found.</p>
      )}
    </div>
  );
}

export default QuestionList;
