import React from 'react';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
  }

  onScriptLoad() {

  }

  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places`
    }
  }
}