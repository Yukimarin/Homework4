// Bài 1: Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi.
// myColor = ["Red", "Green", "White", "Black"];
// Đầu ra mong đợi :
// "Red, Green, White, Black"
// "Red + Green + White + Black"
// let myColor = ["Red", "Green", "White", "Black"];
// let a = myColor.join(", ");
// console.log(a);
// let b = myColor.join(" + ");
// console.log(b);

// Bài 2: Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch ngang (-) vào giữa hai số chẵn. 
// Ví dụ: nếu bạn chấp nhận 025468, đầu ra phải là 0-2-5-4-6-8.
// let number = prompt('nhập dãy số bất kì').split('');
// let a=[];
// for(let i = 0; i < number.length; i++) {
//     a.push(number[i]);
// }
// let b = a.join('-');
// console.log(b);
   
//  Bài 4: Viết kịch bản yêu cầu người dùng nhập một dãy số.
// Các số được phân tách bằng dấu phẩy, tính tổng các số và hiển thị cho người dùng
// let n = prompt('Nhập vào dãy số, phân cách bằng dấu ,').split(",");
// let a = 0; 
// for (let i = 0; i < n.length; i++) {
//     a = a + Number(n[i]);    
// }
// alert(`The sum of them is ${a}`);

// Bài 5: Viết script yêu cầu người dùng nhập một dãy số, các số được phân tách bằng dấu phẩy.
// Tìm số nhỏ nhất và đăng xuất cho người dùng
// let n = prompt('Nhập vào dãy số, phân cách bằng dấu ,').split(",");
// let min = Number(n[0]);
// for (let i = 0; i < n.length; i++) {
//    if (min > Number(n[i])){
//        min = Number(n[i]); 
//    }    
// }
// alert(`Số nhỏ nhất là ${min}`);

//Bài 6: Tạo một mảng chứa ít nhất 5 số, sau đó yêu cầu người dùng nhập một số.
//Thực hiện tìm kiếm để tìm số trong mảng, nếu số được tìm thấy,
// hãy cho người dùng biết rằng với chỉ số của nó trong mảng,
//nếu không, cũng nói với họ như vậy
// let numbers = [3, 4, 6, -9, 10, -88, 2];
// let n = Number(prompt('Nhập vào số muốn tìm'));
// let findIndex = -1; 
// for (let i = 0; i < numbers.length; i++) {
//     if (n === numbers[i]){
//         findIndex =i 
//     }    
// }
// if (findIndex === -1){
//     alert(`${n} is not found in my array`);
// } else {
//     alert(`${n} is found in my array at index ${findIndex}`)
// }

// Bài 7: Bạn là một người chăn cừu sở hữu một đàn cừu.

// console.log('Xin chào, đây là kích thước đàn cừu của tôi:');
// let sheep = [5,7,300,90,24,50,75];
// console.log(sheep);

// let max = Math.max.apply(null,sheep);
// console.log(`Con cừu lớn nhất của tôi có kích thước ${max}, hãy cạo nó`);

// console.log(`Sau khi cạo lông, đây là đàn cừu của tôi`);
// sheep[sheep.indexOf(max)] =8;
// console.log(sheep);

// let month1 = 0; 
// for (let i = 0; i < 3; i++) {
//     month1++    
//     for (let i = 0; i < sheep.length; i++) {
//         sheep[i] = sheep[i] + 50;   
//     }
//     console.log('MONTH'+month1);
//     console.log('Sau 1 tháng bầy cừu của tôi đã lớn và kích cỡ của chúng là:');
//     console.log(sheep);
//     let max2 = Math.max.apply(null,sheep);
//     console.log(`Con cừu lớn nhất của tôi có kích thước ${max2}, hãy cạo nó`);
//     console.log(`Sau khi cạo lông, đây là đàn cừu của tôi`);
//     sheep[sheep.indexOf(max2)] =8;
//     console.log(sheep);
// }
// let a = 0; 
// for (let i = 0; i < sheep.length; i++) {
//     a = a + sheep[i];    
// }
// console.log(`Đàn của tôi có tổng kích thước ${a}`);
// let tien = a*2;
// console.log(`Tôi sẽ lấy ${a} x 2$ = ${tien}`);

// Bài 8: (Tùy chọn) Viết tập lệnh yêu cầu người dùng nhập một chuỗi tên, được phân tách bằng dấu phẩy (,), Tạo một mảng mới chứa các tên, mỗi tên được bao quanh bằng dấu <>.
//  Nếu bạn cần gợi ý, hãy tìm chúng ở cuối bài tập về nhà này
// let a = prompt('Nhập chuỗi tên người và ngăn cách bằng dấu ,');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//     c.push(`<${b[i]}>`);    
// }
// alert(`${b}=> ${c}`);

// Bài 9: (Tùy chọn) Viết tập lệnh yêu cầu người dùng nhập một chuỗi Số, được phân tách bằng dấu phẩy (,).
// Tạo một mảng mới chỉ chứa các Số lẻ của dãy đã nhập.
// let a = prompt('Nhập vào chuỗi số ngăn cách bằng dấu ,');
// let b = a.split(',');
// let c = [];
// for (let i = 0; i < b.length; i++) {
//     if (Number(b[i] %2 === 1)){
//         c.push(b[i]);
//     }    
// }
// alert (`${b} =>${c}`);
