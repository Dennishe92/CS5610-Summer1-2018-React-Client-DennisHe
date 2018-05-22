import React from 'react'

import ModuleList from './ModuleList'
import ModuleEditor from './ModuleEditor'

import Route from "react-router-dom/es/Route";

class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: ''
        };

        this.selectCourse = this.selectCourse.bind(this);
    }


    // Setting the state of the component
    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }


    // Passing in the state to the state setter
    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }


    render() {
        return(
            <div>
                <h2>Editing course: {this.state.courseId}</h2>
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
