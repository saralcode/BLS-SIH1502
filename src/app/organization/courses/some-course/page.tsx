"use client"
import Title from '@/components/Title/Title';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
const subjects = [
    {
        id: 1,
        name: 'Computer Programming',
        description: 'Fundamentals of computer programming.',
        year: 4,
    },
    {
        id: 2,
        name: 'Database Management',
        description: 'Introduction to database systems.',
        year: 3,
    },
    {
        id: 3,
        name: 'Web Development',
        description: 'Building dynamic web applications.',
        year: 4,
    },
    {
        id: 4,
        name: 'Data Structures and Algorithms',
        description: 'Advanced data structures and algorithm analysis.',
        year: 3,
    },
    {
        id: 5,
        name: 'Operating Systems',
        description: 'Study of operating system concepts.',
        year: 3,
    },
    // Add more subjects as needed
];



const App = () => {
    return (
        <div className='container mx-auto'>
            <Title isH1> B.Sc. Computer Application</Title>
            <div className='flex justify-end'>

                <Link href="/organization/courses/some-course/add-subject">
                    <Button>Add a Subject</Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {subjects.map((subject) => (
                    <SubjectCard key={subject.id} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default App;


const SubjectCard = ({ subject }: { subject: any }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 m-4 max-w-xs">
            <h2 className="text-xl font-semibold">{subject.name}</h2>
            <p className="text-gray-600">{subject.description}</p>
            <p>Semester: {subject.year}</p>

            <div className='flex gap-2'>
                <Button color='indigo'>Add Teachers</Button>
                <Button color='green'>Edit</Button>
            </div>
        </div>
    );
};


