import * as constants from "../constants/index"

export const widgetReducer = (state = {widgets: []}, action) => {
    switch(action.type) {

        case constants.IMAGE_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget);
                })
            }

        case constants.LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.list = action.list;
                    }
                    return Object.assign({}, widget);
                })
            }

        case constants.LIST_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget);
                })
            }

        case constants.PARAGRAPH_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget);
                })
            }

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            }

        case constants.WIDGET_CHANGE_NAME:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget);
                })
            }

        case constants.HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType

                    }

                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:
            console.log(state.widgets);
            console.log(action.lessonId);
            fetch("http://localhost:8080/api/lesson/"+action.lessonId+"/widget/save", {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'}
            })
            return state

        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            return newState

        case constants.FIND_ALL_WIDGETS_FOR_LESSON:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets
            return newState

        case constants.MOVE_UP:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.widgetOrder++
                    }
                    console.log(widget.widgetOrder);
                    return true;
                })
            }

        case constants.MOVE_DOWN:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.widgetOrder--
                    }
                    console.log(widget.widgetOrder);
                    return true;
                })
            }

        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }

        case constants.ADD_WIDGET:
            console.log("Reducer" + JSON.stringify(action.lessonId));
            return {

                widgets: [
                    ...state.widgets,
                    {   id: state.widgets.length + 1,
                        text: 'New Widget',
                        widgetType: 'Heading',
                        size: '1',
                        listType: 'Unordered List',
                        name: 'New Name',
                        widgetOrder: state.widgets.length + 1,
                        lessonId: action.lessonId
                    }
                ]
            }

        default:
            return state
    }
};