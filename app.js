const key = "Hs6m7dOwrpeQh8D3wdHbX5dZti1GtFn3";
const $gifContainer = $("#gifContainer")
const $searchBox = $("#searchBox")

async function addGif(response){
    let numberOfResults = response.data.length;
    if(numberOfResults){
        let pickRandomDataIndex = Math.floor(Math.random() * numberOfResults);
        let $newColumn = $("<div>");
        $newColumn.addClass("newcontainer")
        let $newGIF = $("<img>", {src: response.data[pickRandomDataIndex].images.original.url, class: "newGIFImage"});

        $newColumn.append($newGIF);
        $gifContainer.append($newColumn);
    }
}

$("form").on("submit", async function(event){
    event.preventDefault();
    let query = $searchBox.val();
    $searchBox.val('');

    const response = await axios.get("http://api.giphy.com/v1/gifs/search?q=" + query +"&api_key=" + key)
    console.log(response);
    addGif(response.data);
});

$("#removeButton").on("click", function(){
    $gifContainer.empty();
})
