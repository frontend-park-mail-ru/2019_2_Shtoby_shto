import Component from '../../../modules/Component';
import TransformingInput from '../../../components/TransformingInput';

import Button from '../../../components/Button';

import * as cards from '../../../actions/Card';

import UserDisplayer from './UserDisplayer';

const defaultAva = require('./userAva.png');

import UserApi from '../../../apis/UserApi';
const userApi = new UserApi();

class Comment extends Component {
  constructor(comment, addDeleter, dispatch, username) {
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

    this.username = '';

    userApi.getSpecificUser(comment['user_id'])
        .then((user) => {
          this.username = user.login;
          this.render();
        });
  }

  generateContent() {
    return `
      <img class='comment__avatar' src=${defaultAva}></img>
      <span class='comment__username'>${this.username}</span>
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
  constructor(comments, dispatch, cardId, userId, userName, getState) {
    super({classes: ['comment_section']});

    console.log(getState());

    const textarea = new Component({
      classes: ['comment__content'],
      tag: 'textarea',
    });

    this.addChild(
        new Component({classes: ['comment__container']})
            .addChild(new Component({
              classes: ['comment__avatar'],
              tag: 'img',
              attrs: {src: defaultAva},
            }))
            .addChild(textarea)
            .addChild(new Button({
              classes: ['comment__button'],
              content: 'Сказать',
              onclick: () => {
                if (textarea.element.value) {
                  dispatch(cards.addComment(cardId, textarea.element.value));
                }
              },
            }))
    );

    // const state = getState();

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
  constructor(card, dispatch, userId, userName, getState) {
    super({classes: ['expanded__card']});

    this.userId = userId;
    this.userName = userName;

    this.dispatch = dispatch;
    this.getState = getState;

    this.initChildren(card);
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
        this.userName,
        () => {
          return this.getState();
        }
    ));
  }
}
