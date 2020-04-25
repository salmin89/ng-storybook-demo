import { Component } from "@angular/core";
import * as SB from '@storybook/angular'


@Component({
    template: `
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
    `
})
class Headings { }

@Component({
    template: `
        <p class="red"><![CDATA[<p class="red">Lorem ipsum</p>]]></p>
        <p class="blue"><![CDATA[<p class="blue">Lorem ipsum</p>]]></p>
        <a href><![CDATA[<a href>Lorem ipsum</a>]]></a>
    `
})
class Texts { }


SB.storiesOf('UI|Typography', module)
    .add('Headings', () => ({
        component: Headings
    }))
    .add('Texts', () => ({
        component: Texts
    }))