fetch("https://gnews.io/api/v4/search?q=example&token=627b49e7367a7f65f2a215a9c6186329&lang=en").then((data)=>{
    //console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData);
    let tableData ="";
    [objectData].map((values)=>{
        tableData += `<tr>
        <td>${values.title}</td>
        <td>${values.name}</td>
        <td>${values.content}</td>
        <td>${values.description}</td>
        <td><img src="${values.image}"</td>
        </tr>`
    })
    document.getElementById("table_body").innerHTML=tableData;
})