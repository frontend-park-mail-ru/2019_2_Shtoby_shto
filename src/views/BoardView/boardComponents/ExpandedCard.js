import Component from '../../../modules/Component';
import TransformingInput from '../../../components/TransformingInput';

import Button from '../../../components/Button';

import * as cards from '../../../actions/Card';

import UserDisplayer from './UserDisplayer';

const defaultAva = require('./userAva.png');

import UserApi from '../../../apis/UserApi';
import invertColor from '../../../modules/Utils/invertColor';
import * as uiActions from '../../../actions/UI';
import {changeDeadline} from '../../../actions/Card';

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

    userApi.getSpecificUser(comment['user_id']).then((user) => {
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

    const textarea = new Component({
      classes: ['comment__content'],
      tag: 'textarea',
    });

    this.addChild(
        new Component({classes: ['comment__container']}).addChild(
            new Component({
              classes: ['comment__avatar'],
              tag: 'img',
              attrs: {src: defaultAva},
            })).addChild(textarea).addChild(new Button({
          classes: ['comment__button'],
          content: 'Сказать',
          onclick: () => {
            if (textarea.element.value) {
              dispatch(cards.addComment(cardId, textarea.element.value));
            }
          },
        })),
    );

    // const state = getState();

    this.addChildren(
        ...comments.map((comment) => (
            new Comment(
                comment, comment['user_id'] === userId, dispatch,
            ))).reverse(),
    );
  }
}

class ExpandedTag extends Component {
  constructor(cardId, tag, dispatch) {
    // super({classes: ['expanded__tag'], content: tag.text, style: {
    //   'background-color': tag.color,
    // }});
    super({classes: ['expanded__tag']});

    this.addChild(new Component({
      classes: ['expanded__tag__content'],
      content: tag.text,
      style: {
        'background-color': tag.color,
        'color': invertColor(tag.color),
      },
    }));

    const deleter = new Component({
      classes: ['expanded__tag__deleter'],
      content: 'X',
    });

    deleter.element.onclick = () => {
      dispatch(cards.deleteTag(tag.id, cardId));
    };

    this.addChild(deleter);

    this.tag = tag;
  }

  // generateContent() {
  //   return `${this.tag.text}`;
  // }
}

class TagPlus extends Component {
  constructor(cardId, dispatch) {
    // super({tag: 'input', attrs: {type: 'color'}, classes: ['tag__plus']});
    super({classes: ['tag__plus']});

    // this.addChild(new Component({
    //   tag: 'input',
    //   content: 'введите текст',
    // }))
    const colorPicker = new Component({
      tag: 'input',
      attrs: {type: 'color'},
      classes: ['color__picker'],
      // style: {'border-bottom': 'none'},
    });

    const tagText = new Component({tag: 'input'});

    // this.addChild(tagText);

    const adderContainer = new Component({classes: ['adder__container']});

    // const addButton = new Button();
    const addButton = new Component({
      tag: 'button',
      content: '+',
      classes: ['plus__tag'],
    });

    addButton.element.onclick = () => {
      const color = colorPicker.element.value;
      const text = tagText.element.value;

      if (text && color != '#000000') {
        dispatch(cards.addTag(cardId, text, color));
      }
    };

    adderContainer.addChild(tagText);
    adderContainer.addChild(colorPicker);

    this.addChild(adderContainer);

    this.addChild(addButton);
    // this.addChild(new Input());
    // .setOnChange((text) => {
    //   const color = colorPicker.element.value;
    //   if (text) {
    //     dispatch(cards.addTag(cardId, text, color));
    //   }
    // }));

    // this.addChild(colorPicker);
  }

}

class TagsSection extends Component {
  constructor(tags, cardId, dispatch) {
    super({classes: ['expanded__card__tags']});

    tags.forEach((tag) => {
      this.addChild(new ExpandedTag(cardId, tag, dispatch));
    });

    this.addChild(new TagPlus(cardId, dispatch));
  }
}

class AttachmentArea extends Component {
  constructor(card, dispatch) {
    super({classes: ['attachment__area']});

    if (card.file) {
      const downloadButton = new Component({
        tag: 'button',
        classes: ['download__button'],
      });

      downloadButton.element.onclick = () => {
        dispatch(cards.downloadAttachment(card.id));
      };

      downloadButton
      // this.addChild(new Button({classes: ['download_button']})
          .addChild(new Component({
            tag: 'img',
            attrs: {'src': require('./file.png')},
            style: {'height': '100%'},
          }));

      this.addChild(downloadButton);
    }

    const fileInput = new Component({
      tag: 'input',
      classes: ['attachment__file'],
      attrs: {
        type: 'file',
      },
    });

    const uploadButton = new Component({
      tag: 'button',
      classes: ['upload__button'],
      content: 'прикрепить файл',
    });

    uploadButton.element.onclick = (e) => {
      const file = fileInput.element.files[0];
      dispatch(cards.uploadAttachment(card.id, file));
    };

    const uploadContainer = new Component({
      classes: ['upload__container'],
    });

    this.addChild(uploadContainer.addChild(fileInput).addChild(uploadButton));
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
      <div class='expanded__middle'>
        <textarea></textarea>
        <label class="date_label">
        <span>Дата дедлайна</span>
          <datearea></datearea>
        </label>
        <tags></tags>
      </div>
      <attachment></attachment>
      <users></users>
      <comments></comments>
    `;
  }

  getMounts() {
    return {
      header: this.element.getElementsByTagName('cheader')[0],
      tags: this.element.getElementsByTagName('tags')[0],
      users: this.element.getElementsByTagName('users')[0],
      text: this.element.getElementsByTagName('textarea')[0],
      comments: this.element.getElementsByTagName('comments')[0],
      attachment: this.element.getElementsByTagName('attachment')[0],
      date: this.element.getElementsByTagName('datearea')[0],
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
        }), 'header',
    );

    this.addChild(new TagsSection(card.tags, card.id, this.dispatch), 'tags');

    this.addChild(
        new UserDisplayer({
          classes: ['expanded__card__user__displayer'],
          avatarClasses: ['card__avatar'],
        }, ...card.users), 'users',
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
        }), 'text',
    );

    this.addChild(new AttachmentArea(card, this.dispatch), 'attachment');

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
        },
    ), 'comments');

    this.addChild(new Component(
        {
          tag: 'input',
          classes: ['date_input'],
          attrs: {
            type: 'date',
          },
        },
    ).apply((comp) => {
      comp.element.onchange = (e) => {
        this.dispatch(cards.changeDeadline(card.id, e.target.value))
      };
    }), 'date');
  }
}
