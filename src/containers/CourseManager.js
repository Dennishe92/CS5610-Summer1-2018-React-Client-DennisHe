import React from 'react';

import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor"
import ModuleEditor from "./ModuleEditor"

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <div>

                    <Route path="/courses"
                           component={CourseList}>
                    </Route>

                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>

                    {/*<Route path="/course/:courseId/module/:moduleId"*/}
                           {/*component={ModuleEditor}>*/}
                    {/*</Route>*/}

                </div>
            </Router>
        )
    }
}
export default CourseManager;