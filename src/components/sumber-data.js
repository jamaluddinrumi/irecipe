class SumberData {
  static cariResep(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return Promise.resolve(responseJson.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static cariResepBerdasarkanId(keyword) {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        return Promise.resolve(responseJson.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
export default SumberData;