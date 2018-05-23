import React from 'react'

import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService"


class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {
            course: {title: 'DefaultCourse'},
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
        console.log(event.target.value);
        this.setState({course: { title: event.target.value }});
    }


    //
    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
        document.getElementById('titleFld').value = '';
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
            <div className='container'>

                <nav className="navbar navbar-dark bg-dark">
                    <th>
                        <a className="navbar-brand" href="http://localhost:3000/courses">
                            <i className="fa fa-home d-inline-block align-middle"
                               width="30" height="30" alt=""></i>
                        </a>
                        <label className="navbar-brand">Course Manager</label>
                    </th>

                    <form className="form-inline">
                        <th><input onChange={this.titleChanged}
                                   className="form-control mr-sm-2" type="search"
                                   id="titleFld" placeholder="Enter Course Name"/></th>
                        <th><button onClick={this.createCourse}
                                    className="btn btn-outline-success my-2 my-sm-0">Add</button></th>
                    </form>
                </nav>


                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Owned By</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col"></th>
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