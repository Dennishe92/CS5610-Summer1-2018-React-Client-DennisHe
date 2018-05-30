import React from  'react'
import {connect} from 'react-redux'
import * as constants from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, widgetChangeName}) => {
    let selectElem;
    let inputElem;
    let nameElem;
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading Widget {widget.size}</h2>
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}/>

                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>

                <input onChange={() => widgetChangeName(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}/>

                <h3>Preview</h3>
            </div>

            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
}
//----------------------------------------------------------------------------------------------------------------------

const Paragraph = ({widget, preview, widgetChangeName, paragraphTextChanged}) => {
    let inputElem;
    let nameElem;

    return (
        <div>
            <div hidden={preview}>
                <h2>Paragraph Widget</h2>
                <textarea onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          ref={node => inputElem = node}
                          placeholder="Paragraph text"/>

                <input onChange={() => widgetChangeName(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}/>

                <h3>Preview</h3>
            </div>
            <h2>{widget.text}</h2>
        </div>
    )
};

const List = ({widget, preview, widgetChangeName, listTextChanged, listTypeChanged}) => {
    let listElem;
    let inputElem;
    let nameElem;
    return (
        <div>
            <div hidden={preview}>
                <h2>List Widget</h2>
                <textarea onChange={() => listTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          ref={node => inputElem = node}
                          placeholder="Enter one list item per line"/>

                <select onChange={() => listTypeChanged(widget.id, listElem.value)}
                        value={widget.list}
                        ref={node => listElem = node}>
                    <option>Unordered List</option>
                    <option>Ordered List</option>
                </select>

                <input onChange={() => widgetChangeName(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}/>

                <h3>Preview</h3>
            </div>

            {widget.list == 'Unordered List' && <h3>{widget.text}</h3>}
            {widget.list == 'Ordered List' && <h3>{widget.text}</h3>}
        </div>
    )
}

const Link = () => (
    <h2>Link</h2>
)

const Image = () => (
    <h2>Image</h2>
)

//----------------------------------------------------------------------------------------------------------------------
const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),

    widgetChangeName: (widgetId, newName) =>
        actions.widgetChangeName(dispatch, widgetId, newName),

    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch,widgetId,newText),

    listTextChanged: (widgetId, newText) =>
        actions.listTextChanged(dispatch,widgetId,newText),
    listTypeChanged: (widgetId, newList) =>
        actions.listTypeChanged(dispatch, widgetId, newList)

});

const stateToPropsMapper = state => ({
    preview: state.preview
});

const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);
const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph);
const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List);
const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link);
const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);
//----------------------------------------------------------------------------------------------------------------------


export const Widget = ({widget, dispatch, preview}) => {
    let selectElement;
    return (
        <li>
            <div hidden={preview}>
                {widget.id} {widget.widgetType}

                <select value={widget.widgetType}
                        onChange={() =>
                            dispatch({
                                type: constants.SELECT_WIDGET_TYPE,
                                id: widget.id,
                                widgetType: selectElement.value
                            })}
                        ref={node => selectElement = node}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                    <option>List</option>
                    <option>Image</option>
                    <option>Link</option>
                </select>


                <button onClick={() => (
                    dispatch({type: constants.DELETE_WIDGET, id: widget.id}))}>Delete</button>

            </div>

            <div>
                {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
                {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
            </div>

        </li>
    )
}

const WidgetContainer = connect(state => ({preview: state.preview}))(Widget)
export default WidgetContainer