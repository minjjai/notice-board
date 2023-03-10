window.onload = function(){
    $.ajax({
        type: 'GET',
        url: '/get',
        datatype: 'json',
        success: function(result) {
            console.log(result);
          for( let i =0 ; i < result.data.length ; i++){
            const title = result.data[i].title
            const postId = result.data[i].postId
            const createdAt0 = result.data[i].createdAt
            // const comments = result.data[i].comments 
            const createdAt = createdAt0.substring(5, 10);

            html_template= `
            <h6>
                <span class="card-text">${createdAt}</span>   
                <a class="card-title" href="./detail.html?id=${postId}" class="a_title">${title}</a>
            
            </div>
            </h6>
            `
            $('#boardlist').append(html_template)
          }
        },
        error: function() {
            console.log('통신에러')
        }
    });
}