import React from "react";

class ClassSetText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "Изменяемый текст",
        }

        this.setVal = this.setVal.bind(this);
    }

    setVal(new_value){
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({count: this.state.value = new_value })
    }
    render() {
        return (
            <>
                <hr />
                <h2>{this.state.value}</h2><input
                    type="text"
                    value={this.state.value}
                    //** двухсторонее связывание, такие компоненты называются управляемыми */
                    onChange={event => this.setVal(event.target.value)} />
            </>
        )
    }
}

export default ClassSetText;