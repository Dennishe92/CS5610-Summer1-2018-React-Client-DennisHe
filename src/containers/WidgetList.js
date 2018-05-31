import React from 'react'

import {widgetReducer} from "../reducers/WidgetReducer";
import Widget from "../components/Widget"
import * as actions from "../actions/index"

import {Provider, connect} from 'react-redux';


class WidgetList extends React.Component {
    constructor(props) {
        super(props);
     //   this.props.findAllWidgets() // invoke from the server
    }

    componentDidMount(props) {
        console.log(props);
    }

    componentWillReceiveProps(newProps){
        if (newProps.lessonId !== this.props.lessonId) {
            this.props.findAllWidgetsForLesson(newProps.lessonId)
        }
    }

    render() {

        return (
            <div className="form-group">
                {/*<h1>Widget List {this.props.widgets.length}</h1>*/}


                <div>
                    <form className="form-inline float-right">
                        <button
                            className="btn btn-success my-2 my-sm-0 mr-sm-1 float-right"
                            type="button"
                            hidden={this.props.previewMode}
                            onClick={() => this.props.save(this.props.lessonId)}>
                            Save
                        </button>

                        <button
                            type="button"
                            className="btn btn-info my-2 my-sm-0 float-right"
                            onClick={this.props.preview}>
                            Preview
                        </button>
                    </form>
                </div>

                <br/>
                <br/>
                <br/>

                <div>
                    <ul>
                        {this.props.widgets.map(widget => (
                            <Widget widget={widget}
                                    preview={this.props.previewMode}
                                    />
                        ))}
                    </ul>
                </div>

                <div>
                    <button
                        className="btn btn-primary my-2 my-sm-0 float-right"
                        onClick={() => this.props.addWidget(this.props.lessonId)}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>

            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview,

});

const dispatcherToPropsMapper = (dispatch) => ({
    findAllWidgetsForLesson:(lessonId) => actions.findAllWidgetsForLesson(dispatch, lessonId),
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget:(lessonId) => actions.addWidget(dispatch, lessonId),
    save: (lessonId) => actions.save(dispatch, lessonId),
    preview: () => actions.preview(dispatch)
});

const App = connect(stateToPropertyMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App