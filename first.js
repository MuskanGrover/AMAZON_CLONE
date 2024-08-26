//fname="TONY STARK";
// console.log(fname);
// age=24;
// console.log(age);
// price=99.89;
// console.log(price);
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// let fullName="TONY STARK";
// console.log(fullName);
// var age=24;
// var age=89;
// var age=90;
// console.log(age);
//  fullName="neha";
// const student={mname:"RAHUL",age:19,marks:90};
// console.log(student);
// const product={pename:"Parker Jotter",rating:3,isDeal:true,price:270};
// console.log(product);
// let num=prompt("ENTER A NUMBER");
// if(num%5==0)
//     {
//         console.log("MULTIPLE OF 5");
//     }
// else{
//     console.log("NOT A MULTIPLE OF 5");
// }
//  for(let count=1;count<=1000000000;count++)
//     {
//         console.log("APNA COLLEGE");
//    }
//  console.log("LOOP ENDS");
// let sum=0;
// for(let i=1;i<=5;i++)
//     {
//         sum=sum+i;
//     }
// console.log(sum);
// let str="MUSKAN GROVER";
// for(let v of str)//(v is iterator and will take characters)
//     {
//         console.log(v);
//     }
// let size=0;
// let stri="JAVASCRIPT";
// for(let val of stri)
//     {
//         console.log(val);
//         size++;
//     }

// const student={name:"neha",class:12,age:20};

// for(let key in student)
//     {
//         console.log(student.age);//for in keys return krta hai not values but values can be accessed
//     }
// for(let num=0;num<=100;num+=2)
//     {
//         console.log(num);
//     }
// let gamenum=25;
// let num=prompt("GUESS A NUMBER: ");
// while(num!= gamenum)
//     {
//     num=prompt("GUESS AGAIN");
//     }
// console.log("congo");
//ARRAY
let heroes=["TONY STARK","HULK","BATMAN"];

//by for loop
// for(let i=0;i<heroes.length;i++)
//     {
//         console.log(heroes[i]);
//     }


//by for of loop
// for(let i of heroes)
//     {
//         console.log(i);
//     }


//practice ques
// let marks=[85,97,44,37,76,60];
// let sum=0;
// let avg=0;
// for(let mark of marks)
//     {
//         sum+=mark;
//         avg=sum/6;
//     }
//     console.log(avg);

//practice 2
//let prices=[250,645,300,900,50];
// let idx=0;
// for(let val of prices)
//     {
//         console.log(`VALUE AT INDEX ${idx}=${val}`);
//         let offer=val/10;
//         prices[idx]=prices[idx]-offer;
//         console.log(`VAUE AFTER OFFER= ${prices[idx]}`);
//         idx++;
//     }

// for(let i=0;i<prices.length;i++)
//     {
//         let off=prices[i]/10;
//         prices[i]=prices[i]-off;
//         console.log(`VALUE AFTER OFFER = ${prices[i]}`)
//     }


//ARRAY METHODS
// let foodItems=["POTATO","APPLE","LITCHI","TOMATO"];
// console.log(foodItems);
// console.log(foodItems.toString());


//FUNCTION
// function myfunc()
// {
//     console.log("HELLO PPL");
// }

// function mymsg(msg,n)
// {
//     console.log(msg*100);
// }
// let msg="HI MY NAME IS MUSKAN GROVER";
// mymsg(msg,100);o/p NAN
// let res=0;
// function sum(a,b)
// {
//     res=a+b;
// }
// sum(10,20);
// console.log(res);

// let sum=0;
// function sumof(a,b)
// {
//     sum=a+b;
//     return sum;
// }
// let res=sumof(10,10);
// console.log(res);

// let pro=0;
// function pro_of(x,y)
// {
//     pro=x*y;
//     return pro;
// }
// let pres=pro_of(10,10);
// console.log(pres);

//BY ARROW Function
// const asum=(a,b)=>{
//     return a+b;
// }

// const mul=(a,b)=>
//     {
//         return a*b;
//     }
// let r=mul(10,10);
// console.log(r);
// const print=()=>
//     console.log("HELLO:)");
// print();

//PRACTICE 1 TAKE A STRING AND REURN VOWEL
// let cnt=0;
// function vowel(str)
// {
    
//     for(let val of str)
//         {
//             if(val==='a' || val==='e' || val==='i' || val==='o' || val==='u')
//                 {
//                     cnt++;
                    
//                 }
//         }
//         return cnt;
// }
// let strr="hello my name is muskan";
// let v=vowel(strr);
// console.log(v);

// let cnt=0;
// const myvowel=(str)=>
//     {
//         for(let val of str)
//         {
//            if(val==='a' || val==='e' || val==='i' || val==='o' || val==='u')
//                 {
//                     cnt++;
//                 }
//          }
//        return cnt;
// }
// let strr="hello my name is muskan";
// let res=myvowel(strr);
// console.log(res);


//FOR EACH METHOD OF ARRAY

// arr.forEach(function fun(val)
// {
//     console.log(val);
// })
// let arr=[99,88,77,66,55];
// arr.forEach((val,idx,arr)=>
// {
//     console.log(val,idx,arr);
// });

//PRACTICE
//let arr=[1,2,3,4,5];
// arr.forEach((val,idx)=>
//     {
//         console.log(val*val);
//     });

//MAP METHOD
// let val=["monika","manu","sheela","selu"];
// let newarr=val.map((values)=>
// {
//     return val;
// });
// console.log(newarr);

//FILTER METHOD
// let arr=[1,2,3,4,5,6,7];
// let even=arr.filter((val)=>
// {
//     return val%2===0;
// });
// console.log(even);

// const array1=[1,2,3,4];
// const iv=0;
// const sum=array1.reduce((res,val)=>
//     {
//         return res+val;
//     });
// console.log(sum);

//PRACTCE 1
// let marks=[90,99,34,89,100];
// let big=marks.filter((val)=>
// {
//     if(val>=90)
//         {
//             return val;
//         }
// });
// console.log(big);

let num=prompt("USER PLZ ENTER A NUMBER:) ");
let arr=[];
for(let i=1;i<=num;i++)
    {
        arr[i-1]=i;
    }
let sum=0;
const sumof=arr.reduce((pre,curr)=>
{
    sum=pre+curr;
    return sum;
});
console.log(sumof);
let prod=1;
const pro=arr.reduce((p,c)=>
{
    prod=p*c;
    return prod;
});
console.log(pro);

