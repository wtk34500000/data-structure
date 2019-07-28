const insertionSort = (arr)=>{
    let len=arr.length
    for(let i = 1; i<len; i++){
        let key=arr[i];
        let j=i-1;
        while(j >=0 && arr[j]> key){
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=key
    }
    return arr
}


console.log(insertionSort([2,5,1,7,5,8,3]))