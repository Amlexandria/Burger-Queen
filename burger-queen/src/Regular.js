import React from 'react';
import Order from './Order.js'

class Regular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        }
    }
    componentDidMount() {
        const recievedName = this.props.location.state.nameclient;
        this.setState ({
            name: recievedName,
        });
        console.log(recievedName, 'EL NOMBRE');
    }
    render() {
        return(
            <div className="container pt-5">
                <div className="row pt-3">
                    <div className="col-12">
                        <h4>Regular Menu</h4>
                        <p>{this.state.name}</p>
                    </div>
                    <div className="col-7 pt-5">
                        <div className="row">
                            <div className="col-12">
                                <h5>Hamburguesas</h5>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#simpleOrDobble">
                                Res
                                </button>
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#simpleOrDobble">
                                Pollo
                                </button>
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#simpleOrDobble">
                                Vegetariana
                                </button>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <h5>Extras</h5>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2">Queso</button>
                                <button type="button" className="btn btn-primary btn-lg m-2">Huevo</button>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <h5>Acompañamientos</h5>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2">Papas fritas</button>
                                <button type="button" className="btn btn-primary btn-lg m-2">Oniong Rings</button>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <h5>Bebidas</h5>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#mililitros">
                                Agua
                                </button>
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#mililitros">
                                Refresco
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <Order nameclient={this.state.name}/>
                    </div>
                </div>
                <div className="modal fade" id="simpleOrDobble" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <button type="button" className="btn btn-primary btn-lg m-2">Simple</button>
                            <button type="button" className="btn btn-primary btn-lg m-2">Doble</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="mililitros" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="mililitrosLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <button type="button" className="btn btn-primary btn-lg m-2">500ml</button>
                            <button type="button" className="btn btn-primary btn-lg m-2">750ml</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regular;