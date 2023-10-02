"use client"
import React, { useState, useEffect } from 'react';
import Title from '@/components/Title/Title';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card } from '@material-tailwind/react';
interface StudentCardProps {

    id: number;
    name: string;
    class: string;
    age: number;
    gender: string;
    address: string;
    city: string;
    country: string;

}
const students: StudentCardProps[] = [
    {
        id: 1,
        name: 'John Smith',
        class: 'Grade 10',
        age: 16,
        gender: 'Male',
        address: '123 Main Street',
        city: 'Cityville',
        country: 'USA',
    },
    {
        id: 2,
        name: 'Jane Doe',
        class: 'Grade 11',
        age: 17,
        gender: 'Female',
        address: '456 Elm Street',
        city: 'Townsville',
        country: 'USA',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        class: 'Grade 9',
        age: 15,
        gender: 'Male',
        address: '789 Oak Street',
        city: 'Villagetown',
        country: 'USA',
    },
    {
        id: 4,
        name: 'Emily Wilson',
        class: 'Grade 12',
        age: 18,
        gender: 'Female',
        address: '101 Pine Street',
        city: 'Hamletville',
        country: 'USA',
    },
    // Add more students as needed
];



const SubjectPage: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <Title>Data Structure and Algoirthm</Title>
            <p className='px-4'>Enim commodo aliqua aute esse enim. Adipisicing fugiat laboris consequat velit ex et officia fugiat magna nisi. Lorem cillum eiusmod cupidatat sunt minim irure commodo ex eu irure. Ipsum eu non sit eu culpa culpa minim officia nulla eu irure. Cupidatat minim laboris minim velit qui labore. Labore esse nulla laborum in quis quis exercitation in ea ipsum cillum amet. Quis duis occaecat sunt id ex reprehenderit sint.</p>
            <Link href="/teacher/any-subject/study-materials" className='no-underline'>
                <div className='flex justify-center items-center bg-blue-600 h-20 rounded-md text-white text-2xl text-center hover:bg-indigo-600 transition-colors cursor-pointer'>
                    Study Materials
                </div>
            </Link>
            <Title>Joined Students</Title>
            <div className='flex justify-end'>
                <Link href="/teacher/any-subject/pending-students">
                    <Button>Pending Students</Button>
                </Link>
            </div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {students.map((student, index) => (
                    <StudentCard key={"student" + index} student={student} />
                ))}
            </ul>
        </div>
    );
};





const StudentCard = ({ student }: { student: StudentCardProps }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 m-4 max-w-xs">
            <Image src={"/student/student.jpg"} height={200} width={150} alt='Student' className='object-contain mx-auto rounded-md overflow-hidden' />
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p>Class: {student.class}</p>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
            <p>Address: {student.address}</p>
            <p>City: {student.city}</p>
            <p>Country: {student.country}</p>
        </div>
    );
};



export default SubjectPage;
