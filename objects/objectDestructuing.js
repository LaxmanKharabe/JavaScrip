const obj = {
    Id: 1,
    Name: "Object name",
    Length: 3 
};

setTimeout(() => {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`Key: ${key}, Value: ${value}`);
    });
}, 2000);