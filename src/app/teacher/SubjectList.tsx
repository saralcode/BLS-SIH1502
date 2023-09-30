import Link from 'next/link';
import React from 'react';

const SubjectList: React.FC = () => {
    const subjects = ['Data Structure and Algorithms', 'Programming in C', 'Java']; // Replace with your subject data

    return (
        <div>
            <ul className=' list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {subjects.map((subject) => (
                    <Link key={subject} href="/teacher/any-subject" className=' no-underline'>
                        <li className='flex justify-center items-center bg-blue-600 h-20 rounded-md text-white text-2xl text-center hover:bg-indigo-600 transition-colors cursor-pointer'>
                            {subject}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default SubjectList;
