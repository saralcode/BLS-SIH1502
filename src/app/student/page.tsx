"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Title from '@/components/Title/Title';

interface Student {
    id: number;
    name: string;
    age: number;
    class: string;
}

const StudentPage: React.FC = () => {




    // Simulated data for student details

    // Replace with actual data fetching logic based on student ID
    const student: Student = {
        id: 1,
        name: 'John Smith',
        age: 16,
        class: 'Grade 10',
    };





    return (
        <div className='container mx-auto p-4'>


            <Title isH1>Student Details</Title>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Class: {student.class}</p>


        </div>
    );
};

export default StudentPage;
