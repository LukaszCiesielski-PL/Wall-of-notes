(function Note(){
    
    let slideBox; 
    let slideStart;
    let slide;
    let slideEnd;
    let pointX = 0;
    let pointY = 0;
    let addNewNote;
    let testlocalstorage;
    let saveNote;
    let deleteNote;
    let loadNote;
    let getNoteObject;
    let onAddNoteBtnClick;
    let addNoteBtnEl;
    
    addNewNote = function(options){
        let note = document.createElement('div');
        let bar = document.createElement('div');
        let title = document.createElement('div');
        let text = document.createElement('input');
        let textarea = document.createElement('textarea');
        let chaneBackground = document.createElement('div');
        let buttonColor = document.createElement('button');
        let buttonColor2 = document.createElement('button');
        let buttonColor3 = document.createElement('button');
        let buttonColor4 = document.createElement('button');
        let chaneText = document.createElement('div');
        let buttonColor5 = document.createElement('button');
        let buttonColor6 = document.createElement('button');
        let buttonColor7 = document.createElement('button');
        let buttonColor8 = document.createElement('button');
        let date = document.createElement('div');
        let buttonSave = document.createElement('button');
        let buttonDelete = document.createElement('button');
        let Save;
        let Delete;
        let noteConfig = options || {
            content: '',
            id: "note_" + new Date().getTime()         
        };

        note.classList.add('note');
        note.appendChild(bar);
        note.appendChild(title);
        note.appendChild(text);
        note.appendChild(textarea);
        note.appendChild(chaneBackground);
        note.appendChild(buttonColor);
        note.appendChild(buttonColor2);
        note.appendChild(buttonColor3);        
        note.appendChild(buttonColor4);
        note.appendChild(chaneText);
        note.appendChild(buttonColor5);
        note.appendChild(buttonColor6);
        note.appendChild(buttonColor7);        
        note.appendChild(buttonColor8);
        note.appendChild(date);
        note.appendChild(buttonSave);
        note.appendChild(buttonDelete);
        note.addEventListener('mousedown', slideStart, false);

        bar.classList.add('bar');
        
        title.classList.add('title');
        title.appendChild(text);

        text.classList.add('input');
        
        
        textarea.classList.add('textarea');
        
        
        buttonColor.innerHTML = "B";
        buttonColor2.innerHTML = "B";
        buttonColor3.innerHTML = "B";
        buttonColor4.innerHTML = "B";
        buttonColor5.innerHTML = "T";
        buttonColor6.innerHTML = "T";
        buttonColor7.innerHTML = "T";
        buttonColor8.innerHTML = "T";

        chaneBackground.classList.add('changeBackground');
        chaneBackground.appendChild(buttonColor);
        chaneBackground.appendChild(buttonColor2);
        chaneBackground.appendChild(buttonColor3);
        chaneBackground.appendChild(buttonColor4);
        chaneBackground.classList.add('changeText');
        chaneText.appendChild(buttonColor5);
        chaneText.appendChild(buttonColor6);
        chaneText.appendChild(buttonColor7);
        chaneText.appendChild(buttonColor8);

        buttonColor.classList.add('color');        
        buttonColor2.classList.add('color');        
        buttonColor3.classList.add('color');        
        buttonColor4.classList.add('color');        
        buttonColor.classList.add('red');  
        /*buttonColor.addEventListener('click', changeToRed);*/
        buttonColor2.classList.add('blue');
        /*buttonColor2.addEventListener('click', changeToBlue);*/
        buttonColor3.classList.add('yellow');
        /*buttonColor3.addEventListener('click', changeToYellow);*/
        buttonColor4.classList.add('green');
        /*buttonColor4.addEventListener('click', changeToGreen);*/

        buttonColor5.classList.add('color');        
        buttonColor6.classList.add('color');        
        buttonColor7.classList.add('color');        
        buttonColor8.classList.add('color');        
        buttonColor5.classList.add('red2');  
        /*buttonColor5.addEventListener('click', changeToRedText);*/
        buttonColor6.classList.add('blue2');
        /*buttonColor6.addEventListener('click', changeToBlueText);*/
        buttonColor7.classList.add('yellow2');
        /*buttonColor7.addEventListener('click', changeToYellowText);*/
        buttonColor8.classList.add('green2');
        /*buttonColor8.addEventListener('click', changeToGreenText);*/
        
        date.classList.add('date');   
         

        if (noteConfig.textarea) {
            textarea.style.width = noteConfig.textarea.width;
            textarea.style.height = noteConfig.textarea.height;
            textarea.style.resize = 'none';
        }
        
        Save = function (){
            saveNote(getNoteObject(note));
        };

        Delete = function (){            
            deleteNote(getNoteObject(note));
            document.body.removeChild(note);
            
        };

        note.style.transform = noteConfig.transformCSSValue; 
        note.id = noteConfig.id;
        textarea.value = noteConfig.content;
        
       
        buttonSave.classList.add('buttonSave');
        buttonDelete.classList.add('buttonDelete');

        

        buttonSave.addEventListener('click', Save, false);
        buttonDelete.addEventListener('click', Delete, false);

        buttonSave.innerHTML = "🠗";
        buttonDelete.innerHTML = "✖";

        document.body.appendChild(note);
 
        
    };   


    slideStart = function(ev) {
        let boundingClientRect;

        if(ev.target.className.indexOf('bar') === -1){ 
            return;
        }

        slideBox = this;

        boundingClientRect = slideBox.getBoundingClientRect();

        pointY = boundingClientRect.top - ev.clientY;
        pointX = boundingClientRect.left - ev.clientX;
    };

    slide = function(ev){
        if(!slideBox){
            return;
        }
        let posX = ev.clientX + pointX - 50;
        let posY = ev.clientY + pointY - 50;

        if(posY < -50 ){
            posY = -50;
        }
       
        if(posX < -50){
            posX = -50;
        }
       
        slideBox.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
    };

    slideEnd = function(){
        slideBox = null;
        pointY = null;
        pointX = null;
    };

    getNoteObject = function (el){
        let textarea = el.querySelector('textarea');
        return{
            content: textarea.value,
            id: el.id,
            transformCSSValue: el.style.transform,
            textarea: {
                width: textarea.style.width,
                height: textarea.style.height,
            }
        };
    };

    onAddNoteBtnClick = function(){
        addNewNote();
    };

    testlocalstorage = function () {
        let XD = 'XD';
        try {
          localStorage.setItem(XD, XD);
          localStorage.removeItem(XD);
          return true;
        } catch (e) {
          return false;
        }
    }; 

    

    init = function(){
        if(!testlocalstorage()){
            let message = "Nie możesz zapisać notatki";
            saveNote = function () {
                console.warn(message);
            };
            deleteNote = function () {
                console.warn(message);
            };
        }
        else{
            saveNote = function(notes){
                localStorage.setItem(notes.id, JSON.stringify(notes));
            };

            deleteNote = function(notes){
                localStorage.removeItem(notes.id);
            };
            
            loadNote = function () {
                for(let i = 0; i < localStorage.length; i++) {
                  let noteObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
                  addNewNote(noteObject);
                };
              };
              loadNote();  
              
        }

        addNoteBtnEl = document.querySelector('.addNewNotes');      
        addNoteBtnEl.addEventListener('click', onAddNoteBtnClick, false);
        document.addEventListener('mousemove', slide, false);
        document.addEventListener('mouseup', slideEnd, false);


    };
 
    
    init();
  
}());