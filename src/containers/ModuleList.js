import React from 'react'

import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678},
            ]
        };

        // Binding HTML elements to functions
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);

        this.moduleService = ModuleService.instance;

    }


    setModules(modules) {
        this.setState({modules: modules})
    }


    findAllModulesForCourse(courseId) {
        this.moduleService.findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }


    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    //caching, rerendering
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)

    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    createModule(event) {
        console.log(this.state.module);
        this.moduleService.createModule(this.props.courseId, this.state.module)
    }

    renderListOfModules() {
        let modules = this.state.modules
            .map(function(module){ // map iterates and accumlates results
                return <ModuleListItem title={module.title} key={module.id}/>
            });
        return modules;
    }

    render() {
        return (
            <div>
                <h3>Module List for course: {this.state.courseId}</h3>
                <input type="text"
                       className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>

                <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>

                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}

export default ModuleList;
