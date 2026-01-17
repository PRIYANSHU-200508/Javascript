async function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 2000);
  });
}

async function getdata() {
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json()
      console.log(data)
      return 777;
}


async function main() {
  console.log("happy");
  console.log("happy");

  let data = await getdata(); // await lagaya
  console.log(data);

  console.log("happy");
  console.log("happy");
}

main();
