import React from 'react'

import LessonTabs from './LessonTabs'

class ModuleEditor extends React.Component {
    constructor(props) { // props has courseId
        super(props);
        this.state = {
            moduleId:''
        };
    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.selectModule(this.props.match.params.moduleId);
    }

    render() {
        return (
            <div>
                <h2>Editing Module: {this.state.moduleId}</h2>
                <div>
                    <LessonTabs/>
                </div>
            </div>
        )
    }



}

export default ModuleEditor;