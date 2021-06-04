var hobbies = ["Sports", "Cooking"];

/** for (let hobby of hobbies) {
    console.log(hobby);
} */

console.log(
  hobbies.map((hobby, index) => {
    return {
      index: index,
      hobby: hobby,
    };
  })
);
console.log("hobbies", hobbies);
