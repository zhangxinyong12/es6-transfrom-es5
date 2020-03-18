const n = 20;

const add = (a, b = 20) => {
    return a + b;
};

for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000 * i)
}
