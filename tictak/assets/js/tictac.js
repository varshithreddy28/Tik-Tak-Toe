//variable declaration
var space=document.querySelectorAll('.elemen')
var span=document.querySelectorAll('span')
var h2=document.getElementsByTagName('h2')[0]
var reset=document.querySelector('#reset')
var chooise=document.querySelectorAll('.chooise')
var rb = document.getElementById('rb')
var numInput = document.getElementById('input')
var min1=document.getElementById('min1')
var min2=document.getElementById('min2')
var max=document.getElementById('max')
var score1=0
var score2=0
var winning=0
var gameover=true
var player=1
var chooise1
var chooise2
var gamerunning
var player1=[]
var player2=[]
var count=0
var tictak={}
//selecting chooise for players
for (var i = 0; i < chooise.length; i++) {
	chooise[i].addEventListener('click',function(){
		if(this.value=='x'){
			chooise1='X'
			chooise2='O'
			gamerunning=true
			tictak.game()
			h2.textContent='PLAY'
			count=0
		}			
		else{
			h2.textContent='PLAY'
			chooise1='O'
			chooise2='X'
			gamerunning=true
			tictak.game()
			count=0
		}
			
	})
}
//adding X or O in game
tictak.game=function(){
	for (var i = 0; i < space.length; i++) {
		space[i].addEventListener('click',function(){		
			if(gamerunning==true){
				if(this.textContent==''){
					if(player==1){
						count+=1
						player1.push(this.textContent=chooise1)
						this.classList.add('spacex')
						player=2
						tictak.check()
					}
					else if (player==2) {
						count+=1
						player2.push(this.textContent=chooise2)
						this.classList.add('spacex')
						player=1
						tictak.check()
					}
				}
			}
		})
	}
}
//checking winners
tictak.winner=function(){
	if(h2.textContent=='winner player1'){
		score1+=1
		min1.textContent=score1
	}
	else if(h2.textContent=='winner player2'){
		score2+=1
		min2.textContent=score2
	}
}
tictak.check=function(){
	if(winning!=score1&&winning!=score2){
		if(space[0].textContent==chooise1 && space[1].textContent==chooise1 && space[2].textContent==chooise1){
			h2.textContent='winner player1'
			tictak.winner()			
			gamerunning=false			
		}	
		else if(space[3].textContent==chooise1 && space[4].textContent==chooise1 && space[5].textContent==chooise1)
		{
			h2.textContent='winner player1'
			tictak.winner()
			gamerunning=false
		}	
		else if(space[6].textContent==chooise1 && space[7].textContent==chooise1 && space[8].textContent==chooise1)
		{
			h2.textContent='winner player1'
			tictak.winner()
			gamerunning=false
		}
		else if(space[0].textContent==chooise1 && space[3].textContent==chooise1 && space[6].textContent==chooise1)
		{
			h2.textContent='winner player1'
			tictak.winner()
			gamerunning=false
		}
		else if(space[1].textContent==chooise1 && space[4].textContent==chooise1 && space[7].textContent==chooise1){
			h2.textContent='winner player1'
			tictak.winner()
			gamerunning=false
		}
		else if(space[2].textContent==chooise1 && space[5].textContent==chooise1 && space[8].textContent==chooise1){
			h2.textContent='winner player1'
			tictak.winner()
			gamerunning=false
		}
		else if(space[0].textContent==chooise1 && space[4].textContent==chooise1 && space[8].textContent==chooise1){
			h2.textContent='winner player1'
			tictak.winner()
			gamerunning=false
		}
		else if(space[2].textContent==chooise1 && space[4].textContent==chooise1 && space[6].textContent==chooise1){
			h2.textContent='winner player1'
			tictak.winner()
			gamerunning=false
		}
		else if(space[0].textContent==chooise2 && space[1].textContent==chooise2 && space[2].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else if(space[3].textContent==chooise2 && space[4].textContent==chooise2 && space[5].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else if(space[6].textContent==chooise2 && space[7].textContent==chooise2 && space[8].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else if(space[0].textContent==chooise2 && space[3].textContent==chooise2 && space[6].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else if(space[1].textContent==chooise2 && space[4].textContent==chooise2 && space[7].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else if(space[2].textContent==chooise2 && space[5].textContent==chooise2 && space[8].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else if(space[0].textContent==chooise2 && space[4].textContent==chooise2 && space[8].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else if(space[2].textContent==chooise2 && space[4].textContent==chooise2 && space[6].textContent==chooise2){
			h2.textContent='winner player2'
			tictak.winner()
			gamerunning=false
		}
		else{
			if(count<9){
				h2.textContent='PLAY'
			}	
			else if (count==9) {
				h2.textContent='MATCH TIED'
			}
		}
	}
}
//for new game and for next match
tictak.newgame=function(){
	for (var i = 0; i < space.length; i++) {
		space[i].textContent=''
	}
}
//adding game point
tictak.scoreset=function() {
	score1=0
	min1.textContent=score1
	score2=0
	min2.textContent=score2
	min1.style.color='black'
	winning=numInput.value
	gamerunning=true
	gameover=true
}
//reset board button
reset.addEventListener('click',function(){
	for (var i = 0; i < space.length; i++) {
		space[i].classList.remove('spacex')
	}
	h2.textContent='PLAY'
	player=1
	gamerunning=true
	count=0
	if(score1==winning||score2==winning){
		gamerunning=false
		if(score1>score2)
			h2.textContent='WINNER PLAYER1'
		else if(score1<score2)
			h2.textContent='WINNER PLAYER2'
	}
	tictak.newgame()
})
//reset score button
rb.addEventListener('click',function() {
	for (var i = 0; i < space.length; i++) {
		space[i].classList.remove('spacex')
	}
	h2.textContent='TIED'
	player=1
	numInput.value=''
	max.textContent=''
	gamerunning=true
	count=0
	tictak.newgame()
	scoreset()
	})
//updating input values to the game point
numInput.addEventListener('change',function(){
	max.textContent=numInput.value
	winning=numInput.value
	tictak.scoreset()
})
//animations on menu icon
$('.fa-bars').on('click',function(){
	$('#menu').toggle('slow')
})
