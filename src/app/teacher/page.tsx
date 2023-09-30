"use client"
import React, { useState } from 'react';
import SubjectList from './SubjectList';
import StudentsList from './StudentsList';
import AddStudyMaterial from './AddStudyMaterial';
import Title from '@/components/Title/Title';
// import AskDoubt from './AskDoubt';

const TeacherPage: React.FC = () => {


    return (
        <div className='container mx-auto'>
            <Title>Teacher Name</Title>
            <p className='px-4'>Enim voluptate dolor dolor ipsum nostrud laboris ut dolore ipsum exercitation. Id Lorem ut do est et Lorem velit ullamco quis. Adipisicing culpa reprehenderit aliqua ex officia eu consequat minim minim.</p>
            <SubjectList />
            {/* {selectedSubject && (
                <div>
                    <h2>Subject: {selectedSubject}</h2>
                    <p>Year/Class: Year X</p>
                    <AddStudyMaterial subject={selectedSubject} />
                    <StudentsList subject={selectedSubject} />

                </div>
            )} */}
        </div>
    );
};

export default TeacherPage;
