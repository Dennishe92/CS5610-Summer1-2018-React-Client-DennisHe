import React from 'react'

import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'

import Route from "react-router-dom/es/Route";
import ModuleService from "../services/ModuleService";
import CourseService from "../services/CourseService";

class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            course: ''
        };

        this.selectCourse = this.selectCourse.bind(this);
        this.setCourse = this.setCourse.bind(this);

        this.courseService = CourseService.instance;
    }


    // Setting the state of the component
    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    setCourse(course) {
        this.setState({course: course});
    }

    findCourseById(courseId) {
        this.courseService.findCourseById(courseId)
            .then((course) => {
                this.setCourse(course)
            });
    }

    // Passing in the state to the state setter
    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.findCourseById(this.state.courseId);
        console.log(this.state.course);
    }


    render() {
        return(
            <div className="container">
                <nav className="navbar navbar-dark bg-dark">
                    <th>
                        <a className="navbar-brand" href="http://localhost:3000/courses">
                            <i className="fa fa-home d-inline-block align-middle"
                               width="30" height="30" alt=""></i>
                        </a>
                        <label className="navbar-brand">Editing Course: {this.state.courseId}</label>
                    </th>
                </nav>

                <div className="row">
                    <div className="col-4">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        {/*<ModuleEditor courseId = {this.state.courseId}/>*/}
                        <Route path="/course/:courseId/module/:moduleId"
                               component={ModuleEditor}>
                        </Route>
                    </div>
                </div>

            </div>
        )
    }
}

export default CourseEditor;
