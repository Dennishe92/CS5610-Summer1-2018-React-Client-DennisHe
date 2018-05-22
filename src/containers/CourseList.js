import React from 'react'

import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService"


class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: []

        };

        this.courseService = CourseService.instance;

        // Binding the event handlers.
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.setCourses = this.setCourses.bind(this);
    }


    setCourses(courses) {
        this.setState({courses: courses})
    }


    // Setting the state of this component. We called findAllCourses, which returns a json of the courses
    // then we set that to the state of this component.
    componentDidMount() {
        this.findAllCourses();
    }


    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setCourses(courses);
            });
    }


    // Iterating through the courses we got from the server
    renderCourseRows() {
        let courses = this.state.courses.map(
            (course) => {return <CourseRow course={course} key={course.id}
                                      deleteCourse={this.deleteCourse}/>
                }
             );
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


    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
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
                    <tr>
                        <th><input onChange={this.titleChanged}
                                   className="form-control" id="titleFld" placeholder="Enter Course Name"/></th>
                        <th><button onClick={this.createCourse}
                                    className="btn btn-primary">Add</button></th>
                    </tr>
                    </thead>
                </table>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified</th>
                        <th></th>
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