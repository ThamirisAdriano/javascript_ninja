var person = {
  name: "Tony",
  lastname: "Stark",
  age: "57",
  height: 1.94,
  kg: 78,
  walking: false,
  walkinghowmanymeters: 0,
};

person.happybirthday = function () {
  person.age++;
};

person.walk = function (meters) {
  person.walkinghowmanymeters += meters;
  person.walking = true;
};

person.stop = function () {
  if (walking === "false") {
    walking = true;
  }
};

person.showAge = function () {
  return person.idade;
};

1 === 2 ? true : false;
