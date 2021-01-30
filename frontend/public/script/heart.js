const result = document.getElementById("result")
const fetchinfo = (obj)=>{
    obj = JSON.stringify(obj);
    fetch('http://localhost:3000/req?info='+obj).then((res) => {
        res.json().then((data) => {
            if (data.error)
                console.log(error)
            else {
                console.log(data.result)
                if(data.result==0)
                    result.innerHTML = '<p>No Risk</p>'
                else if(data.result==1){
                    result.innerHTML = '<p>Risk</p>'
                }
            }
        })
    })
}


const form = document.querySelector("form")
const age = document.getElementById("age")
const sex = document.getElementById("sex")
const cp = document.getElementById("cp")
const trestbps = document.getElementById("trestbps")
const chol = document.getElementById("chol")
const fbs = document.getElementById("fbs")
const restecg = document.getElementById("restecg")
const thalach = document.getElementById("thalach")
const exang = document.getElementById("exang")
const oldpeak = document.getElementById("oldpeak")
const slope = document.getElementById("slope")
const ca = document.getElementById("ca")
const thal = document.getElementById("thal")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const obj = {
        age : age.value,
        sex :sex.value,
        cp : cp.value,
        trestbps : trestbps.value,
        chol : chol.value,
        fbs : fbs.value,
        restecg : restecg.value,
        thalach : thalach.value,
        exang : exang.value,
        oldpeak : oldpeak.value,
        slope : slope.value,
        ca : ca.value,
        thal : thal.value
    }
    console.log(obj)
    fetchinfo(obj)
})