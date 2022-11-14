const mapInit = () => {
  function init() {
    // eslint-disable-next-line no-unused-vars, no-undef
    let myMap = new ymaps.Map('map', {
      center: [59.939, 30.322],
      zoom: 16,
    });
  }
  // eslint-disable-next-line no-undef
  ymaps.ready(init);
};

export {mapInit};
