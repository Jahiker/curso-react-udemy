export const getImagen = async() => {

    try {

        // const apiKey = 'QaRyV2VZO0t4t9NQmj7bM5CORAo7C2dM';
        const apiKey = '';

        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        console.log(url)
        return url

    } catch (error) {
        // manejo del error
        return "No se encontro la imagen"
    }
    
}
