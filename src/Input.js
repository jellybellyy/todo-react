import React, { Component } from 'react'

const Input = (props) => {
    return (
        <div>
            <form>
                <input type="text" name="todo-input"
                    value={props.value}
                    onChange={(e) => {
                        props.onChange(e)
                    }}
                // onKeyUp={(e) => {
                //     e.persist()
                //     e.preventDefault()
                //     props.onEnter(e)
                // }}
                />
                <button onClick={(e) => {
                    e.persist()
                    e.preventDefault()
                    props.add(e)
                }}>+</button>
            </form>
            <div id="message" className={props.class}>{props.message}</div>
            {/* <button onClick={() => {
                console.log('this works');
            }}>click me</button> */}
        </div>
    )
}

export default Input
