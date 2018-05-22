import React from 'react'

class LessonTabItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.lesson.title}

                <span className="float-right">
                    <i  onClick={() => this.props.deleteLesson(this.props.lesson.id)}
                        className="fa fa-trash"></i>
                    {/*<i className="fa fa-pencil"></i>*/}
                </span>
            </li>
        );
    }
}

export default LessonTabItem;