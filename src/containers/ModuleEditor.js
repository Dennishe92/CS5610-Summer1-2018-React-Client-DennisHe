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

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        console.log(this.props);
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
                </div>
            </div>
        )
    }



}

export default ModuleEditor;