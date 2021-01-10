import React, { ChangeEvent, Component } from 'react'
import { Producer } from '../store/producer/models/Producer'

interface Props {
    producerInput: string;
    producers: Producer[];
    producerChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default class ProducerSearch extends Component<Props>{
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="producer search" name="producerInput" value={this.props.producerInput} onChange={this.props.producerChangeHandler}/>
                </form>
            </div>
        )
    }
}
