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
      conversationStream.scrollTo({top: conversationStream.scrollHeight, behavior: 'smooth'});
    });
  }
}
