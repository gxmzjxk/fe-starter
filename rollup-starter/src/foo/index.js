export function fetchSth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Some async result');
        })
    })
}

// export async function foo() {
//     const res = await fetchSth();
//     return res;
// }

export class Bar {
    constructor(name) {
        this.name = name;
    }
    init() {
        fetchSth().then(res => {
            console.log(res);
        });
    }
    
}