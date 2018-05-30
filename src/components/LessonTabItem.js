import React from 'react'

import { Link } from 'react-router-dom'

class LessonTabItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <li className="nav-item"><a className="nav-link active" href="#">
                {/*{this.props.lesson.title}*/}

                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    <strong>{this.props.lesson.title}</strong>
                </Link>

                <span className="float-right">
                    <i onClick={() => {if(window.confirm('Delete this lesson?')) this.props.deleteLesson(this.props.lesson.id)}}
                       className="fa fa-times-circle"></i>
                    {/*<i className="fa fa-pencil"></i>*/}
                </span>
            </a></li>
        );
    }
}

export default LessonTabItem;