import React from 'react';
import ReactDOM from 'react-dom/client';
import {Student} from './Student';

const student0 = new Student(0, 'Zion', 'Sun');
const student1 = new Student(1, 'Brandon', 'Sun') 
const student2 = new Student(2, 'Lin', 'Sun') 
const students = [student0, student1, student2];

/*const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);*/

const listItems = students.map((stu) =>
  <li>{stu.id} {stu.firstName} {stu.lastName}</li>
);

const element = <ul>{listItems}</ul>;
export class StudentList extends React.Component{
    constructor(props){
        super(props);
        
        
    }
    render(){
        return(
            <div>
                {element}
            </div>
        );
    }
}