
function selectSearch(state=[], action, index){
    console.log(action.type);
    switch(action.type) {
        case 'SEARCH':
            return [
                ...state.slice(0, index),
                {...state[index], position: state[index].position + ' skyblue'},
                ...state.slice(index+1)
            ]
        case 'MOUSENTER':
            console.log(state);
            return [
                ...state.slice(0, index),
                {...state[index], position: true},
                ...state.slice(index+1)
            ]
        case 'MOUSELEAVE':
            return [
                ...state.slice(0, index),
                {...state[index], position: false},
                ...state.slice(index+1)
            ]
        case 'DESIGNATION':

        case 'SELECTTEAM':
            state.map(function(item, index) {
                item.position = item.position + ' skyblue'
            });

            return state;
        case 'DESELECTTEAM':
            state.map(function(item, index) {
                item.position = item.position.split(' ')[0];
            });

            return state;
        default: 
            return state

    }
}

const employees = (state={}, action) => {
    console.log(action.type);
    switch(action.type) {
        case 'SEARCH':
            let tem;
            let ind; 
            
            Object.keys(state).forEach(function(item, index) {
                state[item].forEach(function(innItem, i) {
                    if(innItem.name.toLowerCase() == action.name.toLowerCase()) {
                        tem = item;
                        ind = i;
                    }
                })
            })
            if(tem != undefined && ind != undefined) {
                return {...state,
                [tem]: selectSearch(state[tem], action, ind) }
            } else {
                Object.keys(state).map(function(item, index) {
                 state[item].map(function(innItem, i) {
                     innItem.position = innItem.position.split(' ')[0];
                 })
             })
             return {...state};
            }
            

        case 'MOUSENTER':
            return {...state,
                [action.item]: selectSearch(state[action.item], action, action.key) }
        case 'MOUSELEAVE': 
           return {...state,
                [action.item]: selectSearch(state[action.item], action, action.key) }

        case 'SELECTDESIGNATION':
            console.log('hi');
            
             Object.keys(state).map(function(item, index) {
                 state[item].map(function(innItem, i) {
                     if(innItem.designation === action.designation) {
                         innItem.position = innItem.position + ' skyblue'
                     }
                 })
             })
             
             return {...state};

         case 'DESELECTDESIGNATION':
             Object.keys(state).map(function(item, index) {
                 state[item].map(function(innItem, i) {
                     if(innItem.designation === action.designation) {
                         innItem.position = innItem.position.split(' ')[0];
                     }
                 })
             })
            return {...state};

        case 'SELECTTEAM':
            return {...state,
                [action.team]: selectSearch(state[action.team], action) }
        case 'DESELECTTEAM':
            return {...state,
                [action.team]: selectSearch(state[action.team], action) }
        default: 
         return state
    }
    
}

export default employees;