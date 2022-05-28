// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "monica",
    gender: "female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: "Yellow, Pink, White, Purple",
    isHavePet: "yes",
    education : {   
    name: "SD 01",
     city: "Jakarta",
      graduate: 2016
},

favoriteRestaurant : "Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, Padang, Tteok, Sushi, Sush"
    
    
};

const secondUser = {
    name: "Wendy",
    gender: "male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: "Blue, Black Grey",
    isHavePet: "No",
    education : {   
        Sd : {
    	name: "SD 02",
         city: "Jakarta", 
         graduate: "2010",
        },
        smp: {
         name: "SMP 03",
          city: "Bogor", 
          graduate: "2013",
        },
        Sma : {
          name: "SMA 01",
           city: "Surabaya",
            graduate: "2016",
        },
        S1 : {
            name: "Universitas Maju",
             city:" Tangerang"
        }	
},

favoriteRestaurant : "Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, Padang, Tteok, Sushi, Sush"
    
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};