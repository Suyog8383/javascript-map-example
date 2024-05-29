function processData(input) {
    
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const phoneBook = new Map();

    // Preprocess phone book entries
    for (let i = 1; i <= n; i++) {
        const [name, number] = lines[i].trim().split(' ');
        phoneBook.set(name, number);
    }

    // Process queries
    for (let i = n + 1; i < lines.length; i++) {
        const query = lines[i].trim();
        if (phoneBook.has(query)) {
            console.log(${query}=${phoneBook.get(query)});
        } else {
            console.log("Not found");
        }
    }


    
}
