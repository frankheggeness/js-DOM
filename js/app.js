/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var changeName1 = document.getElementById('name1');
changeName1.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var changePosition2 = document.getElementById('position2');
changePosition2.innerHTML = 'Project Manager'

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var changeAlias3 = document.getElementById('alias3');
changeAlias3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var changeProfile = document.getElementsByClassName('profile');
changeProfile[0].innerHTML = 'Purple Rain';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

changeProfile[1].innerHTML = 'Knowing is not enough, we must apply. Willing is not enough, we must do.';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var changeAlias = document.getElementsByClassName('alias');
changeAlias[2].innerHTML = 'Jules Winnfield';


/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/
var makeName = document.createElement('div');
makeName.id = 'name7';
makeName.innerHTML = 'David Ige'
nameParent.appendChild(makeName);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/
makeAlias = document.createElement('div');
makeAlias.id = 'Stay Thirsty My Friends';



//Final Boss
/*9. Create your own profile.*/

