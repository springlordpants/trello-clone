import React from 'react'
import Card from './Card'

class List extends React.Component {
    render() {
        return (
            <div>
                <p>list compontent</p>
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}

export default List