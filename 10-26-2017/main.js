console.log("Hello");

//arrays
let bucket_list =['Learn How To Play The Piano', 'Travel The World', 'Buy an AMG Benz'];
console.log(bucket_list);
console.log(bucket_list.length);
console.log(bucket_list[0]);

//for loop
for (let i=0; i < bucket_list.length; i++){
  console.log(bucket_list[i]);
}
 //movies loop
 let imdb_movie_list = [
   "The Dark Knight",
   "The GodFather",
   "Home Alone",
   "Get Out",

 ]
 let ranker_movie_list = [
   "Get Out",
   "The GodFather",
   "Belly",
   "Home Alone"
 ]

for (i=0; i < imdb_movie_list.length; i++) {
  for(j = 0 ; j < ranker_movie_list.length; j++) {
    if ( imdb_movie_list[i] == ranker_movie_list[j]) {
      console.log(imdb_movie_list[i]);
    }
  }
}

//while loop
let balance =10000 ;
let years = 0;
while (balance <1000000) {
  balance += balance * .07 ;
  years ++ ;
}
console.log("It will take you " + years + " to be a millionare!");


//iterators
imdb_movie_list.forEach(movie => console.log("-" + movie));

let new_list = imdb_movie_list.filter(movie => movie.slice(0 , 1) =="T") ;
new_list.forEach(movie => console.log("-" + movie));
