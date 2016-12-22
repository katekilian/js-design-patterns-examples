'use strict';

class CleanHouseFacade {
  constructor() {}
  
  clean() {
    this._laundry();
    this._vaccum();
    this._washDishes();
  }

  _laundry() {
    console.log('Done with laundry');    
  }

  _vaccum() {
    console.log('Done with vaccum');
  }

  _washDishes() {
    console.log('Done with washing the dishes');
  }
}

const cleanHouseFacade = new CleanHouseFacade();

cleanHouseFacade.clean();