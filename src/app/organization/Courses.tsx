import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react';
const courses = [
    {
        id: 1,
        name: 'B.SC Computer',
        description: 'An introductory course to Computer.',
    },
    {
        id: 2,
        name: 'B.Sc Maths',
        description: 'Exploring the basics of various scientific disciplines.',
    },
    {
        id: 3,
        name: 'MCA',
        description: 'A comprehensive look at the history of civilizations.',
    },
    {
        id: 4,
        name: 'B. Com',
        description: 'Exploring classic and modern works of .',
    },
    {
        id: 5,
        name: 'B.sc Physics',
        description: 'Introduction to the principles of physics.',
    },
    {
        id: 6,
        name: 'B.sc Chemistry',
        description: 'Fundamental concepts of chemistry and chemical reactions.',
    },
    // Add more courses as needed
];

const CourseList = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};


const CourseCard = ({ course }: { course: any }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 m-4 ">
            <h2 className="text-xl font-semibold">{course.name}</h2>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-blue-500">Edit</p>
            <Link href={"/organization/courses/some-course"}>
            <Button variant='filled' color='indigo' fullWidth >View</Button>
            </Link>
        </div>
    );
};

export default CourseList;
