function enterDetails(){
    let car={
        brand:cbrand.value,
        price:price1.value,
        key:key1.value
    }
    if(car.key in localStorage){
        alert('Details already exists')
    }
    else{
        localStorage.setItem(car.key,JSON.stringify(car))
        alert('Car Details Added')


    }

}

function retrieveRec(){
    let keys=retrieve.value
    if(keys in localStorage){
        let carDet=JSON.parse(localStorage.getItem(keys))
        console.log(carDet);
        result.innerHTML=`
        <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Car Brand :${carDet.brand}</li>
    <li class="list-group-item">Price :${carDet.price}</li>
    <li class="list-group-item">key :${carDet.key}</li>
  </ul>
</div>`
    }else{
        alert(`car with key ${keys} doesn't exists`)
     }
    

}

function deleteRec(){
    keys=remove.value
    if(keys in localStorage){
        localStorage.removeItem(keys)
        alert(`Details of car with key ${keys} is removed`)
    }
    else{
        alert(`Car with key ${keys} doesn't exists`)
    }
}
function clearAll(){
    localStorage.clear()
    alert('All details cleared')
}