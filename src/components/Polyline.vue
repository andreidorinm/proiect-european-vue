<Polyline 
  v-for="(institution, index) in institutions"
  :key="'line-' + index"
  :path="[institution.location, targetSchool.location]"
  :options="{
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    icons: [{
      icon: {path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW},
      offset: '100%'
    }]
  }"
/>
