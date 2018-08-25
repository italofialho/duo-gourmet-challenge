import React, { Component } from 'react';
import Layout from '../Layout';

import _ from 'underscore';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      totalOfRestaurants: 0,
      uniqueCookingList: [],
      orderBy: 'review'
    }
  }

  //? When React finishes mounting the component shows the list with the restaurants
  componentDidMount() {
    this.prepareRestaurantList();
  }

  //? Just return the list of restaurants
  //TODO: Implement restaurant search for an API or database
  getRestaurantList() {
    const restaurants = [
      {
        "name": "Trindade",
        "cooking": "Brasileira",
        "review": 4.4,
        "distanceInMeters": 3000,
        "coverImage": "https://i.imgur.com/ILzD2m1.jpg",
        "logoImage": "https://i.imgur.com/Z9TfVSx.png"
      },
      {
        "name": "Glouton",
        "cooking": "Internacional",
        "review": 4.9,
        "distanceInMeters": 500,
        "coverImage": "https://i.imgur.com/ezBscYh.jpg",
        "logoImage": "https://i.imgur.com/rAV5NlT.png"
      },
      {
        "name": "Xapuri",
        "cooking": "Mineira",
        "review": 4.1,
        "distanceInMeters": 900,
        "coverImage": "https://i.imgur.com/IHPqZoI.jpg",
        "logoImage": "https://i.imgur.com/Amz328T.png"
      },
      {
        "name": "Gomide",
        "cooking": "Francesa",
        "review": 4.6,
        "distanceInMeters": 1000,
        "coverImage": "https://i.imgur.com/zBVKlxz.jpg",
        "logoImage": "https://i.imgur.com/JEf1Z3h.png"
      }
    ];

    return restaurants;
  }

  //? Gets the list of restaurants and the count that will be set to the state of the component
  prepareRestaurantList() {
    const restaurants = this.getRestaurantList();
    const totalOfRestaurants = _.size(restaurants);
    this.setState({ restaurants, totalOfRestaurants }, () => {
      this.orderRestaurantList();
      this.getUniqueCookingList();
    });
  }

  //? Create an array with the only cooking type to be displayed in the select search
  getUniqueCookingList() {
    const { restaurants } = this.state;
    const uniqueList = _.uniq(restaurants, restaurant => { return restaurant.cooking });
    const uniqueCookingList = _.map(uniqueList, "cooking");
    this.setState({ uniqueCookingList })
  }

  //? Order the list of restaurants that are currently being served according to the value of the advanced filter select!
  orderRestaurantList() {
    const { orderBy } = this.state;
    const currentRestaurantList = this.state.restaurants;
    const restaurants = _.sortBy(currentRestaurantList, orderBy);
    this.setState({ restaurants });
  }

  //? Calculates the distance in kilometers if the value is greater than 1000 meters
  converterMetersForKilometers(meters) {
    const kilometers = meters >= 1000;
    const distInKM = kilometers ? meters / 1000 : meters;
    const unit = this.getTheUnitOfMeasure(distInKM, kilometers);
    return `${distInKM} ${unit}`
  }

  //? Returns the specific unit of measure for the calculated distance in the function 'convertMetersForKilometers'
  getTheUnitOfMeasure(value, kilometers) {
    if (kilometers && value >= 1) return "km";
    return "m";
  }

  //? Filter the entire list of restaurants by the type of cuisine chosen
  filterRestaurantsByCooking(cooking) {
    const currentRestaurantList = this.getRestaurantList();
    const restaurants = _.filter(currentRestaurantList, restaurant => restaurant.cooking === cooking);
    const totalOfRestaurants = _.size(restaurants);
    this.setState({ restaurants, totalOfRestaurants }, () => this.orderRestaurantList());
  }

  //? Filter the entire restaurant list by typing in the advanced filter search field
  filterRestaurantsByName(name) {
    const currentRestaurantList = this.getRestaurantList();
    const restaurants = _.filter(currentRestaurantList, restaurant => _.contains(restaurant.name.toLowerCase(), name.toLowerCase()));
    const totalOfRestaurants = _.size(restaurants);
    this.setState({ restaurants, totalOfRestaurants }, () => this.orderRestaurantList());
  }

  //? It processes the event, de-structuring it so that its name and value is assigned to the state and then the ordering is performed.
  handleOrderBySelectChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.orderRestaurantList());
  }

  //? It processes the event, de-structuring it so that its name and value is assigned to the state and then the ordering is performed.
  handleCookingSelectChange(e) {
    const { value } = e.target;
    if (!value) return this.prepareRestaurantList();
    this.filterRestaurantsByCooking(value);
  }

  //? It processes the event, de-structuring it so that its name and value is assigned to the state and then the ordering is performed.
  handleRestauranteNameChange(e) {
    const { value } = e.target;
    if (!value) return this.prepareRestaurantList();
    console.log("handleRestauranteNameChange value:", value);
    this.filterRestaurantsByName(value);
  }


  renderAdvancedFilter() {
    const { uniqueCookingList, orderBy } = this.state;
    return (
      <div className="form-row align-items-center">
        <div className="col-6 col-md-4 my-1">
          <label className="mr-sm-2" for="inlineFormCustomSelect">Tipo de culinária</label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => this.handleCookingSelectChange(e)}>
            <option selected value="">Todas</option>
            {
              _.map(uniqueCookingList, cooking => <option value={cooking}>{cooking}</option>)
            }
          </select>
        </div>
        <div className="col-6 col-md-4 my-1">
          <label className="mr-sm-2" for="inlineFormCustomSelect">Ordenar por</label>
          <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="orderBy" value={orderBy} onChange={(e) => this.handleOrderBySelectChange(e)}>
            <option value="review">Avaliação</option>
            <option value="distanceInMeters">Distância</option>
          </select>
        </div>
        <div className="col-12 col-md-4 my-1">
          <label className="mr-sm-2" for="inlineFormCustomSelect">Nome do restaurante</label>
          <input className="mr-sm-2 form-control" onChange={e => this.handleRestauranteNameChange(e)} placeholder="Começe a digitar para pesquisar" />
        </div>
      </div>
    )
  }

  renderRestaurantList() {
    const { restaurants } = this.state;
    return _.map(restaurants, restaurant => {
      return (
        <div className="col-md-3">
          <div className="card mb-4 shadow-sm">
            <img className="card-img-top" alt="Imagem principal do restaurante" style={{ height: '15vh', width: '100%', display: 'block' }} src={restaurant.coverImage} />
            <div className="card-body">
              <h5 className="card-title">{restaurant.name}</h5>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => this.filterRestaurantsByCooking(restaurant.cooking)}>{restaurant.cooking}</button>
                  <button type="button" className="btn btn-sm btn-outline-warning"><i className="far fa-star fa-fw" />&nbsp;{restaurant.review}</button>
                </div>
                <small className="text-muted">{this.converterMetersForKilometers(restaurant.distanceInMeters)}</small>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }


  render() {
    const { totalOfRestaurants } = this.state;
    return (
      <Layout>
        <section className="text-center background-img">
          <div className="background-overlay jumbotron">
            <div className="container">
              <h1 className="jumbotron-heading text-white">Duo Gourmet Challenge</h1>
              <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis venenatis dui, vel commodo dui. Aenean et consequat orci, sit amet tincidunt enim. Nulla ac finibus erat. Donec feugiat tempus erat, ac tincidunt dolor.</p>
              <p>
                <button className="btn btn-lg btn-outline-light my-2 mx-2">ASSINAR</button>
                <button className="btn btn-lg btn-outline-light my-2 mx-2">BAIXAR APP</button>
              </p>
            </div>
          </div>
        </section>
        <div className="py-5 bg-light">
          <div className="container">
            {this.renderAdvancedFilter()}
            <p className="lead">{totalOfRestaurants} restaurante{totalOfRestaurants > 1 ? "s" : ""} encontrado{totalOfRestaurants > 1 ? "s" : ""}</p>
            <div className="row">
              {this.renderRestaurantList()}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
