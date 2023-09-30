import React, { useState } from 'react';

interface AddStudyMaterialProps {
  subject: string;
}

const AddStudyMaterial: React.FC<AddStudyMaterialProps> = ({ subject }) => {
  const [material, setMaterial] = useState<string>('');

  const handleAddMaterial = () => {
    // Add logic to save the study material for the selected subject
    // Use 'material' state to get the input value
  };

  return (
    <div>
      <h3>Add Study Material for {subject}:</h3>
      <textarea
        placeholder="Enter study material here..."
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
      />
      <button onClick={handleAddMaterial}>Add Material</button>
    </div>
  );
};

export default AddStudyMaterial;
