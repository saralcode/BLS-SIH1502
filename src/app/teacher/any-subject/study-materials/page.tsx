"use client"
import Title from "@/components/Title/Title";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
interface StudyMaterial {
    chapter: string;
    description: string;
    link: string;
  }

const studyMaterials: StudyMaterial[] = [
    {
      chapter: 'Chapter 1',
      description: 'Introduction to the Course',
      link: 'https://example.com/chapter1',
    },
    {
      chapter: 'Chapter 2',
      description: 'Fundamental Concepts',
      link: 'https://example.com/chapter2',
    },
    {
      chapter: 'Chapter 3',
      description: 'Advanced Topics',
      link: 'https://example.com/chapter3',
    },
  ];

export default function StudyMaterials() {
    return <div className="px-4 mx-auto container">
        <Title isH1>Study Materials</Title>
        <div className='flex justify-end'>
                <Link href="/teacher/any-subject/pending-students">
                    <Button>Add a Chapter</Button>
                </Link>
            </div>
        <table className="table-auto">
            <thead>
                <tr>
                    <th>Chapter</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {studyMaterials.map((material, index) => (
                    <tr key={index}>
                        <td>{material.chapter}</td>
                        <td>{material.description}</td>
                        <td>
                            <Button variant="text" color="blue" >
                                View
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div >
}