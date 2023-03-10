window.onload = function(){
    postId=window.location.search.split('=')[1]
    
    $.ajax({
        
        type: 'GET',
        url: `/${postId}`,
        dataType: 'json',
        success: function(result) {
            const title =result.data.title
            const content = result.data.content

          template = ` <div class="card">
                            <div class="card-header">
                            <h5 class="card-title">${title}</h5>
                            </div>
                            <div class="card-body">
                            <p class="card-text">${content}</p>
                            </div>
                        </div>
                        <div class="btnwrap" id="buttons">
                        <button type="button" ><a href="./modify.html?id=${postId}">수정</a></button>
                        <button type="button" id="deletebnt" onclick="alert()">삭제</button>
                      </div>`

            $('#card').append(template)

        },
        error: function() {
            console.log('통신에러')
        }
    });
}

 function alert() {
    $.ajax({
        type: 'DELETE',
        url: `/${postId}`,
        dataType: 'json',
        success: function(result) {
            
        alert('게시글이 삭제 되었습니다.')
        window.location.href="./main.html"
        },
        error: function() {
            console.log('통신에러')
        }
    });
};