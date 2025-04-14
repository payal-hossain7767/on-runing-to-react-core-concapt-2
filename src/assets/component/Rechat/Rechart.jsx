import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart, Bar } from 'recharts';
const resultData = [
    { "student_id": 1, "name": "Alice", "marks": 87, "subject": "Math" },
    { "student_id": 2, "name": "Ben", "marks": 73, "subject": "Science" },
    { "student_id": 3, "name": "Clara", "marks": 91, "subject": "English" },
    { "student_id": 4, "name": "David", "marks": 65, "subject": "History" },
    { "student_id": 5, "name": "Eva", "marks": 78, "subject": "Math" },
    { "student_id": 6, "name": "Farhan", "marks": 84, "subject": "Science" },
    { "student_id": 7, "name": "Grace", "marks": 69, "subject": "English" },
    { "student_id": 8, "name": "Hassan", "marks": 90, "subject": "History" },
    { "student_id": 9, "name": "Isla", "marks": 76, "subject": "Math" },
    { "student_id": 10, "name": "Jack", "marks": 88, "subject": "Science" }
]

const Rechart = () => {

    return (
        <div className='border-2 border-amber-600 mx-12' >


            <BarChart width={1000} height={800} data={resultData}>
                <XAxis dataKey="name" tick={'subject'} />
                <XAxis dataKey="subject" tick={'subject'} />
                <YAxis />
                <Bar dataKey={"marks"} barSize={30} fill="#48A6A7"
                   />
            </BarChart>
        </div>
    );
};

export default Rechart;