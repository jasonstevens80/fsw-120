import React from 'react'

class DiceBox extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            numberGamble: this.props.numbers
        }
    }
    /*randomNumberEvent() {
        const rand = Math.floor(Math.random() * 6)
        this.setState({ number: this.state.number + rand })
    }*/
    /* randomNumberEvent() {
    } */
    render() {


        return (
            <div>
                <div>{this.state.numberGamble}</div>
            </div>
        )
    }
}

export default DiceBox