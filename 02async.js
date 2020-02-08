//什么事async， 返回async promise函数
// async function testAsync() {
//     return 'Hello async'
// }
// const result = testAsync
// console.log(result)


// async function getSomething() {
//     return 'something'
// }
// async function testAsync() {
//     return 'Hello'
// }
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync()
//     console.log(v1, v2)
// }
// test();

function toPromise() {
    return new Promise(resolve=>{
        setTimeout(()=> resolve("long_time"), 1000)
    })
}

async function test() {
    const v = await toPromise();
    console.log(v)
}

test();