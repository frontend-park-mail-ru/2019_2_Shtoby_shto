import Component from '../../../modules/Component';
import DNDComponent from '../../../modules/DNDComponent';
import TransformingInput from '../../../components/TransformingInput';
import dnd from '../../../modules/dnd';

import * as cards from '../../../actions/Card';
import * as uiActions from '../../../actions/UI';

import UserAva from './UserAva';

const pen = require('./pen.png');

import UserDisplayer from './UserDisplayer';

class Tag extends Component {
  constructor(tag) {
    super({classes: ['tag', 'tooltip'], style: {'background-color': tag.color}});

    this.addChild(new Component({
      tag: 'span', classes: ['tooltiptext'],
      content: () => tag.text,
    }));


    this.tag = tag;
  }

  generateContent() {
    return ' ';
  }
}

class TagContainer extends Component {
  constructor(tags) {
    super({classes: ['tags__container']});

    tags.forEach((tag) => {
      this.addChild(new Tag(tag));
    })
  }
}


export default class Card extends DNDComponent {
  constructor(card, dispatch) {
    // console.log(card);

    super({classes: ['board__card']});

    this.addChild(new TransformingInput(
        new Component({
          classes: ['card__header'],
          // content: card.caption,
        })
          .addChild(new TagContainer(card.tags))
        //   .addChild(new Component({
        //   classes: ['card__tags'],
        //   content: 'ass fuck',
        // }))
          .addChild(new Component({
          classes: ['card__caption'],
          content: card.caption,
        })),
        {
          classes: ['card__header'],
          content: card.caption,
        },
        'reset').useDblclick().setOnBlur((text) => {
      if (text.length && text !== card.caption) {
        dispatch(cards.setCaption(card.id, text));
      }
    })
    );

    this.editButton = new Component({
      tag: 'img',
      classes: ['card__edit'],
      attrs: {src: pen, hidden: true},
    }).apply((comp) => {
      comp.element.onclick = (e) => {
        dispatch(uiActions.showCard(card));
      };

      comp.element.onmousedown = (e) => {
        e.stopPropagation();
      };
    });
    this.addChild(this.editButton);

    this.apply(
        (comp) => {
          comp.element.onmouseover = (e) => {
            this.editButton.element.hidden = false;
          };
          comp.element.onmouseout = (e) => {
            this.editButton.element.hidden = true;
          };
        }
    );

    if (card.file) {

      const downloadButton = new Component({
        tag: 'button'
      });

      downloadButton.element.onclick = () => {
        dispatch(cards.downloadAttachment(card.id));
      };

      downloadButton.addChild(new Component({
        tag: 'img',
        classes: ['card__download__button'],
        attrs: {
          src: require('./file.png'),
        }
      }));

      this.addChild(downloadButton);
    }

    // this.addChild(
    const userDisplayer = dnd(new UserDisplayer({
      classes: ['card__user__displayer'],
      avatarClasses: ['card__avatar'],
    }, ...card.users)).makeDroppable((place, placed) => {
      if (placed instanceof UserAva) {
        dispatch(cards.attachUser(placed.userId, card.id));
      }
    });

    userDisplayer.forEachChild((ch) => {
      ch.cardId = card.id;
      ch.dispatch = dispatch;
      ch.makeDraggable();
    });

    this.addChild(userDisplayer);

    this.id = card.id;

    this.makeDraggable();
    this.makeDroppable((place, placed) => {
      if (placed instanceof Card) console.log(place.id, placed.id);
    });

    this.dispatch = dispatch;
  }

  del() {
    this.dispatch(cards.deleteCard(this.id));
  }
}
