import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
    this.state = {
      markers: []
    }
    this.homeMarker;
  }

  loadMarkers(position, map, title) {
    return new window.google.maps.Marker({
      position,
      map,
      title
    });
  }

  onScriptLoad() {
    let map;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = new window.google.maps.Map(document.getElementById(this.props.id), {
          center: pos,
          zoom: 15
        })
        this.homeMarker = new window.google.maps.Marker({
          position: pos,
          map,
          title: 'Your current location',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        })
        this.props.updateCoords(position.coords.latitude, position.coords.longitude);
        window.HomeMap = map;
      });    
    }
  }

  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.googleapis.com/maps/api/js?key=${
        process.env.API_KEY
      }&libraries=places`;
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => this.onScriptLoad());
    } else {
      this.onScriptLoad();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      let markers = [];
      for (let marker of this.state.markers) {
        marker.setMap(null);
      }
      for (let obj of this.props.data) {
        markers.push(this.loadMarkers(obj.geometry.location, window.HomeMap, obj.name));
      };
      this.setState({
        markers
      })
    }
  }


  render() {
    return <div style={{ width: 500, height: 500 }} id={this.props.id} />;
  }
}

export default GoogleMap;
