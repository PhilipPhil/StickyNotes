import { h, getElementStyle } from './../utils';
import NoteHeader from './../partials/note-header';
import { ButtonAddNote, ButtonTitle, ButtonMenu, ButtonDeleteAll, ButtonTrash, ButtonPageView } from './../buttons';
function NavBar({viewSize, prefix, items, callbacks, icons}){
    const buttons = [ ButtonTitle, ButtonTrash];
    if(viewSize==='pageview'||viewSize==='fullscreen'){
        buttons.splice(1, 0, ButtonMenu )
    }
    return h('div',{
        className:`${prefix}--navbar`,
        style: getElementStyle('navbar')
    },[
        h('div',{
            key: `navbar-item__options`,
            className:`${prefix}--navbar__nav`
        },
            h( NoteHeader, {
                prefix: `${prefix}--navbar__item`,
                viewSize: viewSize,
                icons,
                callbacks,
                buttons: [ButtonDeleteAll, ButtonAddNote]
            })
        )
    ]);
}
export default NavBar;
