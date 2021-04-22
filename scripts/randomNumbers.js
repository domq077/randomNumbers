const randomNumbers = () => {
    const randomNumArr = [];
    while(randomNumArr.length < 20) {
        let randomTemp = Math.floor(Math.random() * 100) + 1;
        if(randomNumArr.indexOf(randomTemp) === -1) {
            randomNumArr.push(randomTemp);
        }
    }
    return randomNumArr
};

export default randomNumbers;