import React from 'react';
import Header from "../../Header"
import { connect } from 'react-redux';

class Materials extends React.Component<any, any> {
    state = {}
    render() {
        return (<div>
            <Header title="Materials" />
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


export default connect(mapStateToProps, mapDispatchToProps)(Materials);