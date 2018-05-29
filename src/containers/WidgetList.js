import React from 'react'

import {widgetReducer} from "../reducers/WidgetReducer";
import Widget from "../components/Widget"
import * as actions from "../actions/index"


class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets() // invoke from the server
    }
    render() {
        return (
            <div>
                <h1>Widget List {this.props.widgets.length}</h1>

                <button hidden={this.props.previewMode} onClick={this.props.save}>Save</button>
                <button onClick={this.props.preview}>Preview</button>

                <ul>
                    {this.props.widgets.map(widget => (
                        <Widget widget={widget}
                                preview={this.props.previewMode}
                                key={widget.id}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget}></button>
            </div>
        )
    }
}


const stateToPropertyMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
});

const dispatcherToPropsMapper = (dispatch) => ({
    findAllWidgets: () => findAllWidgets(dispatch),
    addWidget: () => addWidget(dispatch),
    save: () => save(dispatch),
    preview: () => actions.preview(dispatch)
});

const store = createStore(widgetReducer);

const App = connect(stateToPropertyMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App