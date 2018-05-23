import React from 'react';

import { Link } from 'react-router-dom'

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item form-control">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    <strong>{this.props.module.title}</strong>
                </Link>
                <span className="float-right">
                    <i  onClick={() => {if(window.confirm('Delete this module?')) this.props.deleteModule(this.props.module.id)}}
                        className="fa fa-trash"></i>
                    {/*<i className="fa fa-pencil"></i>*/}
                </span>
            </li>
        );
    }
}

export default ModuleListItem;
