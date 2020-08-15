class SumberData {
    static cariResep(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
                .then(response => {
                    return response.json();
                })
                .then(responseJson => {
                    return responseJson;
                })
                .catch(error => {
                    console.log(error);
                });
    }
}
export default SumberData;