//task 1
function processData(num1 = 0, num2 = 0, action = 'sum')
{
    let result
    if (action === 'sum') { result = num1 + num2 }
    else if (action === 'product') { result = num1*num2 }
    else if (action === 'square') { result = Math.pow(num1, num2) }

    console.log(result)
}

processData();
processData(2, 3, 'square')

//task 2
const arr = [1,2,3,4,5,6,7,8,9,0]

function findElem(arr, el) {
    return arr.includes(el);
}

console.log(findElem(arr, 7));
console.log(findElem(arr, "Alex"));

//task 3
const arr1 = [1,2,3,4,5,6,7,8,9,0]

function deleteItem(arr, item) 
{
    return arr.filter(element => element !== item);
}

console.log (deleteItem(arr,8))
console.log (deleteItem(arr,'a'))

//task 4

function getCircleLength()
{
    let r = Number(prompt ('enter circle radius',''))

    if (r <= 0 || isNaN(r))
    { throw new Error ("Incorrect radius - please, enter numeric value!")}

    let lenght = 2*Math.PI*r
    return lenght
}

try
{
    getCircleLength()
}
catch (exception)
{
    console.log (exception.message)
}

//task 5
function checkID()
{
    let ID = (prompt ('Enter your ID',''))

    if (ID === '' || ID === null)
        { throw new Error ("The field is empty! Please enter your ID")}

    ID = Number(ID)
    if (isNaN(ID))
        { throw new Error ("Incorrect value - please, enter numeric value!")}
   
    if (ID < 1 || ID > 1000)
        { throw new Error ("ID is out of range")}
    
    return ID
}

try
{
    let userId = checkID()
    console.log ("Your Id:", userId )
}
catch (exception)
{
    console.log(exception.name)
    console.log (exception.message)
}