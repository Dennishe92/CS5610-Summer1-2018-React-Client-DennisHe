import React from 'react'

import LessonTabs from './LessonTabs'

class ModuleEditor extends React.Component {
    constructor(props) { // props has courseId
        super(props);
        this.state = {
            moduleId:'',
            courseId:''
        };
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }
    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        console.log(this.props);
        this.selectModule(this.props.match.params.moduleId);
        this.selectCourse(this.props.match.params.courseId);
    }

    render() {
        return (
            <div>
                <h2>Editing Module: {this.state.moduleId}</h2>
                <div>
                    <LessonTabs moduleId={this.state.moduleId}
                                courseId={this.state.courseId}/>
                </div>
            </div>
        )
    }



}

export default ModuleEditor;