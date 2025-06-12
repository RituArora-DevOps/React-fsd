export default function StudentList(props) {
    const students = props.list;
   // console.log(students);
    return <ul>
        {students.map((student) => <li key={student.id}>{student.name} - Grade: {student.grade}
            <br/>
         <img src={student.img} alt="" />

        </li>
        )}
    </ul>

}