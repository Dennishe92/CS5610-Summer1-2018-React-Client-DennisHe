import React from 'react'

import App from './WidgetList'
import {widgetReducer} from "../reducers/WidgetReducer";

import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';


const store = createStore(widgetReducer);

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

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        this.selectCourse(newProps.match.params.courseId);
        this.selectModule(newProps.match.params.moduleId);
        this.selectLesson(newProps.match.params.lessonId);
    }



    render() {
        return (
            <Provider store = {store}>
            <div className="container">
                <br></br>
                {/*<h3>Editing Lesson: {this.props.match.params.lessonId}</h3>*/}
                <div>
                    <App lessonId={this.state.lessonId}/>
                </div>
            </div>
            </Provider>
        )
    }



}

export default LessonEditor;