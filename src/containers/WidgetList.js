import React from 'react'

import {widgetReducer} from "../reducers/WidgetReducer";
import Widget from "../components/Widget"
import * as actions from "../actions/index"

import {Provider, connect} from 'react-redux';


class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets() // invoke from the server
    }
    render() {

        return (
            <div className="form-group">
                {/*<h1>Widget List {this.props.widgets.length}</h1>*/}


                <div>
                    <form className="form-inline float-right">
                        <button
                            className="btn btn-success my-2 my-sm-0 mr-sm-1 float-right"
                            hidden={this.props.previewMode}
                            onClick={this.props.save}>
                            Save
                        </button>

                        <button
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
                                    key={widget.id}/>
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
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget: (lessonId) => actions.addWidget(dispatch, lessonId),
    save: () => actions.save(dispatch),
    preview: () => actions.preview(dispatch)
});

const App = connect(stateToPropertyMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App