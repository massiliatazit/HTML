
function changeheading(newheader){

    let newtext = document.getElementById("textheader");
    newtext.innerHTML = newheader;
  }
  changeheading("Favorite Items")
  function changebackground (newcolor){

     document.body.style.background = newcolor; 
   
  }
  changebackground ('rgba(255, 255, 128, .5)')

  /*function changefooter (newaddress){
     
    let fakeaddress = document.getElementsByClassName('about');
    fakeaddress[0].innerHTML = newaddress;

  }
  console.log(changefooter('Spain'))

    /*EXERCISE 1 
       Create a new welcome alert message when the page successfully loads
      */
      window.onload = function () {

       alert( "the page is successfully loaded")
    };
/* EXERCISE 2
Write a function to change the Title of the page in something else (execute the function in browser console)
*/
const changeTitle = function (newtitle) {
document.title = newtitle;

}
changeTitle ("Fashion Shop")


  /* EXERCISE 3a
        Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
    */
   const addClassToTitle = function () {

    let color = document.querySelector("#textheader");
    color.classList.add('redTitle');
    console.log('this color', color)
 return color
};
console.log(addClassToTitle())




const removeClassFromTitle = function () {

let del = document.querySelector("#textheader");
 del.classList.remove('redTitle');

};

removeClassFromTitle()
    /* EXERCISE 4
    
    Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
    */

    function changetext(){

      let firstlist = document.getElementById ("firstList");

       for (i=0; i<firstlist.children.length; i++){
        if (firstlist.children[i].hasChildNodes() ){
          console.log(firstlist.children[i].firstChild.innerHTML = 'Changing me!')

        }
      }
        }
        
        
        /*
       
        const changePContent = function () {
          let paragraph = document.querySelectorAll('div p');
          for(let i=0; i<paragraph.length; i++){
          paragraph[i].innerText= " i'm changing here also !!";
          }
      };

      */


    /* EXERCISE 5
        Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content)
    */
   const changeListTitle = function () {
        let  content = document.getElementById("newTitle")
       let listTitle = document.querySelector("listTitle");
       listTitle.innerText = content
 
   };
   console.log(changeListTitle())
   /* EXERCISE 6
        Write a function to add a new item ONLY to the second list (create an input field + add button)
   */

   /*
   const addToTheSecond = function () {
     
    
    let content = document.getElementById('addtolist')
    let list = document.querySelector("secondList")
     listitem = document.createElement("li");                 // Create a <li> node
    let item = document.createTextNode("Bugs");         // Create a text node
    listitem.appendChild(item);                              // Append the text to <li>
    content.appendChild(list);


   };


   */
   //console.log(addToTheSecond ())


   const addToTheSecond = function () {
    let content= document.querySelector('#newTitle');
    let myList = document.querySelector('#secondList');
    let listItem= document.createElement("li");
    listItem.innerText = content.value;
    myList.appendChild(listItem);   
};
   /* EXERCISE 7
       Write a function to make the first UL disappear (button)

   */
   const firstUlDisappear = function () {

    let firstList = document.querySelector('firstList')
    firstList.remove()

   };
   /* EXERCISE 8
       Write a function to make the background of every UL green (button)
   */
   const paintItGreen = function () {  

    let ul = document.getElementsByTagName('ul')

    ul.style.backgroundColor = 'green'

   };
 
   /* EXERCISE 9
       Add a "magnifier function" to the table.
       When the user mouse goes on a table cell (not the image one) the font size must increase.
       HINT use mouseenter / mouseleave events
   */
   const makeThemMagnifiable = function () {};
   /* EXERCISE 10
       Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
   */
   const toggleShowImages = function () {};
 
   //##### EXTRA
 
   /* EXERCISE 11
       Make the heading of the page change color radomly every time the user clicks on it
       */
   const makeItClickable = function () {};
 
   /*EXERCISE 12
     Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
 */

 


       
      
      
    