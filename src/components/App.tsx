import * as React from "react";
import * as styles from "./../assets/scss/App.module.sass";

const reactLogo = require("./../assets/img/react_logo.svg");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
    <div className={styles.app}>
                <h1>Hello World!</h1>
                <p>Foo to the barz</p>
                <img src={reactLogo} height="480"/>
            </div>
        )
    }
}
