import App from './modules/App';
import Component from './modules/Component';
import DNDComponent from './modules/DNDComponent';
import Button from './components/Button';
import dnd from './modules/dnd';

import Router from './components/Router';

import forEachProp from './modules/Utils/forEachProp';

function makeRouterWithHeader(routesViews, defaultRoute) {
  const router = new Router(defaultRoute);

  const headerTabs = new Component({
    classes: ['header__tabs'], style: {'display': 'flex'},
  });

  forEachProp(routesViews, (route, view) => {
    router.registerView(route, view);
    headerTabs.addChild(new Component({
      tag: 'a',
      classes: ['header__link'],
      attrs: {href: route},
      content: route,
    }));
  });

  return router.addChild(
      new Component({classes: ['header'], content: '<span>header</span>'})
          .addChild(headerTabs),
      'prepend');
}

export default class DemoApp extends App {
  setup() {
    this.enableDebug();

    this.addComponent(dnd(makeRouterWithHeader({
      '/': new Component({content: '<h2>index view</h2>'}),
      '/profile': new Component({content: '<h2>profile view</h2>'}),
      '/board': new DNDComponent().makeDraggable()
          .addChild(new DNDComponent({content: '<span>draggable</span>'})
              .makeDraggable())
          .addChild(new DNDComponent({
            count: 0,
            content: (p) => {
              return `<span>drops: ${p.count}</span>`;
            }})
              .makeDraggable().makeDroppable((c) => {
                c.update({increaseCount: 1});
              })
              .setUpdateHandler((self, updateEvent) => {
                self.props.count += updateEvent.increaseCount;
              }))
          .addChild(new DNDComponent({
            content: '<span>droppable</span>',
            onPlace: (place, dropped) => {
              console.log('placing', dropped, 'on', place);
            }})),
      '/inner': makeRouterWithHeader({
        '/1': new Component({content: '<h3>1 sub-view</h3>'}),
        '/2': new Component({content: '<h3>2 sub-view</h3>' +
        '<a href="profile">open profile</a>'}),
        '/3': new Component({content: '<h3>3 sub-view</h3>'}),
      }, '/1').startRouting(),
    }, '/').useHistory().startRouting()).makeDraggable());

    this.addComponent(new Button({
      content: 'press me',
      onclick: () => {
        setTimeout(() => {
          this.root.children[0].component.detach();
        },
        2000);
      },
    }));
  }
}
