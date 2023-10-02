"use client"
import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import Title from '@/components/Title/Title';
import CourseList from './Courses';
const teachers = [
    {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@example.com',
        subject: 'Mathematics',

    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        subject: 'Science',

    },
    {
        id: 3,
        name: 'Michael Johnson',
        email: 'michael.johnson@example.com',
        subject: 'History',

    },
    {
        id: 4,
        name: 'Sarah Williams',
        email: 'sarah.williams@example.com',
        subject: 'English',

    },
    {
        id: 5,
        name: 'Robert Davis',
        email: 'robert.davis@example.com',
        subject: 'Physics',

    },
    {
        id: 6,
        name: 'Emily Wilson',
        email: 'emily.wilson@example.com',
        subject: 'Chemistry',

    },
    // Add more teachers as needed
];


const OrganizationPage: React.FC = () => {


    return (
        <div className='container mx-auto'>
            <Title isH1>XYZ College</Title>
            <p>Ut eu minim non duis adipisicing laborum est in reprehenderit commodo laborum eu. Culpa non in do ex et pariatur. Officia magna ex ad in. Elit velit occaecat elit in consectetur consequat consectetur elit aliquip occaecat sunt adipisicing velit. Amet velit ea nisi reprehenderit aliqua excepteur in ex pariatur minim ea irure in. Ipsum aliquip eu consectetur ipsum exercitation aliqua culpa.</p>
            <section>

                <Title>Courses</Title>
                <div className='flex justify-end'>
                    <Link href="/organization/add-course">
                        <Button>Add a Course</Button>
                    </Link>
                </div>
                <CourseList />
            </section>

            <section>
                <Title>Teachers</Title>
                <div className='flex justify-end'>
                    <Link href="/organization/add-teacher">
                        <Button>Add a Teacher</Button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {teachers.map((teacher, index) => {
                        return <TeacherCard teacher={teacher} key={"teachers"+index} />
                    })}
                </div>
            </section>

        </div>
    );
};

export default OrganizationPage;



const TeacherCard = ({ teacher }: { teacher: any }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 m-4 max-w-xs">
            <h2 className="text-xl font-semibold">{teacher.name}</h2>
            <p className="text-gray-600">{teacher.subject}</p>
            <p className="text-blue-500">{teacher.email}</p>
            <Button variant='outlined' color='green'>Edit</Button>
        </div>
    );
};


