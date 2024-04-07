const fs = require('fs');

function readFileAsync(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

function writeFileAsync(filePath, data, callback) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}

readFileAsync('answer_1.js', (err, data) => {
    if (err) {
        console.error('Error reading input file:', err);
        return;
    }

    const modifiedData1 = data + "First modification";

    writeFileAsync('output1.txt', modifiedData1, (err) => {
        if (err) {
            console.error('Error writing to output1.txt:', err);
            return;
        }

        readFileAsync('output1.txt', (err, data) => {
            if (err) {
                console.error('Error reading output1.txt:', err);
                return;
            }
            const modifiedData2 = data + "Second modification";

            writeFileAsync('output2.txt', modifiedData2, (err) => {
                if (err) {
                    console.error('Error writing to output2.txt:', err);
                    return;
                }

                readFileAsync('output2.txt', (err, data) => {
                    if (err) {
                        console.error('Error reading output2.txt:', err);
                        return;
                    }
                    console.log('Final content of output2.txt:', data);
                });
            });
        });
    });
});