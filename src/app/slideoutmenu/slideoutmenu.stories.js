import { SlideoutmenuComponent } from './slideoutmenu.component'

export default { title: 'Slideout menu' }

export const slideOutMenu = () => ({
    component: SlideoutmenuComponent,
})

export const slideOutMenuWithProps = () => ({
    component: SlideoutmenuComponent,
    props: {
        text: `Here's my prop`
    }
})