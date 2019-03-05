import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    let pos;
    let map;
    let marker;

    if (this.props.saved) {
      pos = new window.google.maps.LatLng(this.props.saved[0].lat,this.props.saved[0].lng);
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          pos = new window.google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        });
      }
    }

    map = new window.google.maps.Map(document.getElementById(this.props.id), {
      center: pos,
      zoom: 15
    });

    marker = new window.google.maps.Marker({
      position: pos,
      map,
      title: 'Your favorite place'
    })

  }

  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places`;
      const x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', (e) => this.onScriptLoad());
    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return(
      <div style={{ width: 500, height: 500 }} id={this.props.id}>

      </div>
    )
  }
}

export default GoogleMap;