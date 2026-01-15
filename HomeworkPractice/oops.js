class LoopLess {
  printNumbers(n) {
    if (n > 3) return;
    console.log(n);
    this.printNumbers(n + 1);
  }

  printArray(arr, i = 0) {
    if (i >= arr.length) return;
    console.log(arr[i]);
    this.printArray(arr, i + 1);
  }

  printObject(keys, obj, i = 0) {
    if (i >= keys.length) return;
    console.log(keys[i], obj[keys[i]]);
    this.printObject(keys, obj, i + 1);
  }
}

const obj = new LoopLess();
obj.printNumbers(1);
obj.printArray(["A", "B", "C"]);
obj.printObject(Object.keys({ x: 10, y: 20, z: 30 }), { x: 10, y: 20, z: 30 });
