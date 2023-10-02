import React from 'react';
import Link from 'next/link';
import { FaUniversity, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'; // Import icons from react-icons

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-6">Choose Your Role</h1>
            <div className="flex space-x-4">
                {/* University Option */}
                <Link href="/organization" className="text-blue-500 bg-white p-8 rounded-md shadow-md">
                    <div className="flex flex-col items-center">
                        <FaUniversity size={40} />
                        <p>Organization</p>
                    </div>
                </Link>

                {/* Teacher Option */}
                <Link href="/teacher" className="text-green-500  bg-white p-8 rounded-md shadow-md">
                    <div className="flex flex-col items-center">
                        <FaChalkboardTeacher size={40} />
                        <p>Teacher</p>
                    </div>
                </Link>

                {/* Student Option */}
                <Link href="/student" className="text-purple-500  bg-white p-8 rounded-md shadow-md">
                    <div className="flex flex-col items-center">
                        <FaUserGraduate size={40} />
                        <p>Student</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
