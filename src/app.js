import React, {Component} from 'react';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import window from 'global/window'
import KeplerGl from 'kepler.gl'
import {connect} from 'react-redux';

const MAPBOX_TOKEN = ''

class App extends Component {
  state = {
    showBanner: false,
    width: window.innerWidth,
    height: window.innerHeight,
    marginTop: 0
  };

  replaceDefaultStyles = true;
  mapStyles = [
    {
      id: 'basic',
      label: 'Basic',
      url: 'http://localhost:8080/styles/klokantech-basic/style.json',
      icon: `http://localhost:8080/styles/klokantech-basic/12/2071/1529.png`,
      layerGroups: [] // DEFAULT_LAYER_GROUPS
    },{
      id: 'basic-cadastre',
      label: 'Basic Cadastre',
      url: 'http://localhost:8080/styles/klokantech-3d/style.json',
      icon: ``,
      layerGroups: [] // DEFAULT_LAYER_GROUPS
    },{
      id: 'dark',
      label: 'Dark Matter',
      url: 'http://localhost:8080/styles/dark-matter/style.json',
      icon: `http://localhost:8080/styles/dark-matter/12/2071/1529.png`,
      layerGroups: [] // DEFAULT_LAYER_GROUPS
    },{
      id: 'dark-cadastre',
      label: 'Dark Matter Cadastre',
      url: 'http://localhost:8080/styles/dark-matter-3d/style.json',
      icon: ``,
      layerGroups: [] // DEFAULT_LAYER_GROUPS
    }
  ];

  render () {
    return (
      <div
            style={{
              transition: 'margin 1s, height 1s',
              position: 'absolute',
              width: '100%',
              height: '100%'
            }}
      >
        <AutoSizer>
          {({height, width}) => (
            <KeplerGl
              id="map"
              mapboxApiAccessToken={MAPBOX_TOKEN}
              mapStylesReplaceDefault={this.replaceDefaultStyles}
              mapStyles={this.mapStyles}
              width={width}
              height={height}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({dispatch});

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
