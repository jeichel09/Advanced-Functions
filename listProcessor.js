function solve(arr) {
    let collect = [];
    for (let comm of arr) {
        let [command, text] = comm.split(" ");
        if (command === "add") {
            collect.push(text);
        } else if (command === "remove") {
            collect = collect.filter(e => e !== text);
        } else if (command === "print") {
            console.log(collect.join(","));
        }
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
