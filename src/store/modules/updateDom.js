const DIM = 'updateDom/DIM';
const POPUP = 'updateDom/POPUP';
const SIDEMENU = 'updateDom/SIDEMENU';
const BUYBUTTON = 'updateDom/BUYBUTTON';

export const updateDimDom = (dimDom) =>({type: DIM, dimDom: dimDom});
export const updatePopupDom = (popupDom) =>({type: POPUP, popupDom: popupDom});
export const updateSideMenuDom = (sideMenuDom) =>({type: SIDEMENU, sideMenuDom: sideMenuDom});
export const updateBuyButtonDom = (buyButtonDom) =>({type: BUYBUTTON, buyButtonDom: buyButtonDom});

const initialState = {
    dimDom: null,
    popupDom: null,
    sideMenuDom: null,
    buyButtonDom: null
};

export default function reducer(state = initialState, action){
    
    switch(action.type){
        case DIM:
            return Object.assign({}, state, {
                dimDom: action.dimDom
            });
        case POPUP:
            return Object.assign({}, state, {
                popupDom: action.popupDom
            });
        case SIDEMENU:
            return Object.assign({}, state, {
                sideMenuDom: action.sideMenuDom
            });
        case BUYBUTTON:
            return Object.assign({}, state, {
                buyButtonDom: action.buyButtonDom
            });
        default:
            return state;
    }
}