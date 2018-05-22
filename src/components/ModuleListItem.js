import React from 'react';

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                <span className="float-right">
                    <i  onClick={() => this.props.deleteModule(this.props.module.id)}
                        className="fa fa-trash"></i>
                    <i className="fa fa-pencil"></i>
                </span>
            </li>
        );
    }
}

export default ModuleListItem;
