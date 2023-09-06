import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jonathan';
  age = 22;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  names: string[]= ['Nicolas', 'Juli', 'Jona']
  newName = ''

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  descreaseAge(){
    this.person.age -= 1;
  }

  resetAge(){
    this.person.age = 0;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
    
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = ''
  }

  deleteName(index: number){
    this.names.splice(index, 1)
  }
}
