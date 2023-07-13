// Importing the fs module
let fs = require("fs")

// Intitializing the readFileLines with the file
const readFileLines =(filename) =>
   fs.readFileSync(filename)
   .toString('UTF8')





   // Calling the readFiles function with file name
let ewords = readFileLines('exclude.txt');
let ew=[]
ewords=ewords.split("\n")

for(let i=0;i<ewords.length;i++)
{
    words=ewords[i].split(" ")
   for(j=0;j<words.length;j++)
   {
    ew.push(words[j])
   }
}
console.log("excluded words ",ew)

let arr = readFileLines('Page1.txt');

// Printing the response array
arr=arr.split("\r\n")
data1=[]
for(let i=0;i<arr.length;i++)
{
    words=arr[i].split(" ")
   for(j=0;j<words.length;j++)
   {
    if(ew.indexOf(words[j])==-1)
       data1.push(words[j])
   }
}

let arr1 = readFileLines('Page2.txt');

// Printing the response array
arr1=arr1.split("\r\n")
data2=[]
for(let i=0;i<arr1.length;i++)
{
    words=arr1[i].split(" ")
   for(j=0;j<words.length;j++)
   {
    if(ew.indexOf(words[j])==-1)
       data2.push(words[j])
   }
}
let arr2 = readFileLines('Page3.txt');

// Printing the response array
arr2=arr2.split("\r\n")
data3=[]
for(let i=0;i<arr2.length;i++)
{
    words=arr2[i].split(" ")
   for(j=0;j<words.length;j++)
   {
    if(ew.indexOf(words[j])==-1)
       data3.push(words[j])
   }
}

let alldata=[]
for(i=0;i<data1.length;i++)
{
    alldata.push(data1[i])

}
for(i=0;i<data2.length;i++)
{
    alldata.push(data2[i])

}
for(i=0;i<data3.length;i++)
{
    alldata.push(data3[i])

}


console.log("all data is ")
alldata.sort()
let setdata=new Set(alldata)
alldata=Array.from(setdata)


console.log(alldata)
for(i=0;i<alldata.length;i++)
{
    let text=alldata[i]+":"
    if(data1.indexOf(alldata[i])!=-1)
    {
      text=text+"1,"
    }
    if(data2.indexOf(alldata[i])!=-1)
    {
      text=text+"2,"
    }
    if(data3.indexOf(alldata[i])!=-1)
    {
      text=text+"3,"
    }
    
    fs.appendFile("index.txt", text+"\n", (err) => {
        if (err) {
          console.log(err);
        }
        else {
        }
      });
    
}
