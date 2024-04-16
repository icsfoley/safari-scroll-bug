import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import * as lipsum from '../lib/lipsum';


export default class RootComponent extends Component {

  @tracked hasClickedButton = false;
  @tracked hasFinishedLoading = false;
  @tracked messages = null;

  @action
  onClick () {
    this.hasClickedButton = true;
    setTimeout(() => {
      this.hasFinishedLoading = true;
      this.messages = lipsum.paragraphs.map((paragraph, idx) => ({
        key: idx,
        text: paragraph,  // Not currenly used. See the comment in `root.hbs` for explanation.
        blocks: paragraph.split(' '),  // hacky way to simulate blocks
      }));
    }, 500);
  }

  @action
  onPartsChanged () {
    requestAnimationFrame(() => {
      const conversationStream = document.querySelector('#conversation-stream');
      // Super weird: if 'smooth' is changed to 'auto' here, not only does the
      // bug not occur, but it doesn't even get confused about the height. The
      // component is correctly scrolled all the way to the bottom (the *real*
      // bottom, not the fake-out that VerticalCollection thinks is the bottom)
      conversationStream.scrollTo({top: conversationStream.scrollHeight, behavior: 'smooth'});
    });
  }
}
