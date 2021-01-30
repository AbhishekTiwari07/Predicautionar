const result = document.getElementById("result")
const fetchinfo = (obj)=>{
    obj = JSON.stringify(obj);
    fetch('http://localhost:3000/dreq?info='+obj).then((res) => {
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
const pregnancies = document.getElementById("pregnancies")
const glucose = document.getElementById("glucose")
const bp = document.getElementById("bp")
const insulin = document.getElementById("insulin")
const dpf = document.getElementById("dpf")
const bmi = document.getElementById("bmi")
const st = document.getElementById("st")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const obj = {
        pregnancies : pregnancies.value,
        glucose : glucose.value,
        bp : bp.value,
        st : st.value,
        insulin : insulin.value,
        bmi : bmi.value,
        dpf : dpf.value,
        age : age.value
    }
    console.log(obj)
    fetchinfo(obj)
})