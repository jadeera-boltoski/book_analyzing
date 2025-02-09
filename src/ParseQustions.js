export const parseQuestions = (rawText) => {
    try {
        if (typeof rawText !== "string") {
            console.error("Invalid input, expected a string.");
            return [];
        }

        let questions = [];
        let currentSection = null;

        // Split text into lines
        const lines = rawText.split("\n");

        lines.forEach((line) => {
            line = line.trim();

            // Ignore empty lines
            if (!line) return;

            // Detect section headers
            if (line.endsWith(":") && !line.startsWith("Q")) {
                currentSection = line.replace(":", "").trim();
                return;
            }

            // Detect questions (e.g., "1. What is React?")
            const match = line.match(/^(\d+)\.\s*(.*)/);
            if (match) {
                const questionNumber = match[1];
                const questionText = match[2];

                questions.push({
                    number: parseInt(questionNumber),
                    section: currentSection || "General",
                    content: questionText,
                });
            }
        });

        return questions;
    } catch (error) {
        console.error("Error in parseQuestions:", error);
        return [];
    }
};
