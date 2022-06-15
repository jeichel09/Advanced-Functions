function solve(arr) {
    let collect = {};
    for (let comm of arr) {
        let [command, text, commInh, eleInh] = comm.split(" ");
        if (command === "create") {
            collect[text] = commInh ? Object.create(collect[eleInh]) : {};
        } else if (command === "set") {
            collect[text][commInh] = eleInh;
        } else if (command === "print") {
            let entries = [];
            for (let key in collect[text]) {
                entries.push(`${key}:${collect[text][key]}`);
            }
            console.log(entries.join(","));
        }
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
