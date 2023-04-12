
{/*add local storage id*/}
const addDB=job=>{
    
    let jobsCart=[]

    const storedCart=localStorage.getItem('jobs-cart')
    if(storedCart){
         jobsCart=JSON.parse(storedCart)
    }

    // let quantity=jobsCart[id]
    //  if(quantity){
    //     quantity=quantity+1;
    //     jobsCart.push=quantity;
    //  }
    //  else{
    //     jobsCart[id]=1
    //  }
     jobsCart.push(job)
     localStorage.setItem('jobs-cart', JSON.stringify(jobsCart));
}


{/*get local storage id*/}

const getDB = () => {
    let appliedjobCart = {}
  
    //get the shopping cart from local storage
    const storedjobCart = localStorage.getItem('jobs-cart')
    if (storedjobCart) {
      appliedjobCart = JSON.parse(storedjobCart)
    }
    return appliedjobCart
  }


export{addDB,getDB}