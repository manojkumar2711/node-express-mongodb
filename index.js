
axios.get("api/user")
 .then(res => console.log(res.data))
 .catch(err => console.error(err))

axios.post("api.user",{
     title: "foo",
  body: "bar",
   id:3
})
 .then(res => console.log(res.data))
 .catch(err => console.error(err))



fetch("url")
 .then(res => res.Json())
 .then(res => console.log(res.data))
.catch(err => console.error(err))
 

fetch('url',{
    method:POST,
    headers: {"Content-type" : "application/Json"},
    body :{

    }
})

 application.get('api/user', (req ,res) => {
       res.Json([{id:3 ,name :manoj}])
 } );


 async function createPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      })
    });
    const data = await res.json();
    console.log(data);
  }
   catch (err) {
    console.error(err);
  }
}

createPost();
