import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    }
    this.homeMarker;
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  loadMarkers(position, map, title) {
    return new window.google.maps.Marker({
      position,
      map,
      title
    });
  }

  onScriptLoad() {
    let markers = [];
    if (navigator.geolocation) {
      //Creating Google Map
      let map;
      navigator.geolocation.getCurrentPosition(position => {
        let pos = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map = new window.google.maps.Map(document.getElementById(this.props.id), {
          center: pos,
          zoom: 13
        })
        this.homeMarker = new window.google.maps.Marker({
          position: pos,
          map,
          title: 'Your current location',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        })
        this.props.updateCoords(position.coords.latitude, position.coords.longitude);
        window.HomeMap = map;
        //Initialize markers after creating map
        for (let obj of this.props.markers) {
          markers.push(this.loadMarkers(obj.geometry.location, window.HomeMap, obj.name));
        };
        this.setState({
          markers
        })
      }, () => alert('Sorry, no position available'), {timeout: 30000, enableHighAccuracy: true, maximumAge: 30000 });      
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
    if (this.props.markers !== prevProps.markers) {
      let markers = [];
      for (let marker of this.state.markers) {
        marker.setMap(null);
      }
      for (let obj of this.props.markers) {
        markers.push(this.loadMarkers(obj.geometry.location, window.HomeMap, obj.name));
      };
      this.setState({
        markers
      })
    }
  }

  render() {
    return (
    <div className="col-lg"> 
      <div style={{ width: '100%', height: '100%' }} id={this.props.id}>

      </div>
    </div>
    );
  }
}

export default GoogleMap;
