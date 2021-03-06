import React from  'react'
import {connect} from 'react-redux'
import * as constants from "../constants/index"
import * as actions from '../actions'

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, widgetChangeName}) => {
    let selectElem
    let inputElem
    let nameElem
    return(
        <div id="heading">
            <form>
                <div hidden={preview} className="form-group">
                    <h2>Heading Widget</h2>

                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Heading text"
                               onChange={() => headingTextChanged(widget.id, inputElem.value)}
                               value={widget.text}
                               ref={node => inputElem = node}/>
                    </div>

                    <div className="form-group">
                        <select className="form-control"
                                onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                                value={widget.size}
                                ref={node => selectElem = node}>
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               placeholder="Widgit name"
                               onChange={() => widgetChangeName(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}/>
                    </div>

                    <h3>Preview</h3>
                </div>
            </form>

            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
            <br/>
        </div>
    )
}
//----------------------------------------------------------------------------------------------------------------------

const Paragraph = ({widget, preview, widgetChangeName, paragraphTextChanged}) => {
    let inputElem
    let nameElem

    return (
        <div id="paragraph">
            <form>
                <div hidden={preview} className="form-group">
                    <h2>Paragraph Widget</h2>

                    <div className="form-group">
                <textarea className="form-control"
                          onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          ref={node => inputElem = node}
                          placeholder="Paragraph text"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => widgetChangeName(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                               placeholder="Widget name"/>
                    </div>

                    <h3>Preview</h3>
                </div>
            </form>
            <h2>{widget.text}</h2>
            <br/>
        </div>
    )
};

const List = ({widget, preview, widgetChangeName, listTextChanged, listTypeChanged}) => {
    let listElem
    let inputElem
    let nameElem
    return (
        <div id="list">
            <form>
                <div hidden={preview} className="form-group">
                    <h2>List Widget</h2>

                    <div className="form-group">
                <textarea className="form-control"
                          onChange={() => listTextChanged(widget.id, inputElem.value)}
                          value={widget.text}
                          ref={node => inputElem = node}
                          placeholder="Enter one list item per line"/>
                    </div>

                    <div className="form-group">
                        <select className="form-control"
                                onChange={() => listTypeChanged(widget.id, listElem.value)}
                                value={widget.listType}
                                ref={node => listElem = node}>
                            <option>Unordered List</option>
                            <option>Ordered List</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => widgetChangeName(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                               placeholder="Heading text"/>
                    </div>

                    <h3>Preview</h3>
                </div>
            </form>

            {widget.listType == 'Unordered List' &&
            <ul>{widget.text.split("\n").map(item => (
                <li>{item}</li>
            ))}</ul>}

            {widget.listType == 'Ordered List' && <ol>{widget.text.split("\n").map(item => (
                <li>{item}</li>
            ))}</ol>}

            <br/>
        </div>
    )
}

const Image = ({widget, preview, widgetChangeName, imageUrlChanged}) => {
    let inputElem
    let nameElem
    return (
        <div id="image">
            <form>
                <div hidden={preview} className="form-group">
                    <h2>Image Widget</h2>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => imageUrlChanged(widget.id, inputElem.value)}
                               value={widget.text}
                               ref={node => inputElem = node}
                               placeholder="Image URL"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => widgetChangeName(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                               placeholder="Widget name"/>
                    </div>

                    <h3>Preview</h3>
                </div>
            </form>
            <img className="img-responsive img-thumbnail" src={widget.text}></img>
            <br/>
        </div>
    )
}




const Link = ({widget, preview, widgetChangeName, linkUrlChanged, linkTextChanged}) => {
    let linkElem
    let inputElem
    let nameElem
    return (
        <div id="link">
            <form>
                <div hidden={preview} className="form-group">
                    <h2>Link Widget</h2>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => linkUrlChanged(widget.id, linkElem.value)}
                               value={widget.href}
                               ref={node => linkElem = node}
                               placeholder="Link URL"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => linkTextChanged(widget.id, inputElem.value)}
                               value={widget.text}
                               ref={node => inputElem = node}
                               placeholder="Link text"/>
                    </div>

                    <div className="form-group">
                        <input className="form-control"
                               onChange={() => widgetChangeName(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                               placeholder="Widget name"/>
                    </div>

                    <h3>Preview</h3>
                </div>
            </form>
            <h2><a href={widget.href} target="_blank">{widget.text}</a></h2>
            <br/>
        </div>
    )
}

//----------------------------------------------------------------------------------------------------------------------
const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    widgetChangeName: (widgetId, newName) =>
        actions.widgetChangeName(dispatch, widgetId, newName),

    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),

    listTextChanged: (widgetId, newText) =>
        actions.listTextChanged(dispatch, widgetId, newText),
    listTypeChanged: (widgetId, newList) =>
        actions.listTypeChanged(dispatch, widgetId, newList),

    imageUrlChanged: (widgetId, newImage) =>
        actions.imageUrlChanged(dispatch, widgetId, newImage),

    linkUrlChanged: (widgetId, newUrl) =>
        actions.linkUrlChanged(dispatch, widgetId, newUrl),

    linkTextChanged: (widgetId, newText) =>
        actions.linkTextChanged(dispatch, widgetId, newText)
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
        <div id="whole">
            <div hidden={preview}>

                <form className="form-inline float-right">

                     <span><button className="btn btn-warning mr-sm-1"
                                   type="button"
                                   onClick={() => (dispatch({type: constants.MOVE_UP, widgetOrder: widget.widgetOrder}))}>
                        <i className="fa fa-arrow-up" aria-hidden="true"></i>
                    </button></span>

                    <span><button className="btn btn-warning mr-sm-1"
                                  type="button"
                                  onClick={() => (dispatch({type: constants.MOVE_DOWN, widgetOrder: widget.widgetOrder}))}>
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </button></span>

                    <span><select
                        className="form-control mr-sm-1"
                        value={widget.widgetType}
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
                </select></span>

                    <span><button
                        type="button"
                        className="btn btn-danger my-2 my-sm-0"
                        onClick={() => (dispatch({type: constants.DELETE_WIDGET, id: widget.id}))}>
                          <i className="fa fa-times" aria-hidden="true"></i>
               </button></span>

                </form>

            </div>

            <div>
                {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
                {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
            </div>

        </div>
    )
}

const WidgetContainer = connect(state => ({preview: state.preview}))(Widget)
export default WidgetContainer