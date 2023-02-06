import { Component, OnInit, Input } from '@angular/core';
import { Info } from 'src/app/components/models/Info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  listaInfo: Info[] = [];

  constructor() {
    const item = new Info();
    item.tituloInfo = 'Lorem ipsum dolor sit amet, consectetur',
      item.textoInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus. Phasellus vestibulum lorem sed risus ultricies tristique. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Faucibus pulvinar elementum integer enim neque. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Magnis dis parturient montes nascetur ridiculus mus mauris. Non tellus orci ac auctor augue mauris augue. Id aliquet lectus proin nibh nisl. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Varius duis at consectetur lorem. Hendrerit dolor magna eget est lorem ipsum. Integer quis auctor elit sed vulputate mi. Aenean euismod elementum nisi quis eleifend quam adipiscing. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Ut placerat orci nulla pellentesque dignissim enim sit. Bibendum enim facilisis gravida neque. Nunc pulvinar sapien et ligula ullamcorper. Ornare aenean euismod elementum nisi quis eleifend quam. Fermentum posuere urna nec tincidunt praesent semper feugiat. Enim facilisis gravida neque convallis a cras semper auctor neque. Adipiscing bibendum est ultricies integer quis. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Donec massa sapien faucibus et molestie ac feugiat. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.',
      item.imagemInfo = 'assets/img/info.jpeg'
    this.listaInfo.push(item)
  }

  ngOnInit(): void {
  }

}
