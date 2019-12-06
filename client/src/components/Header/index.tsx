import React from 'react';

class Header extends React.Component<any, any> {
    state = {}
    render() {
        const { title } = this.props
        return (<div>
            <span style={{ fontSize: "80px" }}><b>{title}</b></span>
        </div>);
    }
}

export default Header;