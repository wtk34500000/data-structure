const selectionSort = (arr) =>{
    len=arr.length;
    for(let i =0; i< len; i++){
        let minIdx =i
        for(let j = i+1; j<len; j++){
            if(arr[j]< arr[minIdx]){
                minIdx=j
            }
        }
        temp = arr[i]
        arr[i]=arr[minIdx]
        arr[minIdx]=temp
    }
    return arr
}

console.log(selectionSort([3,1,8,4,5,2,9]))