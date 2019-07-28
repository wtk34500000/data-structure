const bubbleSort = (arr) => {
    for(let i =arr.length-1; i >=0; i--){
        for(let j=1; j<=i; j++){
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1]
                arr[j-1]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([9,4,1,10,3,8,2]))