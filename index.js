"use strict";

export default {
    install(Vue, options) {
        /**
         * Spread Properties for Component
         *
         * Usage:
         *  <component v-for="comp in components"
         *             :is="comp.type"
         *             v-props="comp.data"/><component>
         */
        Vue.directive('props', {
            bind() {

                // set the last component child as the current
                let comp = this.vm.$children[this.vm.$children.length - 1];
                let values = null;
                if(this._scope && this._scope.$eval) {
                    values = this._scope.$eval(this.expression);
                } else {
                    values = this.vm.$eval(this.expression);
                }

                if(typeof values !== 'object' || values instanceof Array) {
                    values = { data: values };
                }

                // apply properties to component data
                for(let key in values) {
                    if(values.hasOwnProperty(key)) {
                        let hkey = this.hyphenate(key);
                        let val = values[key];
                        if(typeof val === 'string') {
                            comp.$options.el.setAttribute(hkey, values[key]);
                        } else {
                            comp.$options.el.setAttribute(':' + hkey, values[key]);
                        }
                    }
                }
                comp._initState();
            },

            /*
             * Hyphenate a camelCase string.
             */
            hyphenate(str) {
                let hyphenateRE = /([a-z\d])([A-Z])/g;
                return str.replace(hyphenateRE, '$1-$2').toLowerCase();
            }
        });

    }
}
