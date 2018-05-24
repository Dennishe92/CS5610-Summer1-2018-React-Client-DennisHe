import React from 'react'

import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: 'New Module'},
            modules: []
        };

        // Binding HTML elements to functions
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModules = this.setModules.bind(this);
        this.deleteModule = this.deleteModule.bind(this);

        this.moduleService = ModuleService.instance;

    }


    setModules(modules) {
        this.setState({modules: modules})
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }


    findAllModulesForCourse(courseId) {
        this.moduleService.findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }


    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    //caching, rerendering
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }


    createModule(event) {
        console.log(this.state.module);
        this.moduleService.createModule(this.props.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
        document.getElementById('inputFld').value = '';
        this.setState({module: {title: 'New Module'}});
    }


    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId)
            });
    }


    renderListOfModules() {
        let modules = this.state.modules.map(
            (module) => { // map iterates and accumlates results
                return <ModuleListItem courseId={this.state.courseId} module={module} key={module.id}
                                       deleteModule={this.deleteModule}/>
            }
        );
        return modules;
    }

    render() {
        return (
            <div className='container'>
                <br></br>
                <h3>Module List for course: {this.state.courseId}</h3>
                <div className="input-group">
                    <br></br>
                    <input type="text"
                           className="form-control"
                           id="inputFld"
                           onChange={this.titleChanged}
                           placeholder="Enter Module Name"/>

                    <span className="input-group-addon">
                        <button type='button'
                            className="btn btn-info btn-lg"
                            onClick={this.createModule}>
                        <i className="fa fa-plus"></i>
                    </button></span>
                </div>


                <ul className="list-group">
                    <br></br>
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}

export default ModuleList;
