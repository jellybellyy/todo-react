import React from 'react'

export default function List(props) {



    return (
        <div className="list">
            Item Count: {props.items.length}
            {props.items.map((item, index) => {
                return (
                    <div key="a">
                        <br />
                        <div key={index}>{item.date} - {item.item}</div>
                        <button
                            value={index}
                            onClick={(e) => {
                                e.persist()
                                e.preventDefault()
                                props.delete(e)
                            }}>x</button>
                    </div>
                )
            })}
            <br /><br /><br /><br />
            <div key="b">Completed Items</div>
            {props.deleted.map((item, index) => {
                return (
                    <div>
                        <br />
                        <div className="done" key={index}>{item.date} - {item.item}</div>
                    </div>
                )
            })}
        </div>
    )
}
