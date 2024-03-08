$(document).ready(function() {
    // Function to fetch image URLs from assets/images folder
    function fetchImageURLs() {
        var imageUrls = [];
        // Fetch image URLs using AJAX
        $.ajax({
            url: 'assets/images',
            success: function(data) {
                // Filter only image files
                $(data).find("a").attr("href", function (_, url) {
                    if (url.match(/\.(jpeg|jpg|png|gif)$/)) {
                        imageUrls.push(url);
                    }
                });
                // Create image list once URLs are fetched
                createImageList(imageUrls);
            }
        });
    }

    // Function to create image list
    function createImageList(imageUrls) {
        var $imageList = $("#imageList");
        console.log(imageUrls)
        // Clear existing content
        $imageList.empty();
        
        // Iterate over image URLs and create list items
        imageUrls.forEach(function(url) {
            var $img = $("<img>").attr({
                "src": url,
                class: "image"
                });
            var $li = $("<li>").append($img);
            $imageList.append($li);
        });
    }

    // Call the function to fetch image URLs
    fetchImageURLs();
});