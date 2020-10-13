import React, { Component } from 'react';
import HinhAnh from './HinhAnh';
import style from './BaiTap.module.css';
import listInformationGlasses from './data.json';

export default class BaiTapStateProps extends Component {

    state = {
        glasses : {
            id : 1,
            price : 30,
            name : "GUCCI G8850U",
            url : "./images/v1.png",
            desc : "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
    }

    listGlasses = [
        "./images/g1.jpg",
        "./images/g2.jpg",
        "./images/g3.jpg",
        "./images/g4.jpg",
        "./images/g5.jpg",
        "./images/g6.jpg",
        "./images/g7.jpg",
        "./images/g8.jpg",
        "./images/g9.jpg",
    ];


    changeItemGlasses = (id) => {

        //Xử lý change
        const glasses = listInformationGlasses.find((glasses) => {
            return glasses.id === id + 1;
        });

        //Set state 
        this.setState({
            glasses,
        })
        
    }

    renderListGlasses = () => {
        return this.listGlasses.map((glasses, index) => {
            return <img src={glasses} alt={glasses} width="120" height="80" key={index} onClick={() => {
                {this.changeItemGlasses(index)};
            }}></img>   
        })
    }    

    render() {
        return (
            <>
                <div className={`${style.containerFluid} ${style.bg} container-fluid`}>
                    <div className={`${style.overlay}`}></div>
                    <h1 className={`${style.title}`}>Try glasses app online</h1>

                    <div className={`${style.model__content} container mt-3`}>
                        <div className="row">
                            <div className="col-md-6">
                                <HinhAnh glasses = {this.state.glasses} ></HinhAnh>
                            </div>
                            <div className="col-md-6">
                                <HinhAnh glasses = {this.state.glasses} ></HinhAnh>
                            </div>
                        </div>
                    </div> 

                    <div className="container">
                        <div className={`${style.list__glasses}`}>
                            {this.renderListGlasses()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
