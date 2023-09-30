import React from 'react';

interface StudentsListProps {
  subject: string;
}

const StudentsList: React.FC<StudentsListProps> = ({ subject }) => {
  // Fetch and display students enrolled in the selected subject
  return (
    <div>
      <h3>Students in {subject}:</h3>
      {/* Display the list of students here */}
    </div>
  );
};

export default StudentsList;
