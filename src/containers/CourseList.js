import React from 'react'

import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService"


class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;

        // Binding the event handlers.
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
    }


    // Setting the state of this component. We called findAllCourses, which returns a json of the courses
    // then we set that to the state of this component.
    componentDidMount() {
        this.findAllCourses();
    }


    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            });
    }


    // Iterating through the courses we got from the server
    renderCourseRows() {
        let courses = null;

        if(this.state) {
            courses = this.state.courses
                .map(function (course) {
                    return <CourseRow course={course} key={course.id}/>
                });
        }
        return courses;
    }


    // standard signatures for event handlers. This one is for input field.
    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });
    }


    //
    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }



    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr><th>Title</th></tr>
                    <tr>
                        <th><input onChange={this.titleChanged}
                            className="form-control" id="titleFld" placeholder="cs101"/></th>
                        <th><button onClick={this.createCourse}
                            className="btn btn-primary">Add</button></th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CourseList;