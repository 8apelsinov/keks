'use strict';
var getRandomElement = function (element) {
    var randomElement = Math.floor(Math.random() * element.length);
    return randomElement;
};
var url = []; // массив урлов
var likes = []; //массив лайков
var comments = [
        "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];
//создание массива объектов фото
var getPictureArray = function () {
    

    for (var i = 1; i < 26; i++) {
        url.push("photos/" + i + ".jpg");
    };
    for (var i = 15; i < 201; i++) {
        likes.push(i);
    };
//добавляем объекты в массив
    var obj = [];
    for (var i = 0; i < 25; i++) {
           obj[i] = {
             url: url[i],
             likes: likes[getRandomElement(likes)],
              comments: comments[getRandomElement(comments)]
           };
        
        };
    return obj;
};

// копируем шаблон, работаем с ним
var pictureTemplate = document.querySelector("#picture-template").content;

//создаём функцию, наполняющую клонированные шаблоны
var createPicture = function (photo) {
    var pictureItem = pictureTemplate.cloneNode(true);
    
    pictureItem.querySelector("img").src = photo.url;
    pictureItem.querySelector(".picture-comments").textContent = photo.comments;
    pictureItem.querySelector(".picture-likes").textContent = photo.likes;    
    
    return pictureItem;
};

var pictureElement = document.querySelector(".picture");
var fragment = document.createDocumentFragment();   // фрагмент, состоящий из наполненных клонов шаблона

for (var i = 0; i < 25; i++) {
    fragment.appendChild(createPicture(getPictureArray()[i]));
};
pictureElement.appendChild(fragment);




