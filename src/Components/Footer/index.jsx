import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Ir para o topo</a>
                    </p>
                    <p>Duo Gourmet Challenge © {(new Date()).getFullYear()}</p>
                    <p>(▀̿Ĺ̯▀̿ ̿) Challenge Accepted (▀̿Ĺ̯▀̿ ̿)</p>
                </div>
            </footer>
        )
    }
}
