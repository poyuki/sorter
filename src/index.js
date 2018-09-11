class Sorter {
  comparator(a,b){
    return a-b;
  }
  constructor() {
    this.array=[];
  }

  add(element) {
    // your implementation
      this.array.push(element);
  }

  at(index) {
    // your implementation
      return this.array[index]
  }

  get length() {
    // your implementation
      return this.array.length
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
      indices.sort((a,b)=>a-b);
      let tempArray=[];
      indices.forEach((el)=>{
        tempArray.push(this.array[el]);
      });
      tempArray.sort(this.comparator);
      indices.forEach((el,index)=>{
        this.array[el]=tempArray[index];
      })
  }

  setComparator(compareFunction) {
      this.comparator=compareFunction
  }
}

module.exports = Sorter;