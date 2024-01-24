const data = [12,45,190,18,500,11,122,20,30,100];
// const data = [12,45,190,18,500];

const bubblesort = (data) =>{
    const length = data.length;
    let attempt = 0;

    const swap = (data, left, right)=>{
        ([data[left],data[right]]=[data[right],data[left]]);
    }
    for (let index = 0; index < length; index++) {

        for (let cIndex = 0; cIndex < length-1-index; cIndex++) {
            attempt++;
            //conditional test if the left value(max) is greater than right(min)
            if(data[cIndex]>data[cIndex+1]){
                swap(data,cIndex,cIndex+1);
            }  
        }  
    }
    console.log(attempt);
    return data;
}
console.log(bubblesort(data));