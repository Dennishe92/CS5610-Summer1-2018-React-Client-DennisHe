import React from 'react'

import App from './WidgetList'
import {widgetReducer} from "../reducers/WidgetReducer";

class LessonEditor extends React.Component {
    constructor(props) { // props has courseId
        super(props);
        this.state = {
            lessonId:'',
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

    selectLesson(lessonId) {
        this.setState({lessonId: lessonId})
    }

    componentDidMount() {
        console.log(this.props);
        this.selectCourse(this.props.match.params.courseId);
        this.selectModule(this.props.match.params.moduleId);
        this.selectModule(this.props.match.params.lessonId);
    }

    let store = createStore(widgetReducer);

    render() {
        return (
            <Provider store = {store}>
            <div className="container">
                <br></br>
                <h3>Editing Lesson: {this.props.match.params.lessonId}</h3>
                <div>
                    <App lessonId={this.props.match.params.lessonId}/>
                </div>
            </div>
            </Provider>
        )
    }



}

export default LessonEditor;