import * as constants from "../constants/index"

const WIDGET_API_URL = 'http://localhost:8080/api/lesson/LID/widget';
//'http://localhost:8080/api/widget'

export const findAllWidgets = (dispatch) => {
    //console.log(response);
    fetch('http://localhost:8080/api/widget')
        .then(response => (response.json()))
        .then(widgets =>
            dispatch({type: constants.FIND_ALL_WIDGETS, widgets: widgets})
        )
};

export const findAllWidgetsForLesson = (dispatch, lessonId) => {
    console.log(lessonId);
    fetch(WIDGET_API_URL.replace('LID', lessonId))
        .then(response => (response.json()))
        .then(widgets =>
            dispatch({type: constants.FIND_ALL_WIDGETS_FOR_LESSON, widgets: widgets})
        )
};

export const addWidget = (dispatch, lessonId) => (
    dispatch({
        type: constants.ADD_WIDGET,
        lessonId: lessonId
    })
);

export const save = (dispatch, lessonId) => (
    dispatch({
        type: constants.SAVE,
        lessonId: lessonId
    })
);

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
);

export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize})
);

export const widgetChangeName = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.WIDGET_CHANGE_NAME,
        id: widgetId,
        name: newName})
);

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const listTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LIST_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);

export const listTypeChanged = (dispatch, widgetId, listType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        listType: listType})
);

export const imageUrlChanged = (dispatch, widgetId, newImage) => (
    dispatch({
        type: constants.IMAGE_URL_CHANGED,
        id: widgetId,
        text: newImage})
);

export const linkUrlChanged = (dispatch, widgetId, newLink) => (
    dispatch({
        type: constants.LINK_URL_CHANGED,
        id: widgetId,
        href: newLink})
);

export const linkTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText})
);



