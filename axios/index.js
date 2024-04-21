import axios from "axios";

async function getMethod() {
    try {
        const res = await axios.get('http://localhost:8080/')
        .then((response)=>{
            console.log(response.data)
        }).catch((err) =>{ 
            console.error(err) ;
        });
        // console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

getMethod();


async function postMethod(name) {
    axios.post('http://localhost:8080/', { data: name}).catch((err) => {
        console.error(err);
    });
    
}

postMethod("Mogesh");

async function formData() {
    const {data} = await axios.post('/user', document.querySelector('#my-form'), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
}