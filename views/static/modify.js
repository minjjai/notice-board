
async function handleModify(){

    postId=window.location.search.split('=')[1]

    const title = document.getElementById('formGroupExampleInput').value
    const content = document.getElementById('formGroupExampleInput2').value
   
    const response = await fetch(`/${postId}`,{
        headers :{
            'content-type' : 'application/json',
        },
        method : 'PUT',
        body : JSON.stringify({
            "title":title,
            "content": content
        })
    })


    if (response.status === 200){
        alert('게시글 수정 성공')
        window.location.href = `./detail.html?id=${postId}`
        console.log(postId, "0000000000")
    
    }else if(response.status === 401){
        alert('게시글 수정 실패')
    }

}
