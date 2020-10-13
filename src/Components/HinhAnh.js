import React, { Component } from 'react'
import style from './HinhAnh.module.css'

export default class HinhAnh extends Component {
    
    render() {

        let {glasses} = this.props;

        return (
            <>
               <div className={`${style.model__image}`}>
                    <img src={glasses.url} alt={glasses.url} width="300"></img>
                    <div className={`${style.image__content}`}>
                        <div className={`${style.overlay__content}`}></div>
                        <h3>{glasses.name}</h3>
                        <p>{glasses.desc}</p>
                        <span>Price : {glasses.price}$</span>
                    </div>
               </div>
            </>
        )
    }
}
