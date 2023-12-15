const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // console.log('Submitted');
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    displayImages(res.data);
    form.elements.query.value = '';
})

const displayImages = (shows) => {
    removeImages();
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

const removeImages = () => {
    const images = document.querySelectorAll('IMG');
    for (let i = 0; i < images.length; i++) {
        images[i].remove();
    }
}