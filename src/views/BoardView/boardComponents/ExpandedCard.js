import Component from '../../../modules/Component';
import TransformingInput from '../../../components/TransformingInput';

import Button from '../../../components/Button';

import * as cards from '../../../actions/Card';

import UserDisplayer from './UserDisplayer';

class Comment extends Component {
  constructor(comment, addDeleter, dispatch) {
    super({classes: ['comment']});

    this.content = comment.text;

    if (addDeleter) {
      this.addChild(new Button({
        classes: ['comment__deleter'],
        content: 'X',
        onclick: () => {
          dispatch(cards.deleteComment(comment.id));
        },
      }), 'deleter');
    }
  }

  generateContent() {
    return `
      <img class='comment__avatar' src=/build/userAva.png></img>
      <span class='comment__content'>${this.content}</span>
      <deleter></deleter>
    `;
  }

  getMounts() {
    return {
      deleter: this.element.getElementsByTagName('deleter')[0],
    };
  }
}

class CommentSection extends Component {
  constructor(comments, dispatch, cardId, userId) {
    super({classes: ['comment_section']});

    const textarea = new Component({
      classes: ['comment__content'],
      tag: 'textarea',
    });

    this.addChild(
        new Component({classes: ['comment__container']})
            .addChild(new Component({
              classes: ['comment__avatar'],
              tag: 'img',
              attrs: {src: '/build/userAva.png'},
            }))
            .addChild(textarea)
            .addChild(new Button({
              classes: ['comment__button'],
              content: 'Сказать',
              onclick: () => {
                dispatch(cards.addComment(cardId, textarea.element.value));
              },
            }))
    );

    this.addChildren(
        ...comments.map((comment) => (
          new Comment(
              comment, comment['user_id'] === userId, dispatch
          )))
            .reverse()
    );
  }
}


export default class ExpandedCard extends Component {
  constructor(card, dispatch, userId) {
    super({classes: ['expanded__card']});

    this.userId = userId;

    this.initChildren(card);

    this.dispatch = dispatch;
  }

  generateContent() {
    return `
      <cheader></cheader>
      <textarea></textarea>
      <users></users>
      <comments></comments>
    `;
  }

  getMounts() {
    return {
      header: this.element.getElementsByTagName('cheader')[0],
      users: this.element.getElementsByTagName('users')[0],
      text: this.element.getElementsByTagName('textarea')[0],
      comments: this.element.getElementsByTagName('comments')[0],
    };
  }

  initChildren(card) {
    this.addChild(new TransformingInput(
        new Component({
          tag: 'h3',
          classes: ['expanded__card__header'],
          content: card.caption,
        }),
        {
          classes: ['expanded__card__header'],
          content: card.caption,
        },
        'keep').useDblclick().setOnBlur((text) => {
      if (text.length && text !== card.caption) {
        this.dispatch(cards.setCaption(card.id, text));
      }
    }), 'header'
    );

    this.addChild(
        new UserDisplayer({
          classes: ['expanded__card__user__displayer'],
          avatarClasses: ['card__avatar'],
        }, ...card.users), 'users'
    );

    this.addChild(new TransformingInput(
        new Component({
          classes: ['expanded__card__text'],
          content: card.text ? [...card.text].map((ch) => (
            ch === '\n' ? '<br>' : ch)).join('') : 'Напишите что-нибудь...',
        }),
        {
          tag: 'textarea',
          classes: ['expanded__card__text'],
          content: card.text,
        },
        'keep').useClick().setOnBlur((text) => {
      if (text.length && text !== card.caption) {
        this.dispatch(cards.setText(card.id, text));
      }
    }), 'text'
    );

    this.addChild(new CommentSection(
        card.comments,
        (action) => {
          this.dispatch(action);
        },
        card.id,
        this.userId,
    ));
  }
}
