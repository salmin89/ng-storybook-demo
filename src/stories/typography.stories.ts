import { Component } from "@angular/core";
import * as SB from '@storybook/angular'

export default {
    title: 'UI|Typography'
}

export const Headings = () => ({
    template: `
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
    `
})

export const Texts = () => ({
    template: `
        <p class="red"><![CDATA[<p class="red">Lorem ipsum</p>]]></p>
        <p class="blue"><![CDATA[<p class="blue">Lorem ipsum</p>]]></p>
        <a href><![CDATA[<a href>Lorem ipsum</a>]]></a>
    `
})