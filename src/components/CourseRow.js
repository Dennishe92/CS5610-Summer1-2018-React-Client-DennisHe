import React from 'react';

import { Link } from 'react-router-dom'
import CourseService from "../services/CourseService";

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
                <tr>

                    <th>
                        <Link to={`/course/${this.props.course.id}`}>
                        {this.props.course.title}
                        </Link>
                    </th>

                    <td>
                        <h6>Me</h6>
                    </td>

                    <td>
                        {this.props.course.modified}
                    </td>

                    <td>
                        <button onClick= {() => this.props.deleteCourse(this.props.course.id)}
                                className="btn btn-danger">Delete</button>
                    </td>

                </tr>

        )
    }
}
export default CourseRow;
