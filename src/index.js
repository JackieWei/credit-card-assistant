import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { IntlProvider, FormattedMessage, addLocaleData } from 'react-intl';
import App from './modules/App'
import Me from './modules/Me'
import Card from './modules/Card'
import CardDetail from './modules/card/CardDetail'
import Home from './modules/Home'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en-US',
        };
    }
    onChange(index) {
        const lang = index === 0 ? 'en-US' : 'zh-CN';
        this.setState({
            lang,
        });
    }
    render() {
        return (<LocaleProvider>
            <IntlProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home} />
                        <Route path="/card" component={Card}>
                            <Route path="/card/:card" component={CardDetail} />
                        </Route>
                        <Route path="/me" component={Me} />
                    </Route>
                </Router>
            </IntlProvider>
        </LocaleProvider>)
    }
}

ReactDOM.render((
    <Index />
), document.getElementById('app'))