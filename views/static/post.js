
async function handlePost(){

    const title = document.getElementById('formGroupExampleInput').value
    const content = document.getElementById('formGroupExampleInput2').value
   
    const response = await fetch(`/post`,{
        headers :{
            'content-type' : 'application/json',
        },
        method : 'POST',
        body : JSON.stringify({
            "title":title,
            "content": content
        })
    })


    if (response.status === 200){
        alert('게시글이 등록 성공')
        window.location.href = "./main.html"
    
    }else if(response.status === 401){
        alert('게시글 등록 실패')
    }

}