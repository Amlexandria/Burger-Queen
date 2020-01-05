import React from 'react';

class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            breakfastMenu: false,
            regularMenu: false,
        }
    }
    
    handleBreakfastMenu (){
        this.setState({
            breakfastMenu: true,
            regularMenu: false,
        });
        console.log(this.state);
    }
    handleRegulartMenu (){
        this.setState({
            regularMenu: true,
            breakfastMenu: false,
        });
        console.log(this.state);
    }
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-light bg-light">
                            <a className="navbar-brand" href="#">Burger Queen</a>
                        </nav>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-6 offset-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Client</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-6 text-center">
                        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.handleBreakfastMenu()}>Breakfast Menu</button>
                    </div>
                    <div className="col-6 text-center">
                        <button type="button" className="btn btn-primary btn-lg" onClick={() => this.handleRegulartMenu()}>Regular Menu</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;