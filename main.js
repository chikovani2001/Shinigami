let ready = document.querySelector('#ready')
ready.onclick = function() {
    getItem();
    

}

let refresh = document.querySelector('#refresh')
refresh.onclick = function(){
    window.location.reload();
}




function getItem(){
    let variable = document.querySelector('#input').value;
    if(variable == "ანასტასია" | variable == "ტასო" ){
        const elem = document.createElement('p');
        elem.style.color = 'white';
        elem.style.fontSize = '22px';
        elem.innerText = `ოხ ${variable}, შე ბული გოგო შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem, target);


        var elem1 = document.createElement("img");
        elem1.src = '/images/eat.gif';
        elem1.setAttribute("height", "200");
        elem1.setAttribute("width", "200");
        elem1.setAttribute("alt", "dea1");
        document.getElementById("placehere").appendChild(elem1);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
        
    }else if(variable == "ჯიქი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/shinigami1.jpg'
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "მაჭა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "ოთო" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "ეკა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} დაო  შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';;
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);

    }else if(variable == "ელენე" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `მორიგი ბული გოგო, ჰმ შენ ${variable}:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/boo3.gif';;
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "გიგი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ბედისწერაა ძმაო შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/gigi.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "ჯოლოხავა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea2.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "ქალები" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = 'ყველა ქალი სიკვდილის ღირსია, ვინც კაცს გულს გაუტეხს:';
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        

    }else if(variable == "ჩიქო" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} რავი ძმაო შენმა დაწერილმა კოდმა თუმოგკლა ასე იქნება:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/d2.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "ვაჟა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`;;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/gigi.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "გიორგი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ნუ გეშინია, შენ: არ მოკვდები სანამ იმ გოგოს არ გაიცნობ , რომლის სახელიც "ლი"-ზე იწყება`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/lv.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
    }else if(variable == "ლიზი" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} შენ არასდროს გაგიმეტებდი სასიკვდილოდ`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/real.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);

    }else if(variable == "ლუკა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/d1.gif';;
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);

    }else if(variable == "ბერელა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';;
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);

    }else if(variable == "ნინო" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);
        


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "ნანა" | variable == "ანა" | variable == "ანი" | variable == "ნინი" | variable == "ლიზა" | variable == "მარი" | variable == "მარიამი" | variable == "თამო" | variable == "თამუნა"){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/gigiy.jpg';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "ილია" |variable == "ილო" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }else if(variable == "მამუკა" ){
        const elem3 = document.createElement('p');
        elem3.style.color = 'white';
        elem3.style.fontSize = '22px';
        elem3.innerText = `${variable} ძმაო  შენ:`;
        const target = document.querySelector('#intro');
        target.parentNode.insertBefore(elem3, target);


        var elem4 = document.createElement("img");
        elem4.src = '/images/dea1.gif';
        elem4.setAttribute("height", "200");
        elem4.setAttribute("width", "200");
        document.getElementById("placehere").appendChild(elem4);
        document.querySelector("#demo").innerHTML = randomLeter(letters);
        document.querySelector("#demo1").innerHTML = randomLeter(chars);
    }

}







const letters = [
    '1 წუთში მოკვდები', 
    '12 წელში მოკვდები', 
    '22 წელში მოკვდები', 
    '32 წელში მოკვდები', 
    '11 წელში მოკვდები',
    '90 წელში მოკვდები', 
    'გუშინ მოკვდები', 
    '50 წელში მოკვდები', 
    '1 საუკუნეში მოკვდები', 
    '33 წელში მოკვდები', 
    '23 წელში მოკვდები', 
    '12 წელში მოკვდები', 
    '19 წელში მოკვდები',
    '72 წელში მოკვდები', 
    '12 საუკუნეში მოკვდები', 
    '99 წელში მოკვდები და კი ღორი ხარ', 
    '271 წელში მოკვდები', 
    '27 წელში მოკვდები',
    '27 წელში მოკვდები', 
    '271 წელში მოკვდები', 
    'ჩემზე მალე ნაღდად მოკვდები', 
    'რა მოგკლავს შენ', 
    '1 წამში მოკვდები',
    '58276543281212 წამში მოკვდები',
];

function randomLeter(letters) {
   return letters[Math.floor(Math.random() * letters.length)];
}


const chars = [
    ' ,ჭამისგან', 
    ' ,მანქანა დაგეჯახება', 
    ' ,მეხი დაგეცემა', 
    ' ,მატარებელს ჩაუხტები', 
    ' ,წყალი გადაგცდება',
    ' ,წიწიბურის გამო ძმაკაცი მოგკლავს', 
    ' ,თავს მოიკლავ', 
    ' ,ფეხბურთის ყურება მოგიღებს ბოლოს', 
    ' ,წარმოდგენაც არ მაქ', 
    ' ,მოიწამლები', 
    ' ,გულის შეტევა დაგემართება', 
    ' ,დამბლა დაგეცემა ', 
    ' ,წარმოდგენაც არ მაქ', 
    ' ,ელენე მოგკლავს', 

];

function randomChars(chars) {
    return letters[Math.floor(Math.random() * chars.length)];
}
 
