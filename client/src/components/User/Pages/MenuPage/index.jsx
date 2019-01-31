import React, { Component } from 'react';
// import queryString from 'query-string';
// import * as api from '../../../services/api';

import Menu from '../../Menu/MenuContainer';
import FilterMenu from '../../FilterMenu/FilterContainer';
import Options from '../../Options/OptionsContainer';
// import BtnClear from '../../BtnClear/index';

class MenuPage extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2>MenuPage</h2>
        <FilterMenu />
        <hr />

        <Options />
        <hr />

        <Menu />

        {/* {currentValue && (
          <BtnClear value={currentValue} handleClearBtn={this.handleClearBtn} />
        )} */}
        {/* {error && <h2>You have a problem. Try again!</h2>} */}
        {/* {isLoading && <p>Loading....</p>} */}
      </div>
    );
  }
}

export default MenuPage;
