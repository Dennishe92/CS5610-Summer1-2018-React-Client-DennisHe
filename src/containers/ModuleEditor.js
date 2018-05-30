import React from 'react'

import LessonTabs from './LessonTabs'
import LessonEditor from './LessonEditor'
import Route from "react-router-dom/es/Route";

class ModuleEditor extends React.Component {
    constructor(props) { // props has courseId
        super(props);
        this.state = {
            moduleId:'',
            courseId:''
        };
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
    }

    render() {
        return (
            <div className="container">
                <br></br>
                <h3>Editing Module: {this.props.match.params.moduleId}</h3>
                <div>
                    <LessonTabs moduleId={this.props.match.params.moduleId}
                                courseId={this.props.match.params.courseId}/>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                           component={LessonEditor}>
                    </Route>
                </div>
            </div>
        )
    }



}

export default ModuleEditor;