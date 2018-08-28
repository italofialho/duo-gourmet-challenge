import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <div className="not-found-overlay">
          <div className="row">
            <div className="col-md-12">
              <div className="error-template">
                <h1>
                  Oops!</h1>
                <h2>
                  404 Not Found</h2>
                <div className="error-details">
                  Desculpe, ocorreu um erro e a página solicitada não foi encontrada!
                </div>
                <div className="error-actions">
                  <a href="/" className="btn btn-primary btn-lg">
                    Ir para o inicio </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
