import Component from '@ember/component';

export default Component.extend({
    tagName: 'span',
    isOn: false,

    click() {
        this.set('isOn', !this.isOn);
        this.clicked(this.isOn);
    }
});
