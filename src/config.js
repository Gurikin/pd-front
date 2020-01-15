import React from 'react';

class Config extends React.Component {
    constructor() {
        super();
        this.state = {baseBackUrl: ""}
    }

    componentDidMount() {
        this.setState({baseBackUrl: "http://dm.loc/"});
    }

    render() {
        return('');
    }
}

export default Config;