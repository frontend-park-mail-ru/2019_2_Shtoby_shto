export default class VDOM {
	constructor(entry) {
		this.entry = entry;
	}

	createComponentNode(vnode) {
		vnode._instance = new vnode.tag(vnode.attrs, vnode.children, this);
		// vnode._instance.didCreate();
		
		const node = this.create(vnode._instance.render());

		if (node._vnode.children) {
			vnode._instance.children = node._vnode.children;
		}

		node._originalVnode = node._vnode;
		node._vnode = vnode;
		
		vnode._instance.el = node;
		vnode._instance.didMount();

		return node;
	}

	attrResolver(node, attr) {
		const {name, val} = attr;

		if (name === 'classes') {
			val.forEach((style) => {
				node.classList.add(style);
			});
		} else if (name === 'style') {
			Object.assign(node.style, val);
		} else {
			node.setAttribute(name, val);
		}
	}

	createNode(vnode) {
		const node = document.createElement(vnode.tag);

		if (vnode.attrs) {
			Object.entries(vnode.attrs).forEach(([name, val]) => {
				this.attrResolver(node, {name, val});
			});
		}

		// if (vnode.attrs) {
		// 	Object.entries(vnode.attrs).forEach(([name, val]) => {
		// 		node.setAttribute(name, val);
		// 	});
		// }

		// if (vnode.classes) {
		// 	vnode.classes.forEach((cssStyle) => {
		// 		node.classList.add(cssStyle);
		// 	});
		// }

		// if (vnode.style) {
		// 	Object.assign(node.style, vnode.style);
		// }

		if (vnode.children) {
			vnode.children.forEach(child => node.appendChild(this.create(child)));
		}

		node._vnode = vnode;

		return node;
	}

	attachListeners(node, vnode) {
		if (vnode.events) {
			Object.entries(vnode.events).forEach((listener) => {
				const [name, payload] = listener;
				if (payload instanceof Array) {
					node.addEventListener( name, ...payload);
				} else {
					node.addEventListener( name, payload);
				}
			})
		}
	}

	create(vnode) {
		let node = undefined;

		if (typeof vnode === 'string') {
			node = document.createTextNode(vnode);
		} else if (typeof vnode.tag === 'function') {
			node = this.createComponentNode(vnode);
		} else {
			node = this.createNode(vnode);
		}

		node._vnode = vnode;

		this.attachListeners(node, vnode);

		return node;
	}

	render(vnode) {
		this.rootVnode = vnode;

		const node = this.create(vnode);
		this.entry.replaceWith(node);
		this.entry = node;
	}

	attrEqual(lhs, rhs) {
		if ((lhs instanceof Array) && (rhs instanceof Array)) {
			if (lhs.length === rhs.length) {
				lhs.sort();
				rhs.sort();

				for (let i = 0; i < lhs.length; i++) {
					if (lhs[i] !== rhs[i]) {
						return false;
					}
				}

				return true;
			} else {
				return false;
			}
		} else {
			return lhs === rhs;
		}
	}

	makeDiff(prevAttrs, newAttrs) {
		const diff = {};

		prevAttrs = prevAttrs || {};
		newAttrs = newAttrs || {};

		Object.entries(newAttrs).forEach(([name, val]) => {
			if (name in prevAttrs) {
				if (!(this.attrEqual(val, prevAttrs[name]))) {
					diff[name] = typeof val === 'undefined'
						? {type: '-'}
						:{type: '>', val};
				}
			} else {
				diff[name] = {type: '>', val};
			}
		});

		Object.entries(prevAttrs).forEach(([name, val]) => {
			if (!(name in newAttrs)) {
				diff[name] = {type: '-'}
			}
		})

		return diff;
	}

	updateAttrs(node, prevAttrs, attrs) {
		const diff = this.makeDiff(prevAttrs, attrs);

		// if (Object.entries(diff).length > 0) console.log('diff:', diff);

		Object.entries(diff).forEach(([name, difference]) => {
			switch (difference.type) {
				case '>': {
					this.attrResolver(node, {name, val: difference.val})
				}
				break;
				case '-': {
					node.removeAttribute(name);
				}
			}
		});

		// if (attrs) {
		// 	for (const [name, value] of Object.entries(attrs)) {
		// 		node.setAttribute(name, value);
		// 	}
		// }

		// // Удаляем старые атрибуты, которых не встретилось в новых
		// if (prevAttrs) {
		// 	for (const name of Object.keys(prevAttrs)) {
		// 		if (!attrs || !attrs.hasOwnProperty(name)) {
		// 			node.removeAttribute(name);
		// 		}
		// 	}
		// }
	}

	updateChildren(node, prevChildren, children) {
		const childLength = children ? children.length : 0;

		for (let i = 0, j = 0; i < childLength; i++, j++) {
			const prevVchild = prevChildren && prevChildren[j];
			const vchild = children[i];

			const fromString = typeof prevVchild === 'string';
			const toString = typeof vchild === 'string';

			if (fromString && toString) {
				if (prevVchild !== vchild) {
					node.childNodes[i].textContent = vchild;
				}
			} else if (
				!fromString &&
				!toString &&
				prevVchild &&
				prevVchild.key === vchild.key
			) {
				this.update(node.childNodes[i], vchild);
			} else {

				// node.insertBefore(this.create(vchild), node.childNodes[i]);
				// node.removeChild(node.childNodes[i+1]);
				if (typeof node.childNodes[i]._vnode.tag === 'function') {
					node.childNodes[i]._vnode._instance.willUnmount();
				}

				node.childNodes[i].replaceWith(this.create(vchild));
				j--;
			}
		}
	}

	update(node, vnode) {
		let prevVnode = node._vnode;
		let resultVnode = vnode;

		const isComponent = typeof prevVnode.tag === 'function';

		if (isComponent) {
			prevVnode._instance.willUpdate(vnode.attrs, vnode.children);

			vnode = prevVnode._instance.render();

			resultVnode._instance = prevVnode._instance;
			prevVnode = node._originalVnode;
			node._originalVnode = vnode;
		}

		this.updateAttrs(node, prevVnode.attrs, vnode.attrs);

		if (node.nodeType != Node.TEXT_NODE) {
			this.updateChildren(node, prevVnode.children, vnode.children);
		}
		// if (prevVnode.children) {
			// this.updateChildren(node, prevVnode.children, vnode.children);
		// }

		if (isComponent) {
			resultVnode._instance.didUpdate();
		}
	}
}
