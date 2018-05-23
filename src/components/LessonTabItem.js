import React from 'react'

class LessonTabItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="nav-item"><a className="nav-link active" href="#">
                {this.props.lesson.title}

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