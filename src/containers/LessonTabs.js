import React from 'react'

import LessonService from '../services/LessonService'
import LessonTabItem from '../components/LessonTabItem'

class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lesson: {title: 'New Lesson'},
            lessons: []
        };

        //Bindings
        this.setLessons = this.setLessons.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);

        //Service
        this.lessonService = LessonService.instance;

    }

    setLessons(lessons) {
        this.setState({lessons: lessons});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService.findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => {
                this.setLessons(lessons)
            });
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    // Cashing, rerendering
    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson: {title: event.target.value}});
    }

    createLesson(event) {
        console.log(this.state.lesson);
        this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
            });
        document.getElementById('lessonInputFld').value = '';
        this.setState({lesson: {title: 'New Lesson'}});
    }

    deleteLesson(lessonId) {
        this.lessonService.deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule(this.state.courseId, this.state.moduleId)
            });
    }

    renderListOfLessons() {
        let lessons = this.state.lessons.map(
            (lesson) => {
                return <LessonTabItem courseId={this.state.courseId}
                                      moduleId={this.state.moduleId}
                                      lesson={lesson}
                                      key={lesson.id}
                                      deleteLesson={this.deleteLesson}/>
            }
        );
        return lessons;
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text"
                           id="lessonInputFld"
                           className="form-control"
                           onChange={this.titleChanged}
                           placeholder="Enter Lesson Name"/>

                    <span className="input-group-addon">
                        <button onClick={this.createLesson}
                                className="btn btn-info btn-lg">
                        <i className="fa fa-plus"></i>
                    </button></span>
                </div>

                <br></br>
                <ul className="nav nav-tabs">

                    {this.renderListOfLessons()}
                </ul>


            </div>

        );
    }
}

export default LessonTabs;