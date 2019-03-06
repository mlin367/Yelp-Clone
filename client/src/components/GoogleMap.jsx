import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  // loadMap(lat, lng) {
  //   let pos = new window.google.maps.LatLng(lat, lng);
  //   let map = new window.google.maps.Map(
  //     document.getElementById(this.props.id),
  //     {
  //       center: pos,
  //       zoom: 15
  //     }
  //   );
  //   return map;
  // }

  // loadMarkers(position, map, title) {
  //   new window.google.maps.Marker({
  //     position,
  //     map,
  //     title
  //   });
  // }

  onScriptLoad() {
    let map;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = new window.google.maps.Map(document.getElementById(this.props.id), {
          center: pos,
          zoom: 15
        })
        new window.google.maps.Marker({
          position: pos,
          map,
          title: 'Your current location'
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


  render() {
    return <div style={{ width: 500, height: 500 }} id={this.props.id} />;
  }
}

export default GoogleMap;
