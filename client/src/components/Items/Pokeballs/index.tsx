import React from 'react';
import Header from "../../Header"
import { connect } from 'react-redux';

class Pokeballs extends React.Component<any, any> {
    state = {}
    render() {
        return (<div>
            <Header title="Pokeballs" />
        </div>);
    }
}

const mapStateToProps = (state: any) => {
    return {}
}
const mapDispatchToProps = (disptach: any) => {
    return {
        actions: {

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pokeballs);