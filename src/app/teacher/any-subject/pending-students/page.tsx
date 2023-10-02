"use client"
import Title from '@/components/Title/Title';
import { Button } from '@material-tailwind/react';
import React from 'react';

interface Student {
    id: number;
    name: string;
    class: string;
    age: number;
}

const students = [
    {
        id: 1,
        name: 'John Smith',
        age: 16,
        class: 'Grade 10',
        status: 'approved',
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 17,
        class: 'Grade 11',
        status: 'approved',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        age: 15,
        class: 'Grade 9',
        status: 'pending',
    },
    {
        id: 4,
        name: 'Emily Wilson',
        age: 18,
        class: 'Grade 12',
        status: 'pending',
    },
    // Add more students as needed
];



const PendingStudentsPage: React.FC = () => {

    const pendingStudents: Student[] = students.filter((student) => {
        // Implement your logic to identify pending students here
        // For example, you might have a 'status' field in your student data
        // and consider students with 'pending' status as pending students
        return student.status === 'pending';
    });

    const handleApprove = (id: number) => {
        // Implement your logic to approve the student with the given ID
        // You may update the student's status to 'approved' in your data
    };

    const handleDecline = (id: number) => {
        // Implement your logic to decline the student with the given ID
        // You may update the student's status to 'declined' in your data
    };

    return (
        <div className='container p-2 mx-auto'>
            <Title>Pending Students</Title>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingStudents.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.class}</td>
                            <td className='flex gap-2'>
                                <Button
                                    color='green'
                                    onClick={() => handleApprove(student.id)}
                                >
                                    Approve
                                </Button>
                                <Button
                                    onClick={() => handleDecline(student.id)}
                                    color='red'
                                >
                                    Decline
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PendingStudentsPage;
