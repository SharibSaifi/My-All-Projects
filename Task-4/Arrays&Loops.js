let array=[1, 4, 2, 1, 3, 1, 1, 1, 2, 2, 2];
array.sort();
let ans=array[0],count=1;
for(let i=1;i<array.length;i++){
    if(count==3){
        break;
    }
    if(array[i]!=ans){
        ans=array[i];
        count++;
    }
}
console.log(ans);