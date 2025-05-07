import React from "react";

const students=[
    {roll_no: '1', name: 'Abhinav'},
    {roll_no: '2', name: 'Kishen'},
    {roll_no: '3', name: 'Rohit'}
    
];

const Student_list= () => {
    return (
        <ul>
            {students.map((student) =>(
                <li key={student.roll_no}><strong>{student.name}</strong></li>)
            )}
        </ul>
    )
}

export default Student_list;
