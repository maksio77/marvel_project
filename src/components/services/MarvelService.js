class MarvelService {
      _apiBase = 'https://gateway.marvel.com:443/v1/public/';
      _apiKey = 'apikey=9b3540319b534ab33b7e085dfeb2e0b1';
      
      getResource = async (url) => {
            let res = await fetch(url);

            if(!res.ok){
                  throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            return await res.json();
      }

      getAllCharacters = () => {
            return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
      }

      getCharacters = (id) => {
            return this.getResource(`${this._apiBase}/${id}?${this._apiKey}`);
      }
}

export default MarvelService;