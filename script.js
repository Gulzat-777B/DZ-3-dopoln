$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function(data){
            let postsList = $('#posts-list');
            $.each(data, function(index, post){
                postsList.append('<li><strong>' + post.title + '</strong><br>' + post.body + '</li>');
            });
        },
        error: function(){
            $('#posts-list').append('<li>Error fetching posts.</li>');
        }
    });
});



// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
    
//     console.log(data);
//   });












